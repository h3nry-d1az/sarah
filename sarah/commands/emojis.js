const {  MessageEmbed } = require('discord.js');

let emojiscmd = async message => {
    const emojis = new MessageEmbed()
    .setTitle("Server exclusive emojis:")
    .setDescription(`These are this server's exclusive emojis:`)
    .setColor("GOLD")
    .setFooter(message.member.displayName, message.author.displayAvatarURL({ dynamic: true }))
    .setTimestamp()

    message.guild.emojis.cache.forEach(em => {
        emojis.addField({name: `\`:${em.name}:\``, value: em, inline: false})
    });

    message.reply({ embeds: [emojis] })
}

module.exports.emojiscmd = emojiscmd