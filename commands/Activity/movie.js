// Importación de módulos necesarios
const { SlashCommandBuilder } = require('@discordjs/builders'); // Importa el constructor para comandos de Discord
const fetch = require('node-fetch'); // Módulo para realizar solicitudes HTTP
const Database = require('better-sqlite3'); // Módulo para trabajar con SQLite

// Creación de una conexión con la base de datos SQLite
const db = new Database('bot.db'); // Crea una nueva base de datos o abre una existente ('bot.db')

// Creación de una tabla en la base de datos si no existe
db.prepare('CREATE TABLE IF NOT EXISTS Movies (id INTEGER PRIMARY KEY AUTOINCREMENT, movieName TEXT, movieTitle TEXT, movieDescription TEXT, imageUrl TEXT)').run();

module.exports = {
    // Configuración del comando de Discord
    data: new SlashCommandBuilder()
        .setName('search-movie')
        .setDescription('Searches for a movie.')
        .addStringOption(option =>
            option.setName('movie')
                .setDescription('Enter the movie name')
                .setRequired(true)
        ),

    // Función para ejecutar el comando
    async execute(interaction) {
        // Obtener el nombre de la película proporcionado por el usuario
        const movieName = interaction.options.getString('movie');

        // Definición de la API key y la URL de la API de The Movie Database (TMDB)
        const apiKey = '3b343ea057d21d8de7aac2073bb7746d';
        const apiUrl = `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${encodeURIComponent(movieName)}`;

        try {
            // Realizar una solicitud a la API de TMDB para buscar la película
            const response = await fetch(apiUrl);
            const data = await response.json();

            // Verificar si se encontraron resultados
            if (data.results && data.results.length > 0) {
                // Obtener el primer resultado de la búsqueda (la película más relevante)
                const movie = data.results[0];
                const movieId = movie.id; // Obtener el ID de la película
                
                // Realizar una solicitud a la API de TMDB para obtener detalles adicionales de la película (imágenes)
                const movieDetails = await fetch(`https://api.themoviedb.org/3/movie/${movieId}?api_key=${apiKey}&append_to_response=images`);
                const details = await movieDetails.json();

                const movieTitle = details.title; // Obtener el título de la película
                const movieDescription = details.overview; // Obtener la descripción de la película
                const images = details.images.backdrops; // Obtener imágenes de la respuesta de la API

                if (images.length > 0) {
                    const imageUrl = `https://image.tmdb.org/t/p/original${images[0].file_path}`;
                    const replyMessage = `Movie searched: ${movieName}\nTitle: ${movieTitle}\nDescription: ${movieDescription}\nImage: ${imageUrl}`;
        
                    if (!interaction.replied) {
                        await interaction.reply(replyMessage);
        
                        // Almacenar solo el nombre de la película en la base de datos SQLite
                        const insertQuery = db.prepare('INSERT INTO Movies (movieName) VALUES (?)');
                        insertQuery.run(movieName);
                    }
                } else {
                    if (!interaction.replied) {
                        await interaction.reply('Movie image not found.');
                    }
                }
            } else {
                await interaction.reply('Movie not found.');
            }
        } catch (error) {
            // Manejar cualquier error durante el proceso
            console.error('Error searching for the movie:', error);
            await interaction.reply('There was an error searching for the movie.');
        }
    },
};
