// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import { satteri } from '@astrojs/markdown-satteri';
import sitemap from '@astrojs/sitemap';
import { diagramas } from './src/lib/diagramas.mjs';

// https://docs.astro.build/en/reference/configuration-reference/
export default defineConfig({
  // URL pública del sitio. Astro la usa para generar URLs absolutas
  // (canonical, Open Graph, sitemap). Netlify define la variable URL en cada
  // build con el dominio del sitio; en local se usa localhost.
  site: process.env.URL ?? 'http://localhost:4321',

  // Sin barra final: /proyectos/traqs en lugar de /proyectos/traqs/.
  // format 'file' genera traqs.html en lugar de traqs/index.html, que es lo que
  // los hosts estáticos (Netlify incluido) sirven sin redirigir a la versión con barra.
  trailingSlash: 'never',
  build: {
    format: 'file',
    // El CSS del sitio pesa ~6 KB: incrustarlo en el HTML ahorra una petición
    // que bloquea el primer pintado.
    inlineStylesheets: 'always',
  },

  // Integraciones: código que se engancha al build de Astro.
  // sitemap genera sitemap-index.xml y sitemap-0.xml a partir de todas las
  // páginas estáticas, usando `site` para las URLs absolutas.
  integrations: [sitemap({ filter: (pagina) => !pagina.includes('/404') })],

  // Sätteri es el procesador de Markdown por defecto de Astro 7. Se configura
  // explícitamente solo para agregar el plugin que inserta los diagramas.
  markdown: {
    processor: satteri({ mdastPlugins: [diagramas] }),
  },

  // Tailwind v4 se integra como plugin de Vite, no como integración de Astro.
  vite: {
    plugins: [tailwindcss()],
  },
});
