// Datos generales y textos cortos que se repiten en varias páginas.
// Todo el texto proviene de CONTENIDO.md.

export const persona = {
  nombre: 'Isaac Alejandro Espinosa Domínguez',
  nombreCorto: 'Isaac Espinosa',
  titulo: 'Desarrollador Web Full-Stack',
  ubicacion: 'Ecatepec, Estado de México',
};

export const enlaces = {
  correo: 'ae12003@outlook.com',
  github: 'https://github.com/Patoicka',
  linkedin: 'https://www.linkedin.com/in/isaac-alejandro-espinosa-dominguez-ab23713b4/',
  cv: '/cv/Isaac-Espinosa-CV.pdf',
};

// Proyectos sin página propia. Si alguno tiene demo, se agrega `enlace`
// y su título se muestra como enlace en la portada.
export const otrosProyectos: { titulo: string; resumen: string; tecnologia: string; enlace?: string }[] = [
  {
    titulo: 'SuperQ',
    resumen: 'App móvil con tickets digitales y escaneo de códigos QR y de barras.',
    tecnologia: 'React Native',
  },
  {
    titulo: 'Análisis predictivo deportivo',
    resumen: 'Contexto histórico vectorizado y análisis de partidos generado por un modelo de lenguaje.',
    tecnologia: 'Base de datos vectorial · DeepSeek',
  },
  {
    titulo: 'Incidencias hídricas — CONAGUA',
    resumen: 'Módulo de mapa con geolocalización de reportes y división política estatal.',
    tecnologia: 'Vue · Laravel',
  },
];

// "Cómo trabajo": la portada muestra la introducción y la cita;
// la página /enfoque muestra el texto completo.
export const enfoque = {
  intro:
    'Las pantallas muestran cómo se ve un producto; las decisiones muestran cómo se construyó. En cada proyecto cuento lo segundo: el problema de fondo, las restricciones reales, las alternativas que evalué y el razonamiento detrás de la que elegí.',
  cita: 'Elegir la herramienta según el problema, no según la costumbre.',
  cierre:
    'En un asistente conversacional eso significó usar un modelo barato, porque la recuperación ya entregaba el contexto resuelto y al modelo solo le quedaba redactar. En un sistema multi-sucursal significó una conexión persistente en vez de consultas periódicas. Cada caso de estudio explica ese razonamiento completo.',
};

// "Sobre mí": la portada muestra los dos primeros párrafos;
// la página /sobre-mi muestra todos.
// `etiqueta` es el riel editorial junto al párrafo: describe de qué trata
// ese párrafo puntual (no repite el título "Sobre mí" de la sección).
export const sobreMi: { etiqueta: string; texto: string }[] = [
  {
    etiqueta: 'Formación',
    texto: 'Soy desarrollador web full-stack y estudiante de Ingeniería en Sistemas Computacionales en el Tecnológico de Estudios Superiores de Ecatepec.',
  },
  {
    etiqueta: 'Experiencia',
    texto: 'Durante más de tres años trabajé en productos que terminaron en manos de usuarios reales: sistemas de gestión para operaciones con varias sucursales, plataformas con pagos en línea, aplicaciones móviles y herramientas internas. Esa es la parte del trabajo que más me interesa, la de construir algo que alguien va a usar todos los días y no se puede caer.',
  },
  {
    etiqueta: 'Enfoque actual',
    texto: 'Últimamente me he enfocado en integrar modelos de lenguaje dentro de productos: bases de datos vectoriales, búsqueda semántica y asistentes que conservan contexto entre conversaciones. Llegué ahí por cuenta propia, construyendo cosas hasta entenderlas.',
  },
  {
    etiqueta: 'Stack principal',
    texto: 'Trabajo principalmente con React, TypeScript, React Native y Strapi.',
  },
  {
    etiqueta: 'Qué busco',
    texto: 'Busco un equipo donde pueda seguir creciendo mientras el terreno se mueve, o proyectos independientes que me dejen elegir la herramienta según el problema y no según la costumbre. Esa parte es la que más me interesa: evaluar alternativas y quedarme con la que mejor resuelve el caso concreto, aunque implique salir de lo que ya domino.',
  },
];

// Tecnologías agrupadas por categoría para la franja animada de /sobre-mi.
// `icono` es una clave de src/data/iconos.ts; si se omite, el chip se muestra solo con texto
// (útil para marcas sin logo disponible, como AWS o VS Code en el set de iconos usado).
export const tecnologias: { categoria: string; items: { nombre: string; icono?: string }[] }[] = [
  {
    categoria: 'Frontend',
    items: [
      { nombre: 'React', icono: 'react' },
      { nombre: 'React Native', icono: 'react' },
      { nombre: 'Astro', icono: 'astro' },
      { nombre: 'Vue.js', icono: 'vuedotjs' },
      { nombre: 'TypeScript', icono: 'typescript' },
      { nombre: 'JavaScript', icono: 'javascript' },
      { nombre: 'Tailwind CSS', icono: 'tailwindcss' },
      { nombre: 'Redux', icono: 'redux' },
      { nombre: 'HTML5', icono: 'html5' },
      { nombre: 'CSS3', icono: 'css3' },
      { nombre: 'MUI', icono: 'mui' },
    ],
  },
  {
    categoria: 'Backend',
    items: [
      { nombre: 'Node.js', icono: 'nodedotjs' },
      { nombre: 'Strapi', icono: 'strapi' },
      { nombre: 'Laravel', icono: 'laravel' },
      { nombre: 'PHP', icono: 'php' },
      { nombre: 'Java', icono: 'java' },
      { nombre: 'DeepSeek', icono: 'deepseek' },
      { nombre: 'Stripe', icono: 'stripe' },
    ],
  },
  {
    categoria: 'Bases de datos',
    items: [
      { nombre: 'PostgreSQL', icono: 'postgresql' },
      { nombre: 'MySQL', icono: 'mysql' },
      { nombre: 'MongoDB', icono: 'mongodb' },
      { nombre: 'SQL Server' },
      { nombre: 'Qdrant', icono: 'qdrant' },
    ],
  },
  {
    categoria: 'DevOps y herramientas',
    items: [
      { nombre: 'Docker', icono: 'docker' },
      { nombre: 'Git', icono: 'git' },
      { nombre: 'AWS' },
      { nombre: 'VS Code' },
    ],
  },
];

export const educacion = {
  carrera: 'Ingeniería en Sistemas Computacionales',
  escuela: 'Tecnológico de Estudios Superiores de Ecatepec',
  periodo: '2021 a la fecha',
};

export const idiomas = [
  { idioma: 'Español', nivel: 'nativo' },
  { idioma: 'Inglés', nivel: 'lectura técnica y documentación; conversación básica' },
];
