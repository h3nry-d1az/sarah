const {  Permissions  } = require("discord.js")
const styles = require("../styles")

let turnoncmd = async (message, args, client, _, __) => {
    if(!message.member.permissions.has(Permissions.FLAGS.ADMINISTRATOR)) return message.reply("`Seems like you don't have permissions to turn on the bot`");
    console.log("🔌 - " + styles.stylize("Turning on the bot...", "green"));
    await message.reply("`This bot has been turned on again...`");
    return
}

module.exports.turnoncmd = turnoncmd