const discord = require("discord.js");

module.exports.run = async (client, message, args) => {

    var botEmbed = new discord.MessageEmbed()
    .setColor("RANDOM")
    .setThumbnail()
    .addFields(
        {name: "__**Bot name**__", value:client.user.username},
        {name: "__**Total members**__", value:message.guild.memberCount},
        {name: "__**You joined the server**__", value: message.member.joinedAt}
    );

    return message.channel.send(botEmbed);

}

module.exports.help = {
    name: "serverinfo",
    description: "Someone's avatar"
}