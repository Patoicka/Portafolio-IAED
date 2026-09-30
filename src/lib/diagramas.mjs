// Plugin para Sätteri, el procesador de Markdown de Astro 7.
// Busca párrafos que contengan solo un marcador como [[diagrama:asistente-whatsapp]]
// y los reemplaza por el SVG de src/diagramas/asistente-whatsapp.svg, envuelto en
// un <figure>. Así el diagrama queda en el punto exacto del texto sin mezclar
// el SVG con el contenido.
import { readFileSync } from 'node:fs';

const MARCADOR = /^\[\[diagrama:([a-z0-9-]+)\]\]$/;

// Un plugin de Sätteri es un objeto con un nombre y una función por tipo de nodo.
export const diagramas = {
  name: 'diagramas',
  paragraph(node, ctx) {
    if (node.children.length !== 1) return;
    const [hijo] = node.children;
    const coincidencia = hijo.type === 'text' && hijo.value.trim().match(MARCADOR);
    if (!coincidencia) return;

    const archivo = new URL(`../diagramas/${coincidencia[1]}.svg`, import.meta.url);
    const svg = readFileSync(archivo, 'utf8').trim();
    ctx.replaceNode(node, { type: 'html', value: `<figure class="figura-diagrama">${svg}</figure>` });
  },
};
