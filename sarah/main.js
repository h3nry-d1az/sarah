const {  Client, Intents, Permissions  } = require('discord.js');
const client = new Client({
  intents:[Intents.FLAGS.GUILDS,Intents.FLAGS.GUILD_MESSAGES],
});

const styles = require("./styles");

const cmdscmd   = require("./commands/cmds").cmdscmd

const { settings } = require("./settings");
const commands = settings.commands.map(cmd => cmd.name)
let state = 1   // 0 for off, 1 for on


client.once('ready', (bot)=> {
  console.log("👌 — " + styles.stylize("I'm ready for action!!...", "green", "none", ["underscore"]));
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

  console.log("🔡 — I've recieved the following command: " + recieved);

  if (!commands.includes(command)) return cmdscmd(message, args, client, 'Hey bro, it seems like your command is wrong...', 'DARK_RED')
  else {
    let cmd = settings.commands.find(obj => obj.name === command);
    if (cmd.admin && !message.member.permissions.has(Permissions.FLAGS.BAN_MEMBERS)) return message.reply(`:x:| Seems like you don't have permissions to use the \`${command}\` command`)

    let mod = await import(`./${cmd.path}`)
    await mod[command + "cmd"](message, args, client, 'These are all my commands and their functions', 'GOLD')

    if (cmd.log) {
      console.log(`${cmd.logicon} — ${styles.stylize(cmd.logmsg, cmd.logcolor)}`)
    }

    state = cmd.state
  }
})


client.login(settings.token);
