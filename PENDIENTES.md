# Pendientes

Decisiones y datos que faltan por confirmar. Se van cerrando conforme avanza el proyecto.

- [ ] **VkQuery — la parte de la nube.** Es una aplicación de escritorio que guarda datos en la nube.
      Por ahora el sitio la presenta solo como aplicación de escritorio. Isaac va a explicar la
      parte de la nube más adelante para completar el caso de estudio (la "Una línea" de
      `CONTENIDO.md` dice "en la nube" y se ajustará cuando llegue esa información).
- [ ] **Dominio definitivo.** Probablemente Netlify. Mientras tanto `site` en `astro.config.mjs`
      toma la variable `URL` que Netlify define en cada build, con `localhost` como respaldo.
- [ ] **React y View Transitions.** Propuesta: sin React (no hay interactividad que lo requiera)
      y transiciones nativas del navegador en lugar de `<ClientRouter />`. Pendiente de confirmar.
- [ ] **Sitemap.** Generarlo a mano con un endpoint de Astro o usar `@astrojs/sitemap`. Fase 5.
