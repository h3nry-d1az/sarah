const {  Permissions  } = require("discord.js")
const styles = require("../styles")

let shutdowncmd = async (message, args, client, _, __) => {
    await message.reply("`This bot has been shut down, type turnon to turn on the bot again...`");
    return
}

module.exports.shutdowncmd = shutdowncmd