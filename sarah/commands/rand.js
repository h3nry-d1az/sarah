let randcmd = async message => message.reply(`Your random number is: \`${Math.floor(Math.random() * 10 + 1)}\``)
module.exports.randcmd = randcmd