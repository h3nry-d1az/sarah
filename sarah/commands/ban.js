const {  MessageEmbed, Permissions  } = require('discord.js');

let bancmd = async (message, args, client, _, _) => {
    const member = message.mentions.members.first() || message.guild.members.cache.get(args[0]);
    if(!message.member.permissions.has(Permissions.FLAGS.BAN_MEMBERS)) return message.reply("`Seems like you don't have permissions to ban members`");

    if(!member) return message.channel.send("`You have to ping the user or insert his ID discord number`")
    if(member === message.member) return message.channel.send("`You shouldn't try to ban yourself`")
    if(member.roles.highest.position >= message.member.roles.highest.position) return message.channel.send("`You can't ban a member who the same role or higher than you`")
    if(!member.bannable) return message.channel.send("You can't ban that member") 
    let reason = args.slice(1).join(' ')
    if(!reason) reason = '`None`'  
    if(reason.length > 1024) reason = reason.slice(0,1021)+ '...';
    await member.ban({ reason: reason });
    const ban = new MessageEmbed()
    .setTitle("**Banned user:**")
    .setColor("RED")
    .setDescription(`${member} Has been banned`)
    .addField(`Reason`, ` ${reason} `)
    .setFooter(message.member.displayName, message.author.displayAvatarURL({ dynamic: true }))
    .setTimestamp()
    message.channel.send({ embeds: [ban] })
}

module.exports.bancmd = bancmd