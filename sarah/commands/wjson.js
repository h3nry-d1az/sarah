const { warns } = require("../warnings")
let wjsoncmd = async (message, args, client, _, __) => { await message.reply(`\`\`\`json\n${warns()}\`\`\``) }
module.exports.wjsoncmd = wjsoncmd