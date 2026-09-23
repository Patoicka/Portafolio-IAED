---
slug: asistente-whatsapp
orden: 1
titulo: Asistente conversacional con IA para WhatsApp
unaLinea: Asistente de atención para un gimnasio, con memoria de conversaciones previas y capacidad de entender mensajes de voz.
resumen: Asistente de WhatsApp para un gimnasio, con memoria de conversaciones previas y capacidad de entender notas de voz.
stack: [Qdrant, DeepSeek, AWS, Búsqueda semántica]
etiqueta: Propio
diagrama: asistente-whatsapp
---

## El problema

Un gimnasio recibe las mismas preguntas todo el día: precios de paquetes, horarios, disponibilidad y
ubicaciones. Responderlas a mano consume tiempo del personal y deja mensajes sin contestar fuera de
horario.

## Las restricciones

- La gente en WhatsApp manda notas de voz, no solo texto. Un asistente que solo lee texto ignora
  buena parte de los mensajes.
- Un modelo de lenguaje por sí solo no recuerda conversaciones anteriores: cada mensaje llega en
  blanco, y eso obliga al usuario a repetir contexto que ya había dado.

## Qué construí

Integré la API de DeepSeek como motor de respuesta y conecté el flujo a WhatsApp. Implementé memoria
conversacional por usuario almacenando el historial en una base de datos vectorial y recuperando los
fragmentos relevantes mediante búsqueda semántica, de modo que cada respuesta considera lo que esa
persona ya había preguntado. Integré servicios de AWS para transcribir las notas de voz y procesarlas
como una entrada de texto más.

## Decisiones técnicas

### Búsqueda semántica en lugar de historial completo

Enviar toda la conversación al modelo en cada mensaje es caro y choca contra el límite de contexto.
Recuperar únicamente los fragmentos relevantes mantiene el costo acotado y permite que la memoria
crezca sin límite práctico.

### Qdrant como base vectorial

Tras comparar varias opciones, elegimos Qdrant por su rendimiento en búsquedas a gran escala y, sobre
todo, porque permite almacenar un payload en JSON junto a cada vector. Eso hace posible combinar el
filtrado por metadatos con la búsqueda semántica en una sola operación, en lugar de recuperar
resultados por similitud y filtrarlos después, evitando que se mezcle el contexto de un usuario con
el de otro.

### DeepSeek por relación costo-beneficio

El trabajo pesado lo resuelve la recuperación: para cuando interviene el modelo, el contexto relevante
ya está seleccionado. Su tarea se limita a leer esa información y redactar una respuesta en lenguaje
natural, sin razonamiento complejo de por medio. Dimensionamos el modelo a esa tarea real en lugar de
pagar por capacidad que el caso de uso no necesitaba.

## Nota final

Proyecto académico, probado con casos de uso reales.
