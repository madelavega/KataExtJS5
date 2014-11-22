KataExtJS5
==========

Kata desarrollada por mí con el framework ExtJS5, utilizada dentro del plan de formación de la empresa BBVA GlobalNet (BEEVA) basada en Dojos y Katas. El ejercicio consiste en lo siguiente:

- Un cliente desarrollado con ExtJS5
- Un servidor NodeJS, con Express4

Las funcionalidades del cliente son las siguientes:

- Una pantalla con el listado de cómics de Marvel y su detalle
- Otra con un listado de los cómics que hemos agregado a nuestra colección y su detalle
- Para añadir nuevos cómics a nuestra colección, se deberá disponer de un listado con todos los comics de Marvel que queden por agregar.

Para este tipo de operaciones, disponemos de unos servicios REST cuyas especificaciones son las siguientes:
- GET /services/marvelComics Se encarga de devolver el listado completo de cómics de Marvel. Admite un parámetro de request userId. Si este parámetro viene relleno, devolverá únicamente la lista de cómics que aún no se han agregado a la colección del usuario. El valor del userId es indiferente, ya que vamos a tener en cuenta para nuestros katas que sólo existe un usuario con una colección.
- GET /services/collection Devuelve la lista de cómics de mi colección 
- POST /services/collection Añade un nuevo cómic a mi colección, partiendo de los datos recogidos de un cómic de Marvel
- DELETE /services/collection/{Id} Elimina el cómic con el id que case con el parámetro de url id de mi colección
- PUT/services/collection/{Id}  Actualiza los datos del cómic de mi colección con el id que case con el parámetro de url id

Los datos que se manejan se extraen de dos ficheros de texto:
- /server/data/marvelComics.json para los comics de Marvel
- /server/data/collection.json para mi colección

Cada operación CRUD será persistida en su fichero JSON correspondiente.

Para arrancar el servidor, es necesario tener instalado node 0.10.0 o superior en la máquina. Si no lo tienes instalado, visita la página http://nodejs.org/ y descárgalo.

A continuación, es necesario instalar las dependencias de nuestro servidor (indicadas en el archivo /server/package.json). Para ello, es necesario situarse en esta ruta mediante la consola de comandos y ejecutar el comando npm install. Esto descargará las dependencias necesarias para correr la aplicación. Una vez este hecho esto, dentro del directorio server se debe ejecutar el comando node server.js y ya estará arrancada la aplicación, escuchando por defecto en el puerto 8080. Si queréis cambiar el puerto, podéis editar el archivo server.js y cambiar el valor de la variable port por el puerto que quieras.

