# Documentación del Bot de Películas

## Introducción
El Bot de Películas es una herramienta diseñada para buscar información sobre películas, obtener detalles específicos y almacenar datos en una base de datos SQL.

# Configuración de una cuenta de bot en Discord
Navega al sitio web del portal para desarrolladores de Discord e inicia sesión con tu cuenta principal de Discord: https://discord.com/developers/applications.

1. Haz clic en el botón "Nueva aplicación" en la esquina superior derecha:

  ![image](https://user-images.githubusercontent.com/8563780/162317136-4373626f-9f7a-4d7f-880c-60e470c64d69.png "New Application Button")

2. Nombra tu bot y haz clic en Crear. Este nombre debería ser el de tu programa.

Ve a la sección Bot en el menú de la izquierda:

 ![image](https://user-images.githubusercontent.com/8563780/162320423-275012d1-dc06-4c10-b954-b3cd86322c2c.png "Bot Section")

En la sección del bot, haz clic en el botón Agregar bot:

 ![image](https://user-images.githubusercontent.com/8563780/162321199-e5b00e88-4720-45c4-86c1-0da4bf47ebf1.png "Add Bot Button")

Nombra tu bot y procede a restablecer el token del bot:

![image](https://github.com/REyyyy43/Movie-bot/assets/144262402/77e045b5-98c1-4810-b7b0-fad29ca3b813)


Tan pronto como hagas clic en restablecer token, copia el nuevo token generado y guárdalo por ahora en el bloc de notas. Lo necesitarás más adelante.

Crear la URL para Invitar a tu Bot
Ve a la página de OAuth2 desde el menú de la izquierda:

![image](https://github.com/REyyyy43/Movie-bot/assets/144262402/619d7f50-c50b-41b0-9362-7356c311692b)


Copia tu ID de cliente y guárdalo en tu bloc de notas:

![image](https://github.com/REyyyy43/Movie-bot/assets/144262402/5f87c129-4a6a-4c48-8845-33eb5e83af52)


Haz clic en el Generador de URL y selecciona los ámbitos bot y applications.commands. El primero otorga privilegios de bot a la cuenta y el segundo permite comandos de barra.

![image](https://github.com/REyyyy43/Movie-bot/assets/144262402/db705fed-fd35-4900-bd38-f482d5c77a91)


Selecciona todos los permisos que el bot necesita para funcionar, mostrados abajo:

![image](https://github.com/REyyyy43/Movie-bot/assets/144262402/486042b3-36de-4d5e-9193-77e258e45423)



Copia la URL inferior y pégala en el navegador de tu preferencia. Esto te llevará a un menú de Discord para seleccionar a qué servidor añadir tu bot. Solo se mostrarán servidores en los que tengas permisos para añadir bots. Selecciona tu servidor y confirma.

![image](https://github.com/REyyyy43/Movie-bot/assets/144262402/b0c24596-9284-4cea-8519-830c8b1f71f7)


Ahora el bot está en tu servidor de Discord, pero por el momento no funciona. Necesitamos configurar primero el código del bot.

## Funcionalidades
Comandos Disponibles
1. ` /search-movie [nombre de la película] `  Busca información sobre una película según su nombre.
   
   ![image](https://github.com/REyyyy43/Movie-bot/assets/144262402/bb8a54ac-587e-4a68-ae5c-6707b3b8d5c4)


3. ` /movie-help ` Muestra una lista de comandos disponibles y su uso al presionar enter.

   ![image](https://github.com/REyyyy43/Movie-bot/assets/144262402/f1f51dcd-6b5c-46f8-a496-09cfbd23c28c)


   # Uso del Bot 

## Instalación y Ejecución

Descargue Git para Windows desde el sitio web oficial: https://gitforwindows.org/ . Siga los pasos para instalar git.

1. Clonación del Repositorio:
```CMD
git clone https://github.com/REyyyy43/Movie-bot.git
```
2. Instalación de Dependencias:
```CMD
npm install
```
3. Ejecucion del bot:
```CMD
npm start
```

## Interacción con la Base de Datos
El bot almacena el nombre de las películas buscadas en una base de datos SQLite.
Es importante tener instalado SQLite Viewer en el editor de codigo que estes utilizando, luego crear un archivo `bot.db`,
ahi te apareceran los nombres de las peliculas pedidas, para iniciarlo desde la terminal seria algo asi:
```CMD
npm install SQLite Viewer
```
Tambien tener instalado better-SQLite3 la cual es una biblioteca de node.js
```CMD
npm install better-sqlite3
```
Esto instalará better-SQLite3 en tu proyecto Node.js.

Recuerda que para usar Better-SQLite3, necesitarás Node.js instalado en tu sistema. Si no lo tienes, puedes descargarlo desde su sitio oficial.

## Notas Adicionales
El bot requiere acceso a internet para realizar búsquedas en la API de The Movie Database (TMDB).
Asegúrate de tener permisos suficientes en Discord para ejecutar los comandos del bot.



