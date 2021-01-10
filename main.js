const Discord = require("discord.js")
const client = new Discord.Client();
const config = require("./config.js")
const cfg = require("./cfg.json")
const data = require('wio.db')
const fs = require("fs");
const moment = require('moment')
require('moment-duration-format')
require('./util/Loader.js')(client);

client.commands = new Discord.Collection();
client.aliases = new Discord.Collection();
fs.readdir('./commands/', (err, files) => {
  if (err) console.error(err);
  console.log(`${files.length} komut yüklenecek.`);
  files.forEach(f => {
    let props = require(`./commands/${f}`);
    console.log(`${props.config.name} komutu yüklendi.`);
    client.commands.set(props.config.name, props);
    props.config.aliases.forEach(alias => {
      client.aliases.set(alias, props.config.name);
    });
  });
})

client.login(config.token)

client.on("guildMemberAdd", member => {
  moment.locale("tr")

  const kurulus = new Date().getTime() - member.createdTimestamp;
  const kanal = client.channels.cache.get(cfg.hgkanal);
  const zaman = new Date().getTime() - client.users.cache.get(member.id).createdAt.getTime();
  var takizaman = [];
  if(zaman < 604800000) {
  member.roles.cache.forEach(a => {
  member.roles.remove(a)
  })
  member.roles.add(cfg.şüpheli)
  kanal.send(new Discord.MessageEmbed()
  .setDescription(
    `**${member} Aramıza Katıldı Hesabı 7 Gün'den Önce Açıldığı İçin Şüpheli Bölümüne Atıldı**`
  ))
  } else {

  var linkler = [
   "https://media.discordapp.net/attachments/722211557043601558/796403935404883978/ggece_11.gif",
   "https://cdn.discordapp.com/attachments/797577895308296212/797896995058090064/17.gif",
   "https://cdn.discordapp.com/attachments/797577895308296212/797897390631288922/15_1.gif"
  ]
  kanal.send(new Discord.MessageEmbed()
.setDescription(`**<a:utangard_tac2:797772822591963156>  Utangard'a Hoş Geldin! Hesabın Güvenli Olarak Gözüküyor

<a:utangard_siyahelmas:797772879285714944> Tag Alarak ve Ses Teyit Kanalına Girerek Kaydını Oluşturabilirsin

<a:utangard_kulak:797772821513371650> Yetkili Ekimiz Kayıt Olurken Sana Yardım Ediceklerdir

<a:utangard_star:797772849288970250> Hesap ${moment.duration(zaman).format(` YY [Yıl,] DD [Gün,] HH [Saat,] mm [Dakika,] ss [Saniye]`)} Önce Açılmış**`)
.setImage(linkler[Math.floor(Math.random()*(linkler.length-0+1)+0)]))
}
})
