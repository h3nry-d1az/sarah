let dicecmd = async message => await message.reply(`Your random number is: \`${Math.floor(Math.random() * 6 + 1)}\``)
module.exports.dicecmd = dicecmd