function corsHeaders(origin) {
  return {
    'Access-Control-Allow-Origin': origin,
    'Access-Control-Allow-Methods': 'POST, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type',
  };
}

function isOriginAllowed(origin, env) {
  const allowed = env.ALLOWED_ORIGINS.split(',').map((s) => s.trim());
  return allowed.includes(origin);
}

export default {
  async fetch(request, env) {
    const origin = request.headers.get('Origin') || '';

    if (!isOriginAllowed(origin, env)) {
      return new Response('Forbidden', { status: 403 });
    }

    const headers = corsHeaders(origin);

    if (request.method === 'OPTIONS') {
      return new Response(null, { status: 204, headers });
    }

    if (request.method !== 'POST') {
      return new Response('Method Not Allowed', { status: 405, headers });
    }

    const url = new URL(request.url);
    if (url.pathname !== '/v1/chat/completions') {
      return new Response('Not Found', { status: 404, headers });
    }

    let body;
    try {
      body = await request.json();
    } catch {
      return new Response('Bad Request', { status: 400, headers });
    }

    const messages = body.messages;
    if (!Array.isArray(messages) || messages.length === 0) {
      return new Response('Bad Request: messages is required', {
        status: 400,
        headers,
      });
    }

    const MAX_TOKENS_CAP = 1000;
    const openAiResponse = await fetch(
      'https://api.openai.com/v1/chat/completions',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${env.OPENAI_API_KEY}`,
        },
        body: JSON.stringify({
          model: env.OPEN_AI_MODEL,
          messages,
          max_tokens: Math.min(
            Number(body.max_tokens) || 300,
            MAX_TOKENS_CAP
          ),
          temperature: body.temperature !== undefined ? Number(body.temperature) : 1,
        }),
      }
    );

    const responseBody = await openAiResponse.text();
    return new Response(responseBody, {
      status: openAiResponse.status,
      headers: {
        ...headers,
        'Content-Type': 'application/json',
      },
    });
  },
};
