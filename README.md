<h1 align="center"> sarah </h1>
<p align="center"> <a href="https://dottedco.github.io/">Our website</a> — <a href="https://dottedco.github.io/sarah/">sarah project's website</a> </p>

Welcome to the main site of the **sarah** project, a general purpose, configurable and highly reliable discord bot made entirely in pure *JavaScript* with only a few dependencies. Sarah is totally open source software, so feel free to contribute and make the changes you want to this project's source code. Also, if you like this project and want to help us in an indirect way, please give us a star, we will really appreciate it.

<br>
<br>

<h2 align="center"> installation </h2>
In the following steps, we'll guide you through the <i>(very easy)</i> process of installing the <b>sarah</b> bot in your discord server and deploying it.
<br>

1. [Forking and installation](#-forking-and-installation-)
2. [Configuration](#-configuration-)
3. [Bot deployment](#-bot-deployment-)
4. [Adding more commands](#-adding-more-commands-)

<h4 align="center"> Forking and installation </h4>
To install <b>sarah</b> in your favourite server, first you will have to fork this repository by clicking the fork button, after that, wait for a while until the process is completed and you will have succesfully forked the <b>sarah</b> repository.

<h4 align="center"> Configuration </h4>
After forking <b>sarah</b>, you will have to configure it, this can be done by editing the <code>./sarah/settings/settings.json</code> module with your favourite code editor. You must fill in all the properties.

<h4 align="center"> Bot deployment </h4>
And finally, you will just have to set up your deployment workflow (we personally recommend <a href="https://www.heroku.com/">Heroku</a>) and your bot will be successfully deployed.

<h4 align="center"> Adding more commands </h4>
Adding custom commands to the server is also an easy task, you only have to follow those three instructions:
<ol>
  <li> Firstly, you need to create its own JavaScript module in the <code>./sarah/commands/</code> directory, which must be called <code>[command].js</code>.</li>
  <li> Then, write the command program within its main function, which must be called <code>[command]cmd</code> and must recieve five arguments: <code>message, args, client, _, __</code> <i>(the last two arguments are useless, but your function must recieve them; otherwise it will generate an error)</i>. </li>
  <li> And finally go to the <code>commands</code> section of the <code>settings.json</code> module and add your command there as an object with the following properties:</li></ol>
<ul>
  <li><b>name</b>: <code>string</code></li>
  <li><b>desc</b>: <code>string</code></li>
  <li><b>path</b>: <code>string</code></li>
  <li><b>admin</b>: <code>bool</code></li>
  <li><b>state</b>: <code>0</code> or <code>1</code></li>
  <li><b>log</b>: <code>bool</code></li>
  <li><b>logicon</b>: <code>string</code></li>
  <li><b>logmsg</b>: <code>string</code></li>
  <li><b>logcolor</b>: <code>string</code></li>
</ul>
And your command will be <b>ready for action</b>!! 

<br>
<br>

<h2 align="center"> commands </h2>
The <b>sarah</b> bot comes by default with a wide variety of useful commands for your server, which we are detailed below. With this purpose in mind, we would like to detail the notation used below:
<ul>
  <li> <code>s!</code> will be the default prefix in this notation. </li>
  <li> <code>s!command [param]</code> means this command requires a parameter. </li>
  <li> <code>s!command (param)</code> means this command supports an optional parameter. </li>
  <li> 👮 <code>s!command</code> means this command can only be run by administrators </li>
</ul>
With this notation already detailed, let's go with the commands:
<ul>
  <li> 👮 <code>s!ban [user]</code>: When you insert a tag after the command, you ban the pinged user. </li>
  <li> 👮 <code>s!kick [user]</code>: When you insert a tag after the command, you kick the pinged user. </li>
  <li> 👮 <code>s!cls [number]</code>: If you write a number between 1-250 after typing this command, you delete that number of msgs. </li>
  <li> 👮 <code>s!lock (channel)</code>: If you type this command on a channel, that channel gets locked. </li>
  <li> 👮 <code>s!unlock (channel)</code>: If you type this command on a channel, that channel gets unlocked. </li>
  <li> 👮 <code>s!warn [user]</code>: When you insert a tag after the command, you warn the pinged user. </li>
  <li> 👮 <code>s!unwarn [user]</code>: When you insert a tag after the command, you unwarn the pinged user. </li>
  <li> 👮 <code>s!warns (user)</code>: The bot sends an embed with the warndes users in every server it is. </li>
  <li> 👮 <code>s!wjson </code>: The bot sends a JSON object with the warned users in every server it is. </li>
  <li> 👮 <code>s!setwarns [file]</code>: Given an attached JSON file, the server warnings will be replaced by the given in that file. </li>
  <li> 👮 <code>s!shutdown</code>: Just shutdown the bot until the <code>turnon</code> command is called. </li>
  <li> 👮 <code>s!turnon</code>: Turns on the bot again. </li>
  <li> <code>s!ping</code>: Simply replies with <code>pong</code>.</li>
  <li> <code>s!help</code>: This command shows you <b>sarah</b>'s commands.</li>
  <li> <code>s!pf [user]</code>: If you ping a user before the command, you see his/her profile photo.</li>
  <li> <code>s!cmds</code>: You're actually using this command.</li>
  <li> <code>s!bans</code>: The bot sends a list with all the banned users.</li>
  <li> <code>s!ascii [text]</code>: The bot sends a beauty text.</li>
  <li> <code>s!meme</code>: Sends a random meme.</li>
  <li> <code>s!userinfo [user]</code>: The bot sends an embed with the user's properties.</li>
  <li> <code>s!srvinfo</code>: The bot sends an embed with the server's properties.</li>
  <li> <code>s!rand (number) (number)</code>: The bot sends a random number between a given interval.</li>
  <li> <code>s!dice</code>: The bot sends a random number from <code>0</code> to <code>6</code>.</li>
  <li> <code>s!develop</code>: The bot sends an embed with the commands wich are on development.</li>
  <li> <code>s!emojis</code>: The bot sends an embed with all of this server's exclusive emojis.</li>
  <li> <code>s!ytsearch (text)</code>: Searches YouTube for a video related to the given query.</li>
</ul>

<br>
<br>

<h2 align="center"> license </h2>

#### Copyright (c) 2022 dotted software

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

<br>

<div align="center"><a href="docs/settings.md"><code>settings.json</code> documentation</a> — <a href="https://github.com/topics/sarahcmd">other commands</a></div>
