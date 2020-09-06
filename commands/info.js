const discord = require("discord.js");

module.exports.run = async (client, message, args) => {

    var botEmbed = new discord.MessageEmbed()
    .setTitle("__**bot commands**__")
    .setColor("RANDOM")
    .addField("**!hello**", "Hello there!")
    .addField("**!info**", "bot commands")
    .addField("**!server info**", "info about the server")
    .addField("**!hug**", "hug someone!")
    .addField("**!prefix**", "change the bot prefix")
    .addField("**!clear**", "clear the messages choose between 1 and 99")
    .addField("**!play**", "play some music")
    .addField("**!skip**", "skip the current music")
    .addField("**!resume**", "resume the current music")
    .addField("**!queue**", "check which music is in the queue")
    .addField("**!np**", "which music is now playing")
    .addField("**!volume**", "change the volume of the music bot")
    .setTimestamp();

    return message.channel.send(botEmbed);

}

module.exports.help = {
    name: "info",
    description: "bot commands"
}