import type { APIRoute } from 'astro';

// Endpoint en vez de archivo estático en public/: así el dominio del sitemap
// sale de Astro.site (la misma variable URL de Netlify que usa astro.config.mjs)
// en lugar de quedar hardcodeado.
export const GET: APIRoute = ({ site }) => {
  const cuerpo = `User-agent: *\nAllow: /\n\nSitemap: ${new URL('sitemap-index.xml', site)}\n`;
  return new Response(cuerpo, { headers: { 'Content-Type': 'text/plain' } });
};
