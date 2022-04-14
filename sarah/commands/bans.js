const { MessageEmbed } = require('discord.js');
const styles = require("../styles")

let banscmd = async (message, args, client, _, __) => {
    message.guild.bans.fetch().then(bans => {
        let list = bans.map(user => user.user.username);
        let text = ""
        for (let u of list) {
            text += ` · ${u}\n`
        }
        text = `\`${text.slice(0, -1)}\``;

        if (text == "``") return message.reply("`No users have been banned on this server yet`")

        const banned = new MessageEmbed()
        .setTitle('Banned users of this server:')
        .setDescription('The list with all the banned users of this server')
        .setColor('DARKRED')
        .setFooter(message.member.displayName, message.author.displayAvatarURL({ dynamic: true }))
        .setTimestamp()
        .addField('Banned users list', text)

        message.reply({ embeds: [banned] })
    }).catch(err => {
        console.log("❌ - " + styles.stylize('ERROR: ' + err, "red"));
        message.reply("`Couldn't fetch the banned users correctly`");
    });
}

module.exports.banscmd = banscmd