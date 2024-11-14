Pasos para poder ejecutar UXMethodsSearcher en tu dispositivo:


1. Descarga la base de datos
Desde el link url de github, debes entrar a la carpeta uxsearch, luego a la carpeta server y se encontrará el archivo uxsearch.sql, que debes descargar.

Tras haber descargado el archivo, debes tener instalado postgresql en tu dispositivo, ingresar a la aplicación pgAdmin 4, crear una nueva base de datos (con el nombre de tu preferencia).

{
1.1. Asegurate de tener postgresql en tus variables de entorno
En el buscador de aplicaciones, busca: "Variables de entorno", selecciona opciones avanzadas, y en la parte inferior aparecerá "Variables de entorno", seleccionalo, y busca "Path" en variables de usuario. Haz doble click izquierdo en "Path" y busca si posees "C:\Program Files\PostgreSQL\(tu version de postgreSQL)\bin", si no aparece, selecciona el botón nuevo e inserta la variable mostrada, luego debes seleccionar aceptar, se cerrará la pantalla, y cuando aparezca propiedades del sistema, debes volver a seleccionar aceptar.
}

Tras haber realizado estos pasos, debes abrir el buscador de aplicaciones, y buscar "Símbolo de sistema" o cmd, ejecutarlo, y pegar el siguiente comando: 
pg_restore -U (tu usuario de postgres) -W -d (nombre de la base de datos creada) "(Ruta donde se encuentra la base de datos descargada) (recuerda que el nombre del archivo es uxsearch.sql)>"
y te solicitará la contraseña de tu usuario de postgres.

Tras haber realizado estos pasos, puedes dirigirte a la aplicación pgAdmin, abrir la base de datos creada, y verificar que las tablas fueron correctamente clonadas.

Ahora estas listo para continuar con el siguiente paso.


2. Clonar el repositorio desde github
Con el link del proyecto puedes realizar la clonación del proyecto completo, (Elseba13/UXSearchFront-End), si posees la aplicación de github, puedes pegar el link directamente, y se realizará la clonación en tu dispositivo.

Tras realizar correctamente la clonación, debes abrir la aplicación (o en el posible caso descargar si no la posees) visual studio code (VCS), donde se mostrará el código de la aplicación.

3. Cambiar las variables de entorno
Tras haber clonado el repositorio, encontrarás el código en tu aplicación de VCS.

Una vez abierto el código, debes dirigirte al archivo ".env" en la carpeta server, y cambiar los valores de los campos a los que correspondan en la configuración de tu dispositivo, por ejemplo para PG_DATABASE= (nombre de la base de datos creada en el paso 1), PG_PASSWORD="(contraseña de tu usuario de postresql)"

4. Abrir una terminal dividida en VCS
Tras haber completado exitosamente los pasos 1, 2 y 3, debes dirigirte a los 3 puntos que se encuentran junto a la palabra "Run", presionar "Terminal" y luego "Split Terminal", se abrirá una terminal dividida, para que puedas utilizar.

Primero deberás instalar algunas dependencias si es que no las posees, si no no podrás abrir el código.
Solo ejecuta los siguientes comandos en una de las dos terminales abiertas:
"npm install" y debes esperar a que se instalen todas las dependencias. Una vez listo, puedes ejecutar el comando "clear" que te permitirá limpiar los mensajes previos de la terminal.


Ahora estas listo para continuar!


En una de las terminales debes ejecutar los siguientes comandos: 
"cd uxsearch"
"cd server"
"node server.js"
Si ejecutaste correctamente el paso de cambiar las variables a las de tu dispositivo, se deberán mostrar los siguientes mensajes:
DB_USER: (tu usuario)
DB_PASSWORD: (tu contraseña)
Servidor corriendo en el puerto 5000

En la segunda terminal debes ejecutar los siguientes comandos:
"cd uxsearch"
"npm start"

Y listo, se abrirá la aplicación de manera local en tu dispositivo! 

Los manuales e instructivos del uso de la aplicación se encuentran en la misma aplicación, asi que ahora puedes utilizar UXMethodsSearcher de manera libre.


5. Paso extra, acceso al usuario de administrador en UXMethodsSearcher
Por seguridad y validación, en el sitio no fue implementado un apartado para crear un usuario, pero no importa, te compartimos las credenciales con las que podrías acceder, y ejecutar las funciones de administrador.

Credencial 1:
correo electrónico: adminuxmethodssearcher@gmail.com
contraseña: admincontra

Deben ser correctamente ingresadas para poder acceder a las funciones de administrador.