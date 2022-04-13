const {  MessageEmbed, Permissions  } = require('discord.js');

let kickcmd = async (message, args, client, _, _) => {
    const member = message.mentions.members.first() || message.guild.members.cache.get(args[0]);
    if(!message.member.permissions.has(Permissions.FLAGS.KICK_MEMBERS)) return message.reply("`Seems like you don't have permissions to kick members`");

    if(!member) return message.channel.send("`You have to ping the user or insert his ID discord number`")
    if(member === message.member) return message.channel.send("`You shouldn't try to kick yourself`")
    if(member.roles.highest.position >= message.member.roles.highest.position) return message.channel.send("`You can't kick a member who the same role or higher than you`")
    if(!member.kickable) return message.channel.send("You can't kick that member") 
    let reason = args.slice(1).join(' ')
    if(!reason) reason = '`None`'  
    if(reason.length > 1024) reason = reason.slice(0,1021)+ '...';
    await member.kick({ reason: reason });
    const kick = new MessageEmbed()
    .setTitle("**Kicked user:**")
    .setColor("ORANGE")
    .setDescription(`${member} Has been kicked`)
    .addField(`Reason`, `${reason}`)
    .setFooter(message.member.displayName, message.author.displayAvatarURL({ dynamic: true }))
    .setTimestamp()
    message.channel.send({ embeds: [kick] })
}

module.exports.kickcmd = kickcmd