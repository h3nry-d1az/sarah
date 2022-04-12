const {  MessageEmbed } = require('discord.js');

let pfcmd = async message => {
    const Target = await message.mentions.users.first() || message.author;

    const pf = new MessageEmbed()
    .setTitle(`${Target.tag}'s avatar:`)
    .setImage(Target.displayAvatarURL({ size: 2048, dynamic: true }))
    .setColor("RANDOM")
    .setFooter(`Command executed by: ${message.author.tag}`)
    .setTimestamp()

    message.reply({ embeds: [pf] })
}

module.exports.pfcmd = pfcmd