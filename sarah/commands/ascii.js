const figlet = require("figlet");
const { settings } = require("../settings")

let asciicmd = async (message, args) => {
    if(!args[0])
        return message.reply("`You have to type something that is between 1 and 10  caracters`")
    
    if(args.join(" ").length > 15)
        return message.reply("`The text is too long`")
    
    figlet.text(args.join(" "), {
        font: settings.font,
        horizontalLayout: settings.horizontalLayout,
        verticalLayout: settings.verticalLayout,
        width: settings.width,
        whitespaceBreak: settings.whitespaceBreak
    }, (_, data) => message.channel.send("\`\`\`" + data + "\`\`\`"))
}

module.exports.asciicmd = asciicmd