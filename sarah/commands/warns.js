const {  MessageEmbed } = require('discord.js');
const {  warns, warnsof  } = require("../warnings");

let warnscmd = async (message, args, client, _, _) => {
    if (args.length == 0) {
        if (Object.keys(warns()).length === 0) return message.reply("`No one has been warned yet...`")
        const warnings = new MessageEmbed()
        .setTitle("**Warned users:**")
        .setDescription("These users have been **warned** at least once")
        .setColor("YELLOW")
        .setFooter(message.member.displayName, message.author.displayAvatarURL({ dynamic: true }))
        .setTimestamp()

        for (let w in warns()) { warnings.addFields({name: client.users.cache.get(w.slice(2, -1)).username, value: `Has **#${warnsof(w).toString()}** warns`, inline: true}) }
        message.reply({ embeds: [warnings] })
        return
    } else {
        let member = message.mentions.members.first() || message.guild.members.cache.get(args[0]);
        const pf = new MessageEmbed()
        .setTitle(`${member.user.username} has **#${warnsof(args[0]) || 0} warns**`)
        .setImage(member.displayAvatarURL({ size: 1024, dynamic: true }))
        .setColor("RANDOM")
        .setFooter(`Command executed by: ${message.author.tag}`)
        .setTimestamp()

        message.reply({ embeds: [pf] })
        return
    }
}

module.exports.warnscmd = warnscmd
