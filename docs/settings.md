<h1 align="center"><code>settings.json</code> documentation</h1>
Welcome to the documentation site of the <b>sarah</b> discord bot settings module (<code>settings.json</code>), here you will find everything you need to configure your <b>sarah</b> bot and adapt it to the needs of your server. Without further delay, let's start by enumerating each of the fields of the module and their respective types:
<ul>
<li> <b>prefix</b>: <code>string</code></li>
<li> <b>status</b>: <code>string</code></li>
<li> <b>sttype</b>: <code>string</code></li>
<li> <b>language</b>: <code>string</code></li>
<li> <b>maxwarns</b>: <code>int</code></li>
<li> <b>font</b>: <code>string</code></li>
<li> <b>horizontalLayout</b>: <code>string</code></li>
<li> <b>verticalLayout</b>: <code>string</code></li>
<li> <b>width</b>: <code>int</code></li>
<li> <b>whitespaceBreak</b>: <code>boolean</code></li>
<li> <b>commands</b>: <code>array</code></li>
<li> <b>token</b>: <code>string</code></li>
</ul>

Once the properties and their corresponding data types have been listed, let's explain how they work:

<ul>
<li> <b>prefix</b>: The prefix from which the <b>sarah</b> bot will detect that a command has to be executed, for example, taking <code>s!</code> as the default prefix, the bot commands should follow a structure like the following: <code>s![command] (args)</code></li>
<li> <b>status</b>: The discord status that the sarah bot should show once it is running.</li>
<li> <b>sttype</b>: The type of state that the sarah bot should have once it is running, for example, if it is <code>PLAYING</code>, the bot's discord state would be: <code>Playing [state]</code>, where <code>[state]</code> is the previously configured field.</li>
<li> <b>language</b>: The language of the server and, therefore, of the bot. Specifies a variety of things, such as the language of randomly generated memes.</li>
<li> <b>maxwarns</b>: The maximum number of warnings a user can have before being banned, defaults to <code>3</code>.</li>
<li> <b>font</b>: The font to be used by figlet in the default built-in <code>ascii</code> command.</li>
<li> <b>horizontalLayout</b>: A string value that indicates the horizontal layout to use. FIGlet fonts have 5 possible values for this: <code>default</code>, <code>full</code>, <code>fitted</code>, <code>controlled smushing</code>, and <code>universal smushing</code>.  <code>default</code> does the kerning the way the font designer intended, <code>full</code> uses full letter spacing, <code>fitted</code> moves the letters together until they almost touch, and <code>controlled smushing</code> and <code>universal smushing</code> are common FIGlet kerning setups.</li>
<li> <b>verticalLayout</b>: A string value that indicates the vertical layout to use. FIGlet fonts have 5 possible values for this: <code>default</code>, <code>full</code>, <code>fitted</code>, <code>controlled smushing</code>, and <code>universal smushing</code>.  <code>default</code> does the kerning the way the font designer intended, <code>full</code> uses full letter spacing, <code>fitted</code> moves the letters together until they almost touch, and <code>controlled smushing</code> and <code>universal smushing</code> are common FIGlet kerning setups.</li>
<li> <b>width</b>: This option allows you to limit the width of the output. For example, if you want your output to be a max of <code>80</code> characters wide, you would set this option to <code>80</code>.</li>
<li> <b>whitespaceBreak</b>: This option works in conjunction with <code>width</code>. If this option is set to true, then the library will attempt to break text up on whitespace when limiting the width.</li>
<li> <b>commands</b>: The set of server commands, in this arrangement are each of the configurations of each command that will be able to be executed. You can read more about how to add more commands to the server by clicking <a href="../README.md">here</a> or if you want to go deeper into how to create your own commands and publish them on GitHub you can click <a href="creating.md">here</a>.</li>
<li> <b>token</b>: The token of your discord bot to execute, it is possible to obtain it on this <a href="https://discord.com/developers/applications">website</a>.</li>
</ul>

<div align="center"><a href="https://dottedco.github.io/sarah/">sarah project's website</a> — <a href="creating.md">create your own commands</a> — <a href="https://github.com/topics/sarahcmd">other commands</a></div>