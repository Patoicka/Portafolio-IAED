---
slug: huellitas-x-siempre
orden: 6
titulo: HuellitasXSiempre
unaLinea: Plataforma donde cada mascota tiene una placa con código QR que abre su perfil público.
resumen: Identificación de mascotas con placas QR que abren un perfil público con historial médico y datos de contacto.
stack: [React, Strapi, UUID]
etiqueta: En línea
enlace: https://huellitasxsiempre.com
---

## El problema

Cuando una mascota se pierde o llega a una veterinaria, quien la encuentra no tiene forma de saber
quién es, de quién es, ni qué condiciones médicas tiene.

## Qué construí

Construí una plataforma donde cada mascota registrada recibe una placa con un QR que, al escanearse,
abre su perfil: nombre, especie, raza, edad, propietarios, ubicación del hogar, vacunas, alergias,
alimentación y galería de fotos y video. El acceso es inmediato y no requiere que quien escanea tenga
cuenta.

## Decisiones técnicas

### Identificación por UUID

Cada mascota se identifica con un UUID en lugar de un número secuencial, de modo que los perfiles no
se pueden recorrer adivinando direcciones.

### Acceso de lectura abierto, edición restringida

Quien escanea la placa accede al perfil completo en modo lectura, sin necesidad de cuenta: esa
inmediatez es justamente lo que hace útil al producto cuando alguien encuentra a una mascota perdida.
La edición está reservada al propietario: la sesión guardada en el navegador se envía al backend, que
la valida antes de conceder acceso, de modo que la identidad nunca se determina del lado del cliente.
Si la placa escaneada pertenece a su cuenta, entra directo a la vista de administración.

### El compromiso que asumimos

Abrir el perfil sin autenticación implica que los datos visibles, incluida la ubicación del hogar,
quedan al alcance de cualquiera que tenga la placa. Fue una decisión consciente a favor de la
utilidad en el caso de uso principal. Si retomara el proyecto, separaría los campos en dos niveles:
los necesarios para devolver a la mascota, visibles al instante, y los sensibles, accesibles solo
mediante un contacto intermediado con el propietario.
