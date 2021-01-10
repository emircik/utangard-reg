const Discord = require("discord.js")
const cfg = require('../cfg.json');
const data = require('wio.db')
client = new Discord.Client();

module.exports.run = async (client, message, args) => {
  const voiceChannels = message.guild.channels.cache.filter(c => c.type === 'voice');
  let count = 0;
  for (const [id, voiceChannel] of voiceChannels) count += voiceChannel.members.size;
  var üyesayısı = message.guild.members.cache.size.toString().replace(/ /g, "    ")
  var üs = üyesayısı.match(/([0-9])/g)
  üyesayısı = üyesayısı.replace(/([a-zA-Z])/g, "bilinmiyor").toLowerCase()
  if(üs) {
  üyesayısı = üyesayısı.replace(/([0-9])/g, d => {
  return {
      '0': `<:sifir:797871794539069511>`,
      '1': `<:bir:797871794614435850>`,
      '2': `<:iki:797871794446401567>`,
      '3': `<:uc:797871794718900234>`,
      '4': `<:dort:797871795050119178>`,
      '5': `<:bes:797871794845122570>`,
      '6': `<:alti:797871794840666132>`,
      '7': `<:yedi:797871794941329408>`,
      '8': `<:sekiz:797871794907512833>`,
      '9': `<:dokuz:797871795180666950>`}[d];})}



  var sessayı = count.toString().replace(/ /g, "    ")
  var üs2 = sessayı.match(/([0-9])/g)
  sessayı = sessayı.replace(/([a-zA-Z])/g, "bilinmiyor").toLowerCase()
  if(üs2) {
  sessayı = sessayı.replace(/([0-9])/g, d => {
  return {
    '0': `<:sifir:797871794539069511>`,
    '1': `<:bir:797871794614435850>`,
    '2': `<:iki:797871794446401567>`,
    '3': `<:uc:797871794718900234>`,
    '4': `<:dort:797871795050119178>`,
    '5': `<:bes:797871794845122570>`,
    '6': `<:alti:797871794840666132>`,
    '7': `<:yedi:797871794941329408>`,
    '8': `<:sekiz:797871794907512833>`,
    '9': `<:dokuz:797871795180666950>`}[d];})}

  var taglılar = 0;
  let tag = cfg.tag;
  message.guild.members.cache.forEach(member => {
  if(member.user.username.includes(tag)) {
  taglılar = taglılar+1}})

  var taglılar = taglılar.toString().replace(/ /g, "    ")
  var üs3 = taglılar.match(/([0-9])/g)
  taglılar = taglılar.replace(/([a-zA-Z])/g, "bilinmiyor").toLowerCase()
  if(üs3) {
  taglılar = taglılar.replace(/([0-9])/g, d => {
  return {
    '0': `<:sifir:797871794539069511>`,
    '1': `<:bir:797871794614435850>`,
    '2': `<:iki:797871794446401567>`,
    '3': `<:uc:797871794718900234>`,
    '4': `<:dort:797871795050119178>`,
    '5': `<:bes:797871794845122570>`,
    '6': `<:alti:797871794840666132>`,
    '7': `<:yedi:797871794941329408>`,
    '8': `<:sekiz:797871794907512833>`,
    '9': `<:dokuz:797871795180666950>`}[d];})}



  var cevirimici = message.guild.members.cache.filter(m => m.presence.status !== "offline").size.toString().replace(/ /g, "    ")
  var üs4= cevirimici.match(/([0-9])/g)
  cevirimici = cevirimici.replace(/([a-zA-Z])/g, "bilinmiyor").toLowerCase()
  if(üs4) {
  cevirimici = cevirimici.replace(/([0-9])/g, d => {
  return {
    '0': `<:sifir:797871794539069511>`,
    '1': `<:bir:797871794614435850>`,
    '2': `<:iki:797871794446401567>`,
    '3': `<:uc:797871794718900234>`,
    '4': `<:dort:797871795050119178>`,
    '5': `<:bes:797871794845122570>`,
    '6': `<:alti:797871794840666132>`,
    '7': `<:yedi:797871794941329408>`,
    '8': `<:sekiz:797871794907512833>`,
    '9': `<:dokuz:797871795180666950>`}[d];})}




  var booster = message.guild.roles.cache.get(cfg.booster).members.size
  var booster = booster.toString().replace(/ /g, "    ")
  var üs5 = booster.match(/([0-9])/g)
  booster = booster.replace(/([a-zA-Z])/g, "bilinmiyor").toLowerCase()
  if(üs5) {
  booster = booster.replace(/([0-9])/g, d => {
  return {
    '0': `<:sifir:797871794539069511>`,
    '1': `<:bir:797871794614435850>`,
    '2': `<:iki:797871794446401567>`,
    '3': `<:uc:797871794718900234>`,
    '4': `<:dort:797871795050119178>`,
    '5': `<:bes:797871794845122570>`,
    '6': `<:alti:797871794840666132>`,
    '7': `<:yedi:797871794941329408>`,
    '8': `<:sekiz:797871794907512833>`,
    '9': `<:dokuz:797871795180666950>`}[d];})}

return message.channel.send(new Discord.MessageEmbed().setAuthor(message.guild.name,message.guild.iconURL({ dynamic: true })).setThumbnail(message.guild.iconURL({ dynamic: true  }))
.setDescription(`**• Sunucumuzda Toplam ${üyesayısı} Kişi Bulunuyor
• Tagımızı Alan ${taglılar} Kişi Bulunuyor
• Boost Basan ${booster} Kişi Bulunuyor
• Seslide Toplam ${sessayı} Kişi Bulunuyor**`))
};

exports.config = {
name: "say",
guildOnly: true,
aliases: [],
};
