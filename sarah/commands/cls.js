let clscmd = async (message, args, client, _, __) => {
    const cuantity = args[0]

    if(!cuantity || isNaN(cuantity) || (cuantity >= 250 || cuantity <= 0)) return message.reply("`You must provide an amount between 1, 250`")

    message.delete().then(q => {
      message.channel.bulkDelete(cuantity)
      message.channel.send(`\`A total of ${cuantity} messages have been deleted\``)
    })
}

module.exports.clscmd = clscmd
