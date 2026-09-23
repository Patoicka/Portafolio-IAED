---
slug: traqs
orden: 2
titulo: Traqs
unaLinea: Sistema de seguimiento de reportes para una cadena de tiendas, con control de acceso jerárquico y sincronización en tiempo real entre sucursales.
resumen: Gestión de reportes multi-sucursal con cinco perfiles jerárquicos y sincronización en tiempo real entre tiendas.
stack: [React, TypeScript, Strapi, MySQL, MUI, WebSockets]
---

## El problema

Una operación con varias tiendas necesitaba un punto único para levantar, dar seguimiento y cerrar
reportes. Sin eso, cada sucursal llevaba su propio control y la información llegaba tarde, incompleta
o duplicada a quien tenía que tomar decisiones.

## Las restricciones

- Personas con responsabilidades muy distintas usando el mismo sistema: lo que ve un almacenista no
  es lo que ve un encargado, y ninguno de los dos ve lo que ve un administrador.
- Un cambio hecho en una tienda tenía que reflejarse de inmediato en las demás, sin que nadie
  recargara la página.
- Los reportes necesitaban evidencia adjunta: fotos, video y documentos.

## Qué construí

Desarrollé el sistema con React, TypeScript y Strapi. Implementé el control de acceso con cinco
perfiles jerárquicos aplicado sobre más de cincuenta módulos con operaciones CRUD, construí las
vistas de datos sobre tablas de MUI e integré WebSockets para propagar los cambios en tiempo real
entre sucursales, con notificación a los usuarios sin importar dónde se originara la modificación.
Los reportes se capturan mediante modales que permiten tomar fotografías, grabar video y adjuntar
archivos PDF.

## Decisiones técnicas

### Tiempo real con WebSockets

Con varias tiendas conectadas al mismo sistema, resolver la sincronización mediante peticiones
periódicas significaba repetir cabeceras, cookies y datos de autenticación en cada consulta, sin
ganar inmediatez real. Una conexión persistente elimina ese costo y permite que el cambio se empuje
hacia los clientes en el momento en que ocurre, en lugar de esperar a que cada uno pregunte.

### Strapi como capa de datos

Fue una decisión del equipo, y la alternativa que descartamos fue construir la API y el panel de
administración desde cero. Strapi resolvió tres cosas a la vez: su panel permite que integrantes del
equipo sin experiencia en bases de datos entiendan y administren el flujo de información sin
depender de un desarrollador; su sistema de roles permitió modelar directamente la jerarquía de
perfiles del proyecto; y al ser uno de los CMS headless de código abierto más extendidos, contaba
con soporte para distintos motores de base de datos, documentación amplia y una puesta en marcha
rápida desde cualquier equipo.

### Permisos validados en el servidor

La jerarquía no se resolvió ocultando elementos en la interfaz. Los roles se definen en el backend y
cada uno determina sus permisos de lectura, escritura y creación; la respuesta se filtra según el rol
antes de salir del servidor, de modo que el cliente recibe únicamente los datos y las operaciones que
le corresponden, nunca el conjunto completo con partes escondidas.

## Nota final

Proyecto desarrollado en VKSolutions para un cliente. No incluyo capturas ni código por
confidencialidad; puedo explicar la arquitectura y las decisiones en una conversación.
