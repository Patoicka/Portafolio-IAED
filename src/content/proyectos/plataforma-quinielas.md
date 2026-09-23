---
slug: plataforma-quinielas
orden: 4
titulo: Plataforma de quinielas deportivas
unaLinea: Producto completo de quinielas en línea, con pagos y administración, que llegó a cerca de mil usuarios registrados.
resumen: Producto completo con pagos confirmados del lado del servidor, que alcanzó cerca de mil usuarios registrados.
stack: [React, Redux, Tailwind, Strapi, MySQL, Stripe]
---

## El problema

Construir desde cero una plataforma donde los usuarios pudieran registrarse, participar en quinielas
y pagar en línea, con un panel que permitiera administrar todo sin tocar la base de datos.

## Las restricciones

- Manejo de dinero real: el flujo de pago no podía fallar ni depender de pasos manuales.
- El contenido cambia constantemente (partidos, resultados, participantes), así que el equipo no
  técnico necesitaba poder actualizarlo por su cuenta.

## Qué construí

Diseñé y desarrollé el producto completo, frontend y backend, con React, Redux, Tailwind, Strapi y
MySQL. Implementé el registro de usuarios, la recuperación de contraseña y los perfiles
personalizables; integré Stripe como pasarela de pago; y construí un panel de administración para la
gestión de usuarios y contenido. La plataforma alcanzó cerca de mil usuarios registrados.

## Decisiones técnicas

### Confirmación de pagos del lado del servidor

La validación no depende del navegador: Stripe notifica al backend mediante webhook, el backend
verifica que el pago sea legítimo y solo entonces actualiza lo que corresponde, como el plan
contratado y el rol del usuario. Así, un cliente manipulado no puede otorgarse acceso por su cuenta.

### Redux para el estado compartido

Con varias vistas consumiendo la sesión, el perfil y los datos de las quinielas, centralizar el
estado evitó pasar información entre componentes de forma dispersa. El motivo de peso fueron sus
herramientas de inspección: poder seguir cada cambio de estado y rastrear su origen facilitó mucho la
depuración conforme la aplicación creció.

## Nota final

Proyecto desarrollado en VKSolutions. No incluyo capturas ni código por confidencialidad.
