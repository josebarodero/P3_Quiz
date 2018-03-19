/**
 * Created by joseba.rodero.diaz on 28/02/18.
 */

const figlet = require('figlet');
const chalk = require('chalk');


// pinta mensajes

const colorize = (msg, color) => {

    if (typeof color !== "undefined") {
        msg = chalk[color].bold(msg);
    }
    return msg;
};





//Escribe un mensaje de log

const log = (msg, color) => {

    console.log(colorize(msg, color));
};





//Escribe un mensaje de log en grande

const biglog = (msg, color) => {

    log(figlet.textSync(msg, { horizontalLayout: 'full'}), color);
};


//Escribe el mensaje de error emsg

const errorlog = (esmg) => {

    console.log(`${colorize("Error", "red")}: ${colorize(colorize(esmg , "red"), "bgYellowBright")}`);
};



exports = module.exports = {
    colorize,
    log,
    biglog,
    errorlog
};
