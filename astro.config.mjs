// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// https://docs.astro.build/en/reference/configuration-reference/
export default defineConfig({
  // URL pública del sitio. Astro la usa para generar URLs absolutas
  // (canonical, Open Graph, sitemap). Pendiente: dominio definitivo.
  site: 'https://example.com',

  // Sin barra final: /proyectos/traqs en lugar de /proyectos/traqs/
  trailingSlash: 'never',

  // Tailwind v4 se integra como plugin de Vite, no como integración de Astro.
  vite: {
    plugins: [tailwindcss()],
  },
});
