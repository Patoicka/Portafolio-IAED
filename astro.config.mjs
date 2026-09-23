// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// https://docs.astro.build/en/reference/configuration-reference/
export default defineConfig({
  // URL pública del sitio. Astro la usa para generar URLs absolutas
  // (canonical, Open Graph, sitemap). Netlify define la variable URL en cada
  // build con el dominio del sitio; en local se usa localhost.
  site: process.env.URL ?? 'http://localhost:4321',

  // Sin barra final: /proyectos/traqs en lugar de /proyectos/traqs/
  trailingSlash: 'never',

  // Tailwind v4 se integra como plugin de Vite, no como integración de Astro.
  vite: {
    plugins: [tailwindcss()],
  },
});
