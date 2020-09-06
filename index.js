const discord = require("discord.js");
const botconfig = require('./botConfig.json');

const fs = require ("fs");

const client = new discord.Client();

client.commands = new discord.Collection();

fs.readdir("./commands/", (err, files) => {

    if(err) console.log(err);

var jsFIles = files.filter(f => f.split(".").pop() === "js");

if(jsFIles.length <=0) {
    console.log("couldn't find the files.");
    return;
}

jsFIles.forEach((f, i) => {

    var fileGet = require(`./commands/${f}`);
    console.log(`【✅】【${f}】【✅】`);

    client.commands.set(fileGet.help.name, fileGet);

})

});


client.login(botconfig.token);

client.on("ready", async () => {
 
    console.log(`${client.user.username} is online!`);
    client.user.setActivity("use *help", {type: "Playing"})

})

client.on("message", async message =>{

if(message.author.bot) return;

if(message.channel.type == "dm") return;

var prefix = botconfig.prefix;

var messageArray = message.content.split(" ");

var command = messageArray[0];

var arguments = messageArray.slice(1);


var commands = client.commands.get(command.slice(prefix.length));

if (commands) commands.run(client, message, arguments)


if(command === `${prefix}Hello`){
    return message.channel.send("hello there!")
}

});