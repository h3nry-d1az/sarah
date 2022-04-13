const {  MessageEmbed } = require('discord.js');
const { settings } = require("../settings");

let helpcmd = async message => {
    const help = new MessageEmbed()
    .setTitle("Commands:")
    .setDescription(`||Prefix: ***${settings.prefix}***|| These are my commands:`)
    .setColor("AQUA")
    .setFooter(message.member.displayName, message.author.displayAvatarURL({ dynamic: true }))
    .setTimestamp()
    .addFields(
      {name: ":police_officer: Mod commands:", value: "**> ban, kick, cls, lock, unlock, warn, warns, setwarns, shutdown, turnon**", inline: true},
      {name: ":space_invader: Extra commands", value: "**> help, pf, cmds, ascii, meme, userinfo, srvinfo, develop**", inline: true},
      {name: "***__PD:__***:", value: "The warns embed shows you an embed with the warns of the members ON EVERY SERVER THIS BOT IS"}
    )

    message.reply({ embeds: [help] })
}

module.exports.helpcmd = helpcmd
