const fetch = require("node-fetch");

let ytsearchcmd = async (message, args) => {
    if (args.length === 0) return message.reply("`You must provide a search query`")
    let url = 'https://www.youtube.com/results?search_query=' + encodeURIComponent(args.join(" "))
    let resp = await fetch(url)
    let data = await resp.text()
    let res = Array.from(data.matchAll(/watch\?v=(\S{11})/g), m => m[0])
    if (res.length === 0) return message.reply("`No search results found :(`")
    return message.reply('https://www.youtube.com/' + res[0])
}

module.exports.ytsearchcmd = ytsearchcmd