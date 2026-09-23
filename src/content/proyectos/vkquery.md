---
slug: vkquery
orden: 3
titulo: VkQuery
# Pendiente: la versión original dice "en la nube". Ver PENDIENTES.md.
unaLinea: Gestor de bases de datos de escritorio con un asistente que ejecuta tareas a partir de instrucciones en lenguaje natural.
resumen: Gestor de bases de datos de escritorio con un asistente que propone las operaciones y deja la ejecución en manos del usuario.
stack: [Tauri, React, integración de modelo de lenguaje]
etiqueta: Propio
estado: En desarrollo
---

## El problema

Los gestores de bases de datos tradicionales exigen saber SQL para cualquier operación. La idea fue
conservar todo lo que se espera de un gestor y agregar encima una capa que permita pedir las cosas
en lenguaje natural.

## Las restricciones

- Un asistente con acceso a una base de datos puede hacer daño real. Necesitaba límites.
- El costo de las llamadas al modelo corre por cuenta de alguien, así que había que acotarlo.

## Qué construí

Desarrollé el gestor con las operaciones esperadas de la categoría: conexiones, generación de dumps,
importación y exportación. Integré un modelo de lenguaje para ejecutar tareas a partir de
instrucciones en lenguaje natural, con un sistema de límites de uso y la opción de que el usuario
configure su propia API key una vez alcanzado el límite.

## Decisiones técnicas

### La IA propone, el usuario decide

El asistente puede consultar los datos del usuario para localizar información concreta y, en lugar
de aplicar cambios por su cuenta, entrega un bloque de código que se exporta a la hoja de acciones
para que la persona lo revise y lo ejecute cuando quiera. La ejecución directa está disponible, pero
el flujo por defecto deja siempre una revisión humana de por medio antes de tocar la base de datos.

### Límite de uso con API key propia

Las llamadas al modelo tienen un costo que alguien asume. El sistema aplica un límite y, al
alcanzarlo, permite que el usuario configure su propia API key para seguir trabajando, en lugar de
bloquearlo.

### Aplicación de escritorio con Tauri y React

Un gestor de bases de datos vive en el escritorio, junto a las conexiones del usuario. Tauri permitió
construir toda la interfaz con React manteniendo un binario ligero, sin cargar con el peso de una
aplicación de escritorio tradicional.
