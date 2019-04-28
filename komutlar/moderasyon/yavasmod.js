const Discord = require("discord.js");

module.exports = {
    komut: "yavaşmod",  
    açıklama: "Chat konuşmalarınızı yavaşlatın!", 
    kategori: "moderasyon", 
    alternatifler: ["yavasmod",'yavaş-mod','yavaşmod'], 
    kullanım: '/yavaşmod',
    yetki: 'MANAGE_MESSAGES',
  
  args: [
            {
                anahtar: 'limit',
                soru: 'Herkes kaç saniyede bir yazabilsin? (Yazma sınırı kaç saniye olarak belirlensin?)',
                tip: 'sayi'
            }
        ]
}

module.exports.baslat = async (client, message, args) => {
   //eğer bir bot yollamış ise mesajı
if (message.author.bot === true) {
  return;
}

//özel mesaj uyarı
    if (!message.guild) {
  const ozelmesajuyari = new Discord.RichEmbed()
  .setColor("#9b59b6")
 .setAuthor(message.author.tag, message.author.avatarURL)
 .setFooter(client.ayarlar.footer, client.ayarlar.footerURL) 
  .addField('Hata!', '`yavasmod` adlı komutu özel mesajlarda kullanamazsın.')
  return message.author.send(ozelmesajuyari); }
  
if (message.channel.type !== "text") return;
if (args.limit > 120) return message.channel.send(client.ayarlar.basarisiz + " | Süre limiti maksimum 120 saniye olabilir.");
var request = require('request');
request({
    url: `https://discordapp.com/api/v6/channels/${message.channel.id}`,
    method: "PATCH",
    json: {
        rate_limit_per_user: args.limit
    },
    headers: {
        "Authorization": `Bot ${client.token}`
    },
});

if (args.limit == 0) return message.channel.send(client.ayarlar.basarili + " | **Artık herkes istedigi hızda konuşabilir.**");
return message.channel.send(client. ayarlar.basarili + ` | Herkes bundan sonra [**${args.limit}**] saniye'de bir konuşabilecek.`);
};