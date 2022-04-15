const {  MessageEmbed } = require('discord.js');
const { settings } = require("../settings");

let developcmd = async (message, args, client, _, __) => {
    const develop = new MessageEmbed()
    .setTitle("**Developing commands:**")
    .setDescription(`||Prefix: ***${settings.prefix}***|| These are the commands on development:`)
    .setColor("GREEN")
    .setFooter(message.member.displayName, message.author.displayAvatarURL({ dynamic: true }))
    .setTimestamp()
    
    if (settings.commands.filter(c => c.ondev).length === 0) {
      develop.addFields({name: `:x: | No commands in development at the moment`, value: `**Sorry for the lack of good ideas :sweat_smile:**`, inline: true})
      return message.reply({ embeds: [develop] })
    } else {
      for (cmd of settings.commands.filter(c => c.ondev)) {
        develop.addFields({name: `${cmd.admin ? ':police_officer:' : ':space_invader:'} | ${cmd.name}`, value: cmd.desc, inline: true})
      }
      message.reply({ embeds: [develop] })
    }
}

module.exports.developcmd = developcmd
