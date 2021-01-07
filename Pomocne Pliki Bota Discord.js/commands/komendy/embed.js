const Discord = require(`discord.js`);
const { MessageEmbed } = require(`discord.js`);

module.exports = {
    name: "komenda do wpisania np. !help (Wpisz tutaj swoją i usuń to)",
    run: async (bot, message, args) => {

        const wiadomosc_embed = new Discord.MessageEmbed()
        .setTitle(`Tytuł - Napis na samej górze (Usuń to)`) 
        .setDescription(`Wiadomość (Usuń to)`)
        .setFooter(`Wiadoość na samym dole (Usuń to)`)
        .setColor(`Kolor np "RANDOM" (Usuń to)`)
        message.channel.send(wiadomosc_embed)
    }
}