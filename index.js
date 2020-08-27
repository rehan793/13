const Discord = require('discord.js');
const bot = new Discord.Client();

const token = 'NzA5NjU5MzU3NTI4MTk1MTEy.X0d8WA.4ro2CL0_OcRogFRPATT7VSfnkSs';

bot.on('ready', () => {
    console.log('Your Bot Online');
});


bot.login(token);