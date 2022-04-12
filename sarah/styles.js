let tstyles = {
    styles: {
        "reset"      : "\x1b[0m",
        "bright"     : "\x1b[1m",
        "dim"        : "\x1b[2m",
        "underscore" : "\x1b[4m",
        "blink"      : "\x1b[5m",
        "reverse"    : "\x1b[7m",
        "hidden"     : "\x1b[8m",
        "none"       : ""
    },
    foreg: {
        "black"   : "\x1b[30m",
        "red"     : "\x1b[31m",
        "green"   : "\x1b[32m",
        "yellow"  : "\x1b[33m",
        "blue"    : "\x1b[34m",
        "magenta" : "\x1b[35m",
        "cyan"    : "\x1b[36m",
        "white"   : "\x1b[37m",
        "none"    : ""
    },
    backg: {
        "black"   : "\x1b[40m",
        "red"     : "\x1b[41m",
        "green"   : "\x1b[42m",
        "yellow"  : "\x1b[43m",
        "blue"    : "\x1b[44m",
        "magenta" : "\x1b[45m",
        "cyan"    : "\x1b[46m",
        "white"   : "\x1b[47m",
        "none"    : ""
    }
}

let stylize = (txt="", fg="none", bg="none", styles=["none"]) => {
    codes = styles.map(style => {
        return tstyles.styles[style]
    });
    let stprefix = codes.reduce((ac, nxt) => ac + nxt, "");

    return (tstyles.foreg[fg] + tstyles.backg[bg] + stprefix + txt + tstyles.styles["reset"]);
}


module.exports.styles = tstyles
module.exports.stylize = stylize