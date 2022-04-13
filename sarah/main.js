const {  Client, Intents  } = require('discord.js');
const client = new Client({
  intents:[Intents.FLAGS.GUILDS,Intents.FLAGS.GUILD_MESSAGES],
});

const styles = require("./styles");

const helpcmd     = require("./commands/help").helpcmd
const cmdscmd     = require("./commands/cmds").cmdscmd
const pfcmd       = require("./commands/pf").pfcmd
const memecmd     = require("./commands/meme").memecmd
const srvinfocmd  = require("./commands/srvinfo").srvinfocmd
const userinfocmd = require("./commands/userinfo").userinfocmd
const developcmd  = require("./commands/develop").developcmd
const lockcmd     = require("./commands/lock").lockcmd
const unlockcmd   = require("./commands/unlock").unlockcmd
const bancmd      = require("./commands/ban").bancmd
const kickcmd     = require("./commands/kick").kickcmd
const warncmd     = require("./commands/warn").warncmd
const unwarncmd   = require('./commands/unwarn').unwarncmd
const warnscmd    = require("./commands/warns").warnscmd
const setwarnscmd = require("./commands/setwarns").setwarnscmd
const clscmd      = require("./commands/cls").clscmd
const asciicmd    = require("./commands/ascii").asciicmd
const randcmd     = require("./commands/rand").randcmd
const shutdowncmd = require("./commands/shutdown").shutdowncmd
const turnoncmd = require('./commands/turnon').turnoncmd

const { settings } = require("./settings");
let state = 1   // 0 for off, 1 for on


client.once('ready', (bot)=> {
  console.log("👌 - " + styles.stylize("I'm ready for action!!...", "green", "none", ["underscore"]));
  client.user.setActivity(settings.status, {
    type: settings.sttype
  });
});

client.on('messageCreate', async (message) => {
  if(message.channel.type === "DM") return;
  if(message.author.bot) return;

  let prefix = settings.prefix;

  if(!message.content.startsWith(prefix)) return;

  const args = message.content.slice(prefix.length).trim().split(" ");
  const command = args.shift().toLowerCase()

  if (!state && command != "turnon") return;

  let recieved = "";
  let _ = args.forEach(element => {
    recieved += element + " "
  });
  recieved = command + " " + recieved.trim()

  console.log("🔡 - I've recieved the following command: " + recieved);

  switch (command) {
    case "help":
      await helpcmd(message);
      console.log("😊 - " + styles.stylize("We have helped someone!!", "cyan", "none", ["bright"]));
      break;

    case "cmds":
      await cmdscmd(message, 'Tese are functions of my commands', 'GOLD');
      break;

    case "pf":
      await pfcmd(message);
      break;

    case "meme":
      await memecmd(message);
      break;

    case "srvinfo":
      await srvinfocmd(message);
      break;

    case "userinfo":
      await userinfocmd(message);
      break;

    case "lock":
      await lockcmd(message, args);
      console.log("🔒 - " + styles.stylize(`The ${message.channel} channel has been LOCKED`, "yellow"));
      break;
  
    case "unlock":
      await unlockcmd(message, args);
      console.log("🔓 - " + styles.stylize(`The ${args[0] || message.channel} channel has been UNLOCKED`, "blue"));
      break;

    case "ban":
      await bancmd(message, args);
      console.log("❌ - " + styles.stylize(`The user ${message.mentions.members.first() || message.guild.members.cache.get(args[0])} has been BANNED`, "red"));
      break;

    case "kick":
      await kickcmd(message, args);
      console.log("⏏️ - " + styles.stylize(`The user ${message.mentions.members.first() || message.guild.members.cache.get(args[0])} has been KICKED`, 'yellow'));
      break;
        
    case "warn":
      await warncmd(message, args)
      console.log("😣 - " + styles.stylize(`The user ${message.mentions.members.first() || message.guild.members.cache.get(args[0])} has been WARNED`, "yellow"));
      break;

    case "unwarn":
      await unwarncmd(message, args)
      console.log("👍 - " + styles.stylize(`The user ${message.mentions.members.first() || message.guild.members.cache.get(args[0])} has been UNWARNED`, "blue"));
      break;

    case "warns":
      await warnscmd(message, args, client)
      break;

    case "setwarns":
      await setwarnscmd(message)
      console.log("♻️ - " + styles.stylize("The WARNINGS MODULE has been changed", "green"));
      break;

    case "cls":
      clscmd(message, args);
      console.log("🗑️ - " + styles.stylize(`We have deleted ${args[0]} messages`, "yellow"));
      break;
  
    case "ascii":
      asciicmd(message, args);
      break;

    case "rand":
      randcmd(message, args);
      break;

    case "develop":
      developcmd(message);
      break;

    case "shutdown":
      await shutdowncmd(message);
      state = 0;
      break;

    case "turnon":
      await turnoncmd(message);
      state = 1;
      break;

    default:
      cmdscmd(message, 'Hey bro, it seems like your command is wrong...', 'DARK_RED');
      break;
}})


client.login(settings.token);
