// Importación de los módulos necesarios
const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
    // Configuración del comando de ayuda para el buscador de películas
    data: new SlashCommandBuilder()
        .setName('movie-help')
        .setDescription('Shows available movie search commands and their usage'),

    // Función para ejecutar el comando de ayuda
    async execute(interaction) {
        // Mensaje de ayuda con la lista de comandos de búsqueda de películas y su uso
        const helpMessage = `**Movie Search Commands:**\n` +
            `\`/search-movie [movie name]\`: Search for a movie by its name.\n` +
            `\n**Usage:**\n` +
            `Use the command /search-movie followed by the movie name to find information about a specific movie.`;

        // Responder al usuario con el mensaje de ayuda
        await interaction.reply(helpMessage);
    },
};
