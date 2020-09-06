const discord = require("discord.js");

module.exports.run = async (client, message, args) => {

    let targetMember = message.mentions.members.first();
    if(!targetMember) return message.reply('you need to tag a user in order to hug them!!');
        // message goes below!
         message.channel.send(`<@${targetMember.user.id}> \n you just got a hug  https://tenor.com/view/anime-cuddle-cute-gif-12668750`);
    }

module.exports.help = {
    name: "hug",
    description: "Someone's avatar"
}