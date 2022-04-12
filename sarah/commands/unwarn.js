const {  MessageEmbed, Permissions } = require('discord.js');
const {  unwarn  } = require("../warnings");

let unwarncmd = async (message, args) => {
    const member = message.mentions.members.first() || message.guild.members.cache.get(args[0]);
    if(!message.member.permissions.has(Permissions.FLAGS.BAN_MEMBERS)) return message.reply("`Seems like you don't have permissions to unwarn members`");

    if(!member) return message.channel.send("`You have to ping the user or insert his ID discord number`")
    if(member === message.member) return message.channel.send("`You can't unwarn yourself`")
    if(member.roles.highest.position >= message.member.roles.highest.position) return message.channel.send("`You can't warn a member who the same role or higher than you`")
    if(!member.bannable) return message.channel.send("You can't unwarn that member")

    unwarn(args[0]);

    const unwarning = new MessageEmbed()
    .setTitle("**Unwarned user:**")
    .setColor("BLUE")
    .setDescription(`${member} Has been unwarned`)
    .setFooter(message.member.displayName, message.author.displayAvatarURL({ dynamic: true }))
    .setTimestamp()
    message.channel.send({ embeds: [unwarning] })
}

module.exports.unwarncmd = unwarncmd