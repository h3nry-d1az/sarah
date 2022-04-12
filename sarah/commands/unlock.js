const {  MessageEmbed, Permissions  } = require('discord.js');

let unlockcmd = async (message, args) => {
    let channel = null;
    try {
      channel = message.guild.channels.cache.get(args[0].slice(2, -1))
    } catch (error) {
      channel = message.channel
    }
    if(!message.member.permissions.has(Permissions.FLAGS.MANAGE_MESSAGES)) return message.reply(":x:| `You haven't permissions to use this command`")
    await channel.permissionOverwrites.edit(message.guild.id, {
      SEND_MESSAGES: true
    }).catch(err => console.log(err))

    const unlock = new MessageEmbed()
    .setTitle(":unlock:Unlocked channel:unlock:")
    .setDescription(`${channel} has been unlocked`)
    .setColor("GREEN")
    .setThumbnail(message.guild.iconURL())
    .addField(`Locked by:`, `${message.author.tag}`)
    .setTimestamp()

    await message.channel.send({embeds: [unlock] })
}

module.exports.unlockcmd = unlockcmd