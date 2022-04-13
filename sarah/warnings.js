let warnings = require("./settings/warnings.json");

let warn =   user => { if (!warnings[user]) {warnings[user] = 1} else {warnings[user] += 1}}
let unwarn = user => { if (!warnings[user]) {return} else {warnings[user] -= 1}}

let warns = ()     => {return warnings}
let warnsof = user => {return warnings[user]}

let setwarns = obj => {warnings = obj}

module.exports.warn = warn
module.exports.unwarn = unwarn
module.exports.warns = warns
module.exports.warnsof = warnsof
module.exports.setwarns = setwarns