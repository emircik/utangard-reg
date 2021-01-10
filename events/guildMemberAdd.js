const Discord = require('discord.js')
const data = require('wio.db')
const ms = require('ms')
const moment = require('moment')
const fs = require('fs')
const cfg = require('./cfg.json')

module.exports = member => {
  member.roles.add(cfg.kayıtsız)
  member.roles.add(cfg.kayıtsız)
};
