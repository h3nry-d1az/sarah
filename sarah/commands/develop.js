const {  MessageEmbed } = require('discord.js');
const { settings } = require("../settings");

let developcmd = async message => {
    const develop = new MessageEmbed()
    .setTitle("**Developing commands:**")
    .setDescription(`||Prefix: ***${settings.prefix}***|| These are the commands on development:`)
    .setColor("GREEN")
    .setFooter(message.member.displayName, message.author.displayAvatarURL({ dynamic: true }))
    .setTimestamp()
    .addFields(
      {name: ":police_officer:| HD-8ball", value: "**TThis command allows you to ask a question to the bot**", inline: true}
    )

    message.reply({ embeds: [develop] })
}

module.exports.developcmd = developcmd
