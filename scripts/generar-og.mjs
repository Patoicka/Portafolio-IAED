// Genera public/og.png: la miniatura que aparece al compartir el sitio
// (LinkedIn, WhatsApp, Slack...). No corre en cada build, se ejecuta a mano
// con `npm run og:generate` cuando cambia el nombre, el título o la paleta.
//
// satori arma el layout (JSX-like, sin necesitar React instalado) y convierte
// el texto a paths vectoriales usando los mismos archivos de fuente que el
// sitio (@fontsource). Con el texto ya vectorizado, resvg solo rasteriza
// formas: no depende de las fuentes del sistema operativo, así el resultado
// es igual en cualquier máquina.
import { readFile, writeFile } from 'node:fs/promises';
import satori from 'satori';
import { Resvg } from '@resvg/resvg-js';
import { persona } from '../src/data/sitio.ts';

const ANCHO = 1200;
const ALTO = 630;

const PAPER = '#FAF8F4';
const INK = '#15161A';
const MUTED = '#5F6069';
const LINE = '#E4DFD6';
const ACCENT = '#2B4ACB';

const [plexRegular, plexMedium, serifBold] = await Promise.all([
  readFile('node_modules/@fontsource/ibm-plex-sans/files/ibm-plex-sans-latin-400-normal.woff'),
  readFile('node_modules/@fontsource/ibm-plex-sans/files/ibm-plex-sans-latin-500-normal.woff'),
  readFile('node_modules/@fontsource/fraunces/files/fraunces-latin-600-normal.woff'),
]);

const marcador = { type: 'span', props: { style: { color: ACCENT }, children: 'producción.' } };

const arbol = {
  type: 'div',
  props: {
    style: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      width: '100%',
      height: '100%',
      padding: '76px 84px',
      background: PAPER,
      fontFamily: 'Plex',
    },
    children: [
      {
        type: 'span',
        props: {
          style: {
            fontSize: 22,
            letterSpacing: 4,
            textTransform: 'uppercase',
            color: MUTED,
          },
          children: persona.titulo,
        },
      },
      {
        type: 'div',
        props: {
          style: {
            display: 'flex',
            flexDirection: 'column',
            fontFamily: 'Fraunces',
            fontWeight: 600,
            fontSize: 92,
            lineHeight: 1.08,
            color: INK,
            letterSpacing: -1,
            whiteSpace: 'pre',
          },
          children: [
            { type: 'span', props: { children: 'Construyo cosas' } },
            { type: 'span', props: { children: ['que llegan a ', marcador] } },
          ],
        },
      },
      {
        type: 'div',
        props: {
          style: {
            display: 'flex',
            alignItems: 'center',
            gap: 16,
            paddingTop: 32,
            borderTop: `1px solid ${LINE}`,
            fontSize: 22,
          },
          children: [
            { type: 'span', props: { style: { color: INK, fontWeight: 500 }, children: persona.nombreCorto } },
            { type: 'span', props: { style: { color: LINE }, children: '·' } },
            { type: 'span', props: { style: { color: MUTED }, children: 'github.com/Patoicka' } },
          ],
        },
      },
    ],
  },
};

const svg = await satori(arbol, {
  width: ANCHO,
  height: ALTO,
  fonts: [
    { name: 'Plex', data: plexRegular, weight: 400, style: 'normal' },
    { name: 'Plex', data: plexMedium, weight: 500, style: 'normal' },
    { name: 'Fraunces', data: serifBold, weight: 600, style: 'normal' },
  ],
});

const png = new Resvg(svg, { fitTo: { mode: 'width', value: ANCHO } }).render().asPng();
await writeFile('public/og.png', png);
console.log(`public/og.png generado (${ANCHO}x${ALTO})`);
