const {  Permissions  } = require('discord.js');

let clscmd = async (message, args) => {
    const cuantity = args[0]
    if(!message.member.permissions.has(Permissions.FLAGS.MANAGE_MESSAGES)) return message.reply(":x:| `You haven't permissions to use this command`")

    if(!cuantity || isNaN(cuantity) || (cuantity >= 250 || cuantity <= 0)) return message.reply("`You must provide an amount between 1, 250`")

    message.delete().then(q => {
      message.channel.bulkDelete(cuantity)
      message.channel.send(`There have been ${cuantity} deleted messages`)
    })
}

module.exports.clscmd = clscmd