import type { APIRoute } from 'astro';

// Endpoint estático: un archivo .ts en src/pages que exporta GET genera un
// archivo en el build (aquí, robots.txt). Se genera en lugar de escribirse a
// mano en public/ para que la URL del sitemap use el dominio real de `site`.
export const GET: APIRoute = ({ site }) => {
  const sitemap = new URL('sitemap-index.xml', site).href;
  return new Response(`User-agent: *\nAllow: /\n\nSitemap: ${sitemap}\n`, {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  });
};
