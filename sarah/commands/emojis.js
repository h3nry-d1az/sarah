const {  MessageEmbed } = require('discord.js');

let emojiscmd = async (message, args, client, _, _) => {
    const emojis = new MessageEmbed()
    .setTitle("Server exclusive emojis:")
    .setDescription(`These are this server's exclusive emojis:`)
    .setColor("GOLD")
    .setFooter(message.member.displayName, message.author.displayAvatarURL({ dynamic: true }))
    .setTimestamp()

    const emotes = message.guild.emojis.cache.map((e) => {
        return [`${e}`, `\`:${e.name}:\``]
    });
    
    for (let em of emotes) {
        emojis.addFields({name: em[1], value: em[0], inline: true})
    }

    message.reply({ embeds: [emojis] })
}

module.exports.emojiscmd = emojiscmd