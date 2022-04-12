const {  MessageEmbed } = require('discord.js');

let userinfocmd = async message => {
    let usuario = message.mentions.users.first() || message.author;

    const ui = new MessageEmbed()
    .setTitle(`${usuario.username}'s info`)
    .setColor("RANDOM")
    .setThumbnail(message.guild.iconURL())
    .setDescription("**{General info:}**")
    .setTimestamp()
    .addFields(
      {name: ":id:| *User's ID:*", value: `${usuario.id}`, inline: true},
      {name: ":page_facing_up:| *User's tag:*", value: `${usuario.discriminator}`, inline: true},
      {name: ":birthday:| *User's account created at:*", value: `${usuario.createdAt}`, inline: true}
    )
    message.channel.send({ embeds: [ui] })
}

module.exports.userinfocmd = userinfocmd
