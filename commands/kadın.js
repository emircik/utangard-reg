const Discord = require("discord.js")
const cfg = require('../cfg.json');
const data = require('wio.db')
client = new Discord.Client();

module.exports.run = async (client, message, args) => {
  if (!message.member.roles.cache.has(cfg.kayıtyetkisi) && !message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(`**Bu komutu sadece yetkililer kullanabilir.**`)
  var uye = message.mentions.users.first() || client.users.cache.get(args[0])
  var isim = args.slice(1).join(" | ")
  if (!uye) return message.channel.send(`**Bir kullanıcı etiketle yada ID'sini gir.**`)
  if (!isim) return message.channel.send(`**Bir isim belirtmelisin.**`)
  if(!message.mentions.users.first().username.includes(cfg.tag)) {
   message.guild.members.cache.get(uye.id).setNickname("・" + " " + isim)
 } else {
   message.guild.members.cache.get(uye.id).setNickname(cfg.tag + " " + isim)
 }
 message.guild.members.cache.get(uye.id).roles.add(cfg.kız)
 message.guild.members.cache.get(uye.id).roles.remove(cfg.kayıtsız)
  data.add(`kayıt.kız_${message.author.id}`, 1)
  data.set(`son.kayıt_${message.author.id}`, uye.id)
  message.react("797772844956254241")
  return message.channel.send(new Discord.MessageEmbed().setAuthor(message.author.tag,message.author.avatarURL({ dynamic: true, format: "gif" }))
.setDescription(`${uye} isimli kullanıcı <@&${cfg.kız}> olarak kaydedildi`))

};

exports.config = {
name: "kız",
guildOnly: true,
aliases: ["kadın", "k", "girl", "woman"],
};
