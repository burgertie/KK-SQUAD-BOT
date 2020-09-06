const discord = require("discord.js");

module.exports.run = async (client, message, args) => {

    // !clear aantal
    if (!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply("You do not have permissions to use this command");

    if (!args[0]) return message.reply("Give me a number between 1 and 99");

    if (Number.isInteger(parseInt(args[0]))) {

        var aantal = parseInt(args[0]) + 1;

        message.channel.bulkDelete(aantal).then(() => { 

            if (args[0] == 0) {

                message.reply(`Are you stupid? i can't remove 0 messages`).then(msg => msg.delete({timeout: 3000}));
            
            } else if (args[0] == 1) {
            
                message.reply(`I've deleted 1 message`).then(msg => msg.delete({timeout: 3000}));
            
            } else {
            
                message.reply(`I have deleted ${args[0]} messages`).then(msg => msg.delete({timeout: 3000}));
            
            }

        });

    } else {
        return message.reply("Geef een getal op.");
    }

}

module.exports.help = {
    name: "clear",
    description: "clear commands"
}