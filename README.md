# Documentación del Bot de Películas

## Introducción
El Bot de Películas es una herramienta diseñada para buscar información sobre películas, obtener detalles específicos y almacenar datos en una base de datos SQL.
En el portal de discord.js guide estan todas las indicaciones para crear tu propio bot y como encenderlo.

## Funcionalidades
Comandos Disponibles
1. ` /search-movie [nombre de la película] `  Busca información sobre una película según su nombre.

2. ` /movie-help ` Muestra una lista de comandos disponibles y su uso.

   # Uso del Bot 

## Instalación y Ejecución
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

## Comando de busqueda de peliculas
` /search-movie `: Este comando se utiliza para buscar información sobre una película. Ejemplo de uso:
```CMD
/search-movie Interstellar
```
## Comando de ayuda
` /movie-help: `
Muestra la lista de comandos disponibles y cómo usarlos.

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



