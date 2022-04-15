const { settings } = require("../settings");
const { MessageEmbed } = require("discord.js")

let settingscmd = async (message, args, client, _, __) => {
    let text = ""
    for (elem in settings) {
        if (elem != "commands" && elem != "token")
            text += ` · ${elem} : ${settings[elem]}\n`
        else
            continue
    }

    text = `\`\`\`${text.slice(0, -1)}\`\`\``;

    const settngs = new MessageEmbed()
        .setTitle('Settings of this bot:')
        .setDescription('The list with this bot\'s settings')
        .setColor('DARKRED')
        .setFooter(message.member.displayName, message.author.displayAvatarURL({ dynamic: true }))
        .setTimestamp()
        .addField('Settings list', text)

    message.reply({ embeds: [settngs] })
}

module.exports.settingscmd = settingscmd