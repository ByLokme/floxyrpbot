const Discord = require('discord.js');
exports.run = async (client, message, args) => { 
let prefix = '!'
let yardım = new Discord.RichEmbed()  
.setAuthor(`${client.user.username}`, client.user.avatarURL)
.setColor('Red')
.addField('Kobs Bot | Yetkili Komutları',`
**!ban** : Ban Sistemi
**!kick** : Kick Sistemi
**!sayaç-ayarla <miktar> <kanal>** : Sayaç Sistemini Ayarlarsın
**!sa-as** : Sa As Sistemi
**!sohbet aç** : Sohbeti Açar
**!sohbet kapat** : Sohbet Kapat'`)
.setFooter(`${message.author.tag} Tarafından İstendi.`, message.author.avatarURL)
.setImage('https://cdn.discordapp.com/avatars/750782544462479471/1a25b969d661d69ccab8d808d3f54609.png?size=2048')
 message.channel.send(yardım) 
  };
exports.conf = {
  enabled: true,  
  guildOnly: false, 
  aliases: ["yetkili"], 
  permLevel: 0
};
exports.help = {
  name: 'yetkili'
};
