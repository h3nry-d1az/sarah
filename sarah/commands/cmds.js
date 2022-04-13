const {  MessageEmbed } = require('discord.js');
const { settings } = require("../settings")

let cmdscmd = async (message, args, client, description, color) => {
    const cmds = new MessageEmbed()
    .setTitle("Commands:")
    .setDescription(`*${description}*`)
    .setColor(color)
    .setFooter(message.member.displayName, message.author.displayAvatarURL({ dynamic: true }))
    .setTimestamp()
    .addFields(
      {name: `:police_officer:| **${settings.prefix}ban:**`, value: "*When you insert a tag after the command, you ban the pinged user*", inline: true},
      {name: `:police_officer:| **${settings.prefix}kick:**`, value: "*When you insert a tag after the command, you kick the pinged user*", inline: true},
      {name: `:police_officer:| **${settings.prefix}cls:**`, value:"*If you write a number between 1-250 after typing this command, you delete that number of msgs*", inline: true},
      {name: `:police_officer:| **${settings.prefix}lock:**`, value: "*If you type this command on a channel, that channel gets locked*", inline: true},
      {name: `:police_officer:| **${settings.prefix}unlock:**`, value: "*If you type this command on a channel, that channel gets unlocked*", inlin: true},
      {name: `:police_officer:| **${settings.prefix}warn:**`, value: "*When you insert a tag after the command, you warn the pinged user*", inline: true},
      {name: `:police_officer:| **${settings.prefix}unwarn:**`, value: "*When you insert a tag after the command, you unwarn the pinged user*", inline: true},
      {name: `:police_officer:| **${settings.prefix}warns:**`, value: "*The bot sends an embed with the warndes users in every server he is*", inline: true},
      {name: `:police_officer:| **${settings.prefix}setwarns:**`, value: "*Given an attached JSON file, the server warnings will be replaced by the given in that file*", inline: true},
      {name: `:police_officer:| **${settings.prefix}shutdown:**`, value: "*Just shutdown the bot until the `turnon` command is called*", inline: true},
      {name: `:police_officer:| **${settings.prefix}turnon:**`, value: "*Turns on the bot again*", inline: true},
      {name: `:space_invader:| **${settings.prefix}ping:**`, value: "*Simply replies with* `pong`", inline: true},
      {name: `:space_invader:| **${settings.prefix}help:**`, value: "*This command shows you my commands*", inline: true},
      {name: `:space_invader:| **${settings.prefix}pf:**`, value: "*If you ping a user before the command, you see his/her profile photo*", inline: true},
      {name: `:space_invader:| **${settings.prefix}cmds:**`, value: "*You're actually using this command*", inline: true},
      {name: `:space_invader:| **${settings.prefix}bans:**`, value: "*The bot sends a list with all the banned users*", inline: true},
      {name: `:space_invader:| **${settings.prefix}ascii:**`, value: "*The bot sends a beauty text*", inline: true},
      {name: `:space_invader:| **${settings.prefix}meme:**`, value: "*Sends a random meme*", inline: true},
      {name: `:space_invader:| **${settings.prefix}userinfo:**`, value: "*The bot sends an embed with the user's properties*", inline: true},
      {name: `:space_invader:| **${settings.prefix}srvinfo:**`, value: "*The bot sends an embed with the server's properties*", inline: true},
      {name: `:space_invader:| **${settings.prefix}rand:**`, value: "*The bot sends a random number between a given interval*", inline: true},
      {name: `:space_invader:| **${settings.prefix}dice:**`, value: "*The bot sends a random number from* `0` *to* `6`", inline: true},
      {name: `:space_invader:| **${settings.prefix}develop:**`, value: "*The bot sends an embed with the commands wich are on development*", inline: true},
      {name: `:space_invader:| **${settings.prefix}emojis:**`, value: "*The bot sends an embed with all of this server's exclusive emojis*", inline: true},
      {name: `:space_invader:| **${settings.prefix}ytsearch:**`, value: "*Searches YouTube for a video related to the given query*", inline: true},
    )

    message.reply({ embeds: [cmds] })
}

module.exports.cmdscmd = cmdscmd
