const {  MessageEmbed } = require('discord.js');
const { settings } = require("../settings")

let cmdscmd = async (message, args, client, description, color) => {
  admincmds  = settings.commands.filter(cmd => cmd.admin)
  nadmincmds = settings.commands.filter(cmd => !cmd.admin)
  const cmds = new MessageEmbed()
  .setTitle("Commands:")
  .setDescription(`*${description}*`)
  .setColor(color)
  .setFooter(message.member.displayName, message.author.displayAvatarURL({ dynamic: true }))
  .setTimestamp()

  for (cmd of admincmds)  cmds.addField(`:police_officer:| **${settings.prefix}${cmd.name}:**`, `*${cmd.desc}*`, true)
  for (cmd of nadmincmds) cmds.addField(`:space_invader:| **${settings.prefix}${cmd.name}:**`, `*${cmd.desc}*`, true)

  message.reply({ embeds: [cmds] })
}

module.exports.cmdscmd = cmdscmd
