const Discord = require("discord.js")
const cfg = require('../cfg.json');
const data = require('wio.db')
client = new Discord.Client();

module.exports.run = async (client, message, args) => {
var üye = client.users.cache.get(args[0])
if (!üye) return message.channel.send(`**Bir ID girmelisin**`)
message.guild.members.cache.get(üye.id).roles.add(cfg.kayıtyetkisi)
return message.react("797883690012246016")
}

exports.config = {
name: "kayıtyetki",
guildOnly: true,
aliases: [],
};
