const Discord = require(`discord.js`);

module.exports = {
    name: "Tutaj komenda do wpisania np. !help (Usuń to)",
    run: async (bot, message, args) => {

        message.channel.send(`Tutaj napis który się wyświetla (Usuń to)`)
    }
}