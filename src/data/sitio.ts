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

export const otrosProyectos = [
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
    'Buena parte de mi trabajo es para clientes y no puedo mostrar capturas ni código. Así que en lugar de pantallas, aquí cuento decisiones: qué restricción tenía cada proyecto, qué alternativas descarté y por qué.',
  cita: 'Elegir la herramienta según el problema, no según la costumbre.',
  cierre:
    'En un asistente conversacional eso significó usar un modelo barato, porque la recuperación ya entregaba el contexto resuelto y al modelo solo le quedaba redactar. En un sistema multi-sucursal significó una conexión persistente en vez de consultas periódicas. Cada caso de estudio explica ese razonamiento completo.',
};

// "Sobre mí": la portada muestra los dos primeros párrafos;
// la página /sobre-mi muestra todos.
export const sobreMi = [
  'Soy desarrollador web full-stack y estudiante de Ingeniería en Sistemas Computacionales en el Tecnológico de Estudios Superiores de Ecatepec.',
  'Durante más de tres años trabajé en productos que terminaron en manos de usuarios reales: sistemas de gestión para operaciones con varias sucursales, plataformas con pagos en línea, aplicaciones móviles y herramientas internas. Esa es la parte del trabajo que más me interesa, la de construir algo que alguien va a usar todos los días y no se puede caer.',
  'Últimamente me he enfocado en integrar modelos de lenguaje dentro de productos: bases de datos vectoriales, búsqueda semántica y asistentes que conservan contexto entre conversaciones. Llegué ahí por cuenta propia, construyendo cosas hasta entenderlas.',
  'Trabajo principalmente con React, TypeScript, React Native y Strapi.',
  'Busco un equipo donde pueda seguir creciendo mientras el terreno se mueve, o proyectos independientes que me dejen elegir la herramienta según el problema y no según la costumbre. Esa parte es la que más me interesa: evaluar alternativas y quedarme con la que mejor resuelve el caso concreto, aunque implique salir de lo que ya domino.',
];
