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
      {name: ":x: | No command in development at the moment", value: "**Sorry for the lack of good ideas :sweat_smile:**", inline: true}
    )

    message.reply({ embeds: [develop] })
}

module.exports.developcmd = developcmd
