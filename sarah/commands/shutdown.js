const {  Permissions  } = require("discord.js")
const styles = require("../styles")

let shutdowncmd = async (message, args, client, _, _) => {
    if(!message.member.permissions.has(Permissions.FLAGS.ADMINISTRATOR)) return message.reply("`Seems like you don't have permissions to shut down the bot`");
    console.log("💣 - " + styles.stylize("Shutting down the bot...", "red"));
    await message.reply("`This bot has been shut down, type turnon to turn on the bot again...`");
    return
}

module.exports.shutdowncmd = shutdowncmd