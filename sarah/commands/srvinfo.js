const {  MessageEmbed } = require('discord.js');

let srvinfocmd = async message => {
    const sri = new MessageEmbed()
    .setTitle("**Server Info:**")
    .setDescription("This command shows you the server info")
    .setThumbnail(message.guild.iconURL())
    .setColor("RANDOM")
    .setFooter(message.member.displayName, message.author.displayAvatarURL({ dynamic: true }))
    .setTimestamp()
    .addFields(
      {name: ":e_mail:| *Number of channels:*", value: `${message.guild.channels.cache.size}`, inline: true},
      {name: ":crown:|*Owner:*", value: `${await message.guild.fetchOwner()}`, inline: true},
      {name: ":bust_in_silhouette:| *Members:*", value: `${message.guild.memberCount}`, inline: true},
      {name: ":file_folder:| *Number of roles:*", value: `${message.guild.roles.cache.size}`, inline: true},
      {name: ":id:| *Server's ID:*", value: `${message.guild.id}`, inline: true},
      {name: ":birthday:| *Creation date*", value: `${message.guild.createdAt}`, inline: true},
      {name: ":smile:| *Number of emotes:*", value: `${message.guild.emojis.cache.size}`, inline: true},
      {name: ":robot:| *Number of bots*", value: `${message.guild.members.cache.filter(m => m.user.bot).size}`, inline: true},
      {name: ":fire:| *Number of boosts:*", value: `${message.guild.premiumSubscriptionCount.toString()}`, inline: true}
    )
    message.channel.send({ embeds: [sri] })
}

module.exports.srvinfocmd = srvinfocmd