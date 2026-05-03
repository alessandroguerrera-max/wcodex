// Netlify Function — JustWatch GraphQL proxy
// Browsers can't call apis.justwatch.com directly (no CORS headers).
// This runs server-side on Netlify Edge → no CORS, no auth needed.

const JW_TARGET = 'https://apis.justwatch.com/graphql';

exports.handler = async (event) => {
    const corsHeaders = {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'POST, OPTIONS',
        'Access-Control-Allow-Headers': 'Content-Type',
        'Access-Control-Max-Age': '86400'
    };

    if (event.httpMethod === 'OPTIONS') {
        return { statusCode: 204, headers: corsHeaders };
    }
    if (event.httpMethod !== 'POST') {
        return {
            statusCode: 405,
            headers: { ...corsHeaders, 'Content-Type': 'application/json' },
            body: JSON.stringify({ error: 'Method not allowed' })
        };
    }

    try {
        const upstream = await fetch(JW_TARGET, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'User-Agent': 'WarriorsCodex/1.0 (+https://warriorscodex.netlify.app)'
            },
            body: event.body || ''
        });
        const text = await upstream.text();
        return {
            statusCode: upstream.status,
            headers: {
                ...corsHeaders,
                'Content-Type': upstream.headers.get('content-type') || 'application/json',
                'Cache-Control': 'public, max-age=300'
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
