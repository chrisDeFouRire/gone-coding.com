import type { APIRoute } from 'astro';

export const GET: APIRoute = () => {
  return new Response(
    `User-agent: *\nAllow: /\n\nSitemap: https://gone-coding.com/sitemap-index.xml`,
    { headers: { 'Content-Type': 'text/plain' } }
  );
};
