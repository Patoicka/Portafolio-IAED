# Pendientes

Decisiones y datos que faltan por confirmar. Se van cerrando conforme avanza el proyecto.

- [ ] **VkQuery — la parte de la nube.** Es una aplicación de escritorio que guarda datos en la nube.
      Por ahora el sitio la presenta solo como aplicación de escritorio. Isaac va a explicar la
      parte de la nube más adelante para completar el caso de estudio (la "Una línea" de
      `CONTENIDO.md` dice "en la nube" y se ajustará cuando llegue esa información).
- [ ] **Dominio definitivo.** Probablemente Netlify. Mientras tanto `site` en `astro.config.mjs`
      toma la variable `URL` que Netlify define en cada build, con `localhost` como respaldo.
- [x] **React y View Transitions.** Sin React (no hay interactividad que lo requiera) y
      transiciones nativas del navegador (`@view-transition` en CSS) en lugar de `<ClientRouter />`.
- [x] **Sitemap.** Con `@astrojs/sitemap`, elegido por Isaac.
- [x] **Fuentes.** Se quedan en Google Fonts por decisión de Isaac. Lighthouse da rendimiento 90
      por esa petición; sirviéndolas desde el propio sitio (API de fuentes de Astro) daría 100.
- [ ] **Descripción de "Cómo trabajo".** Se reemplazó la introducción original (que hablaba de no
      poder mostrar capturas) por la opción B, aprobada por Isaac. Todavía se siente corta:
      retomarla cuando existan las demos de los proyectos. Candidata para ampliar `/enfoque`:
      "Antes de escribir código me gusta entender qué restricción manda en el proyecto: el costo,
      la seguridad, la inmediatez, quién lo va a usar. A partir de ahí comparo alternativas y me
      quedo con la que mejor resuelve ese caso concreto. En cada caso de estudio cuento ese
      proceso completo." (no aprobada aún).
- [ ] **Demos de proyectos.** El campo `demo` ya existe en el frontmatter. Para activarlo:
      ```yaml
      demo:
        tipo: sitio        # o "descarga"
        url: https://...   # o /descargas/archivo.zip si el archivo vive en public/
        nota: Texto opcional bajo el botón (por ejemplo, las restricciones de la demo)
      ```
      - Quinielas: se hizo en VKSolutions y es confidencial. Sin demo; la nota final se queda.
      - Análisis predictivo deportivo: proyecto propio, candidato a demo web. Hoy vive en "Otros
        proyectos" (sin página propia). Si llega la demo: agregarle un enlace en esa lista o
        convertirlo en caso de estudio completo (requiere contenido nuevo de Isaac).
      - HuellitasXSiempre y AI & GEO 2026: ya están en línea (campo `enlace`).
      - VkQuery: se puede mencionar en el sitio. La demo descargable está por revisarse; falta
        decidir dónde alojar el instalador (GitHub Releases es mejor que el repositorio para archivos grandes).
      - Cuando existan: revisar la descripción de "Cómo trabajo".
