const discord = require('discord.js');
const bot = new discord.Client();
const token = 'NzI2NDE0NDM2NzIxNjIzMDgw.Xvc9wA.uW_UES6M3cV26yLI_doMvAltIzs';
const prefix = '!';

bot.on('ready', () => console.log('Bot online'));

bot.on('message', message => {
  let args = message
    .content
    .substring(prefix.length)
    .split(' ');

  switch (args[0]) {
    case 'd20':
      message.reply(Math.floor(Math.random() * 20) + 1);
      break;
  }
});

bot.login(token);
