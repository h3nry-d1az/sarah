const package = require("./package.json")
const pfile   = './package.json'

const settingsm = require("./sarah/settings/settings.json")
const sfile     = './sarah/settings/settings.json'

const fs          = require('fs')
const fetch       = require('node-fetch')
const { stylize } = require("./sarah/styles")


let usage = () => {
    console.log("Adding commands to the sarah bot")
    console.log(stylize("$ node addcmd.js [user] [repo]", 'green'))
    console.log()
    console.log(" · user: GitHub username of the command creator")
    console.log(" · repo: name of the command repository")
    console.log()
    console.log(stylize('NOTE: addcmd.js will download necessary files from github', 'yellow'))
    console.log()
}


if (process.argv.length < 4 || process.argv[2] === '--help' || process.argv[2] === '-h') {
    usage()
    process.exit(0)
}

let username = process.argv[2]
let repository = process.argv[3]


let fetchM = async url => {
    console.log(stylize(` · Trying to fetch the ${url} module...`, 'yellow'))
    try {
        let data = await fetch(`https://raw.githubusercontent.com/${username}/${repository}/main/${url}`)
        data = data.text()
        console.log(stylize(` · ${url} module fetched successfully`, 'green'))
        return data
    } catch (e) {
        console.log(stylize(` · Couldn't fetch the ${url} module`, 'red'))
        console.log()
        console.log(e)
        process.exit(1);
    }
}

(async () => {
    try {
        let settings = await fetchM('settings.json')
        settings = JSON.parse(settings)
        settings.path = 'commands/' + settings.name + '.js'

        let requirements = await fetchM('requirements.json')
        requirements = JSON.parse(requirements)

        let index = await fetchM('index.js')


        for (let dep in requirements)
            package.dependencies[dep] = requirements[dep]

        fs.writeFileSync(pfile, JSON.stringify(package), err => {
            if (err) {
                console.log(stylize(` · Couldn't update package.json module properly`))
                console.log()
                console.log(err)
                process.exit(1)
            }
        })


        let admincmds = settingsm.commands.filter(x => x.admin)
        let nadmincmds = settingsm.commands.filter(x => !x.admin)

        settings.admin ? admincmds.push(settings) : nadmincmds.push(settings)

        let commands = admincmds.concat(nadmincmds)
        settingsm.commands = commands

        fs.writeFileSync(sfile, JSON.stringify(settingsm), err => {
            if (err) {
                console.log(stylize(` · Couldn't update settings.json module properly`))
                console.log()
                console.log(err)
                process.exit(1)
            }
        })


        fs.writeFileSync(`./sarah/commands/${settings.name}.js`, index, err => {
            if (err) {
                console.log(stylize(` · Couldn't write ${settings.name}.js module properly`))
                console.log()
                console.log(err)
                process.exit(1)
            }
        })


        console.log(stylize(`Job completed, command ${settings.name} added to sarah successfully`, 'green'))
        console.log()

        process.exit(0)
    } catch (e) {
        console.log(e);
        process.exit(0)
    }
})()