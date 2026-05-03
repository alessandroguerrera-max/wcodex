// Netlify Function — Letterboxd RSS proxy
// Letterboxd RSS doesn't return CORS headers for browser fetches, and the
// public allorigins.win proxy is unreliable. Run our own.

exports.handler = async (event) => {
    const corsHeaders = {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET, OPTIONS',
        'Access-Control-Allow-Headers': 'Content-Type',
        'Access-Control-Max-Age': '86400'
    };

    if (event.httpMethod === 'OPTIONS') {
        return { statusCode: 204, headers: corsHeaders };
    }
    if (event.httpMethod !== 'GET') {
        return {
            statusCode: 405,
            headers: { ...corsHeaders, 'Content-Type': 'application/json' },
            body: JSON.stringify({ error: 'Method not allowed' })
        };
    }

    const user = (event.queryStringParameters?.user || '').trim();
    if (!user || !/^[a-z0-9_]+$/i.test(user)) {
        return {
            statusCode: 400,
            headers: { ...corsHeaders, 'Content-Type': 'application/json' },
            body: JSON.stringify({ error: 'invalid_user', message: 'Provide ?user=<letterboxd_username>' })
        };
    }

    try {
        const upstream = await fetch(`https://letterboxd.com/${user}/rss/`, {
            headers: {
                'Accept': 'application/rss+xml, application/xml, text/xml',
                'User-Agent': 'WarriorsCodex/1.0 (+https://warriorscodex.netlify.app)'
            }
        });
        if (!upstream.ok) {
            return {
                statusCode: upstream.status,
                headers: { ...corsHeaders, 'Content-Type': 'application/json' },
                body: JSON.stringify({ error: 'upstream_status', status: upstream.status })
            };
        }
        const text = await upstream.text();
        return {
            statusCode: 200,
            headers: {
                ...corsHeaders,
                'Content-Type': 'application/xml; charset=utf-8',
                'Cache-Control': 'public, max-age=600'
            },
            body: text
        };
    } catch (err) {
        return {
            statusCode: 502,
            headers: { ...corsHeaders, 'Content-Type': 'application/json' },
            body: JSON.stringify({ error: 'upstream_failed', message: err.message })
        };
    }
};
