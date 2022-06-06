const { Telegraf } = require("telegraf")

const bot = new Telegraf("5309977513:AAHLJdlvWScanfthCRTZdnmqOXTWhTliFLg");

/*bot.start((ctx) =>  {
    ctx.reply(`Programación Computacional IV, Bienvenido ${ctx.from.first_name}`);

});

//comando personalizado
bot.command(['Saludar', 'Saludo', 'Hola'], (ctx) => {
    ctx.reply("Buenos dias ");
});

bot.on('sticker', (ctx)=> {
    ctx.reply("Buen Sticker");
});*/

// shorturl.at/qXY29

const dexel = new pexels("563492ad6f9170000100000170ecda89c0f542258148e8fd55b13b5c")
const { v4: uuidV4 } = require('uuid')
require('dotenv').config()
let factGenerator = require('./factGenerator')

bot.launch();