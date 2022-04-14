const { Permissions } = require('discord.js');
const { setwarns } = require("../warnings");
const fetch = require('node-fetch');

let setwarnscmd = async (message, args, client, _, __) => {
    const file = message.attachments.first()?.url;
    if (!file) return message.reply('``No attached file found``');
    
    const response = await fetch(file);
    if (!response.ok)
        message.reply('``An error happened while fetching the file``')
    
    let text = await response.text()
    const data = await JSON.parse(text);
    setwarns(data);

    message.reply("```json\n" + JSON.stringify(data) + "```");
    return
}

module.exports.setwarnscmd = setwarnscmd