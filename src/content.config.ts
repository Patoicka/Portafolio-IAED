import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

// Casos de estudio: un archivo Markdown por proyecto en src/content/proyectos.
// El esquema valida el frontmatter en cada build: si falta un campo o tiene
// el tipo equivocado, el build falla con un error que señala el archivo.
const proyectos = defineCollection({
  loader: glob({ pattern: '*.md', base: './src/content/proyectos' }),
  schema: z.object({
    slug: z.string(),
    orden: z.number().int().positive(),
    titulo: z.string(),
    unaLinea: z.string(),
    resumen: z.string(),
    stack: z.array(z.string()).nonempty(),
    etiqueta: z.string().optional(),
    enlace: z.url().optional(),
    estado: z.string().optional(),
  }),
});

export const collections = { proyectos };
