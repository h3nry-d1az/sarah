let randcmd = async (message, args) => {
    let number;
    if (!args[0]) { number = Math.floor(Math.random() * 10 + 1) }
    else {
        try {
            let n1 = parseInt(args[0]);
            let n2 = parseInt(args[1]);
            number = Math.floor(Math.random()*(n2-n1+1)+n1);
        } catch (err) {
            return message.reply("`You must provide two integers for the interval`")
        }
    }
    return message.reply(`Your random number is: \`${number}\``)
}

module.exports.randcmd = randcmd