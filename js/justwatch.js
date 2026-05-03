// JustWatch — streaming availability lookup
// Goes through a Netlify Function proxy at /.netlify/functions/jw because
// apis.justwatch.com doesn't return browser-friendly CORS headers. The
// function forwards POST bodies verbatim and returns the JSON response.

const JW_ENDPOINT = '/.netlify/functions/jw';
const JW_CACHE_TTL = 24 * 60 * 60 * 1000;

const JW_COUNTRIES = [
    { code: 'AU', name: 'Australia' },
    { code: 'TW', name: 'Taiwan' },
    { code: 'US', name: 'United States' },
    { code: 'GB', name: 'United Kingdom' },
    { code: 'IT', name: 'Italy' },
    { code: 'CA', name: 'Canada' },
    { code: 'NZ', name: 'New Zealand' },
    { code: 'FR', name: 'France' },
    { code: 'DE', name: 'Germany' },
    { code: 'JP', name: 'Japan' },
    { code: 'KR', name: 'South Korea' },
    { code: 'SG', name: 'Singapore' }
];

function jwGetCountry() {
    return localStorage.getItem('warrior_jw_country') || 'AU';
}

function jwSetCountry(code) {
    localStorage.setItem('warrior_jw_country', code);
}

function jwCacheKey(title, year, country) {
    return `jw_${country}_${title}_${year || ''}`.toLowerCase().replace(/\s+/g, '_');
}

function jwCacheGet(key) {
    try {
        const raw = sessionStorage.getItem(key);
        if (!raw) return null;
        const { ts, data } = JSON.parse(raw);
        if (Date.now() - ts > JW_CACHE_TTL) return null;
        return data;
    } catch { return null; }
}

function jwCacheSet(key, data) {
    try {
        sessionStorage.setItem(key, JSON.stringify({ ts: Date.now(), data }));
    } catch {}
}

const JW_SEARCH_QUERY = `
query GetSearchTitles($country: Country!, $language: Language!, $first: Int!, $searchQuery: String!) {
  popularTitles(
    country: $country
    first: $first
    filter: { searchQuery: $searchQuery }
  ) {
    edges {
      node {
        id
        objectId
        objectType
        content(country: $country, language: $language) {
          title
          fullPath
          originalReleaseYear
          posterUrl
          shortDescription
        }
        offers(country: $country, platform: WEB) {
          monetizationType
          presentationType
          package {
            packageId
            clearName
            icon
          }
          standardWebURL
        }
      }
    }
  }
}`.trim();

async function jwGraphQL(query, variables) {
    const res = await fetch(JW_ENDPOINT, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify({ query, variables })
    });
    if (!res.ok) throw new Error(`JustWatch HTTP ${res.status}`);
    const json = await res.json();
    if (json.errors) throw new Error(json.errors[0]?.message || 'GraphQL error');
    return json.data;
}

// Pick the best matching node from a search result
function jwPickBestMatch(edges, title, year) {
    if (!edges || edges.length === 0) return null;
    const norm = s => (s || '').toLowerCase().replace(/[^a-z0-9]/g, '');
    const tNorm = norm(title);

    let best = null;
    let bestScore = -1;

    for (const edge of edges) {
        const c = edge?.node?.content;
        if (!c) continue;
        const score =
            (norm(c.title) === tNorm ? 100 : 0) +
            (year && c.originalReleaseYear === year ? 50 : 0) +
            (norm(c.title).includes(tNorm) ? 10 : 0);
        if (score > bestScore) { bestScore = score; best = edge.node; }
    }
    return best;
}

// Group offers by package + monetization type
function jwGroupOffers(offers, fallbackUrl) {
    if (!offers) return [];
    const groups = new Map();
    for (const o of offers) {
        if (!o || !o.package) continue;
        const key = `${o.package.packageId}_${o.monetizationType}`;
        if (!groups.has(key)) {
            const url = o.standardWebURL || fallbackUrl || '';
            groups.set(key, {
                packageId: o.package.packageId,
                providerName: o.package.clearName || 'Unknown',
                providerIcon: o.package.icon || '',
                monetizationType: o.monetizationType,
                presentationType: o.presentationType,
                url,
                hasDirectUrl: !!o.standardWebURL
            });
        }
    }
    // Order: FLATRATE → FREE → ADS → RENT → BUY
    const order = { FLATRATE: 1, FREE: 2, ADS: 3, RENT: 4, BUY: 5 };
    return Array.from(groups.values()).sort((a, b) => {
        const oa = order[a.monetizationType] || 99;
        const ob = order[b.monetizationType] || 99;
        if (oa !== ob) return oa - ob;
        return a.providerName.localeCompare(b.providerName);
    });
}

function jwIconURL(iconPath) {
    if (!iconPath) return '';
    // JustWatch icon paths come back like "/icon/123456/{profile}"
    const cleaned = iconPath.replace('{profile}', 's100');
    return `https://images.justwatch.com${cleaned}`;
}

function jwTitleURL(fullPath, country) {
    if (!fullPath) return null;
    return `https://www.justwatch.com/${country.toLowerCase()}${fullPath}`;
}

function jwLabelForType(t) {
    return ({
        FLATRATE: 'Stream',
        FREE: 'Free',
        ADS: 'Free with ads',
        RENT: 'Rent',
        BUY: 'Buy'
    })[t] || t;
}

// Main entry point. Returns { node, offers, titleUrl, country } or throws.
async function jwLookup(title, year, country) {
    country = country || jwGetCountry();
    const key = jwCacheKey(title, year, country);
    const cached = jwCacheGet(key);
    if (cached) return cached;

    const data = await jwGraphQL(JW_SEARCH_QUERY, {
        country,
        language: 'en',
        first: 5,
        searchQuery: title
    });
    const edges = data?.popularTitles?.edges || [];
    const node = jwPickBestMatch(edges, title, year);
    if (!node) throw new Error('No match found on JustWatch');

    const titleUrl = jwTitleURL(node.content?.fullPath, country);
    const result = {
        node: {
            id: node.id,
            title: node.content?.title,
            year: node.content?.originalReleaseYear,
            poster: node.content?.posterUrl
                ? `https://images.justwatch.com${node.content.posterUrl.replace('{profile}', 's166')}`
                : null,
            description: node.content?.shortDescription
        },
        offers: jwGroupOffers(node.offers, titleUrl),
        titleUrl,
        country
    };
    jwCacheSet(key, result);
    return result;
}
