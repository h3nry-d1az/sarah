const {  Permissions  } = require("discord.js")
const styles = require("../styles")

let turnoncmd = async (message, args, client, _, __) => {
    await message.reply("`This bot has been turned on again...`");
    return
}

module.exports.turnoncmd = turnoncmd