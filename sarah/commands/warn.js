const {  MessageEmbed, Permissions } = require('discord.js');
const {  warn, warnsof  } = require("../warnings");
const {  settings  } = require("../settings");

let warncmd = async (message, args, client, _, _) => {
    const member = message.mentions.members.first() || message.guild.members.cache.get(args[0]);
    if(!message.member.permissions.has(Permissions.FLAGS.BAN_MEMBERS)) return message.reply("`Seems like you don't have permissions to warn members`");

    if(!member) return message.channel.send("`You have to ping the user or insert his ID discord number`")
    if(member === message.member) return message.channel.send("`You shouldn't try to warn yourself`")
    if(member.roles.highest.position >= message.member.roles.highest.position) return message.channel.send("`You can't warn a member who the same role or higher than you`")
    if(!member.bannable) return message.channel.send("You can't warn that member") 
    let reason = args.slice(1).join(' ')
    if(!reason) reason = '`None`'  
    if(reason.length > 1024) reason = reason.slice(0,1021)+ '...';

    warn(args[0]);

    if (warnsof(args[0]) >= settings.maxwarns) {
        await member.ban({ reason: `${member} has exceeded the warnings limit: *${reason}*` });
        const ban = new MessageEmbed()
        .setTitle("**Banned user:**")
        .setColor("RED")
        .setDescription(`${member} Has been banned`)
        .addField(`Reason`, ` ${member} has exceeded the warnings limit: *${reason}*`)
        .setFooter(message.member.displayName, message.author.displayAvatarURL({ dynamic: true }))
        .setTimestamp()
        message.channel.send({ embeds: [ban] })
        return
    } else {
        const warn = new MessageEmbed()
        .setTitle("**Warned user:**")
        .setColor("GOLD")
        .setDescription(`${member} Has been warned`)
        .addField(`Reason`, ` ${reason} `)
        .setFooter(message.member.displayName, message.author.displayAvatarURL({ dynamic: true }))
        .setTimestamp()
        message.channel.send({ embeds: [warn] })
        return
    }
}

module.exports.warncmd = warncmd
