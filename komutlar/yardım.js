const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

let botid = ('602024501710159882') //bu yere botun id'sini yapıştırın.
//eğer botunuz dbl(discord bot list) de yoksa Bota Oy Ver (Vote) olmucaktır.

exports.run = (client, message, args) => {
    const embed = new Discord.RichEmbed()
        .setAuthor(`${client.user.username} `, client.user.avatarURL)
        .setColor('0x36393E')
        .setTitle(`${client.user.username} - Yardım Menüsü`)
        .setDescription(`⚙️ | **${ayarlar.prefix}genel** Genel Komutlar\n⚙️ | **${ayarlar.prefix}yetkili** Yetkili Komutları\n⚙️ | **${ayarlar.prefix}koruma** Koruma Komutları`)  
        .setThumbnail(client.user.avatarURL)
        .addField(`FloxyRoleplay`, `[Tıkla](https://www.youtube.com/ogünsertkobs)`)
        .setFooter(`${message.author.username} Tarafından İstendi.`, message.author.avatarURL)
        .setImage('https://cdn.discordapp.com/avatars/750782544462479471/1a25b969d661d69ccab8d808d3f54609.png?size=2048')  
    return message.channel.sendEmbed(embed);
  
  
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['help'],
  permLevel: 0,
};

exports.help = {
  name: 'yardım',
  description: '',
  usage: ''
};