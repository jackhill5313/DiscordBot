var Discord = require('discord.js');
var bot = new Discord.Client();

bot.on('ready', () => {
    bot.user.setUsername("MemeBot");
})

bot.on('message', (message) => {
    if(message.author.username === 'Fury'){
        message.react("🇼").then(x => {
            message.react("🇭").then(x => {
                message.react("🇦").then(x => {
                    message.react("🇱").then(x => {
                        message.react("🇪").then(x => {
                            message.react("🐳");
                        });
                    });
                });
            })
        })
    }
})

bot.login('token here');


function getEmojiByName(emojiName){
    var emojis = bot.emojis;
    var holder = "";

    emojis.forEach(function(element) {
        if(element.name === emojiName){
            holder = element.id;
        }
    }, this);

    return holder;
}