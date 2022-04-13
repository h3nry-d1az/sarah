const {  MessageEmbed } = require('discord.js');
const axios = require("axios");
const { settings } = require("../settings")

let memecmd = async message => {
    axios
    .get(`https://memes.blademaker.tv/api?lang=${settings.language}`)
    .then(async function(response) {
      const { data } = response;

      const meme = new MessageEmbed()
      .setTitle(data.title)
      .setColor("GREEN")
      .setImage(data.image)
      .setTimestamp()
      message.channel.send({ embeds: [meme] })
    }) 
}

module.exports.memecmd = memecmd