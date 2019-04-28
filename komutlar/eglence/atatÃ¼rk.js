const Discord = require("discord.js");

module.exports = {
    komut: "atatürk", 
    açıklama: "Rastgele Atatürk Fotoğrafı Gönderir",
    kategori: "eglence", 
    alternatifler: ['atatürk', "atam"],
    kullanım: "/atatürk", 
    yetki: ''
}

module.exports.baslat = (client, message) => {
 //eğer bir bot yollamış ise mesajı
if (message.author.bot === true) {
  return;
}
//eğer Özel mesajlarda kullanılmaya çalışılır ise hata yolla koçum :)
if (!message.guild) {
  const ozelmesajuyari = new Discord.RichEmbed()
  .setColor("#9b59b6")
 .setAuthor(message.author.tag, message.author.avatarURL)
 .setFooter(client.ayarlar.footer, client.ayarlar.footerURL) 
  .addField('Hata!', '`atatürk` adlı komutu özel mesajlarda kullanamazsın.')
  return message.author.send(ozelmesajuyari); }

    const request = require('request');

    request('http://thefunt-api.glitch.me/ataturk', function (error, response, body) {

    var api = JSON.parse(body);
    var link = api.link;
      
    request("http://thefunt-api.glitch.me/ataturk-sozu", function(error,response,body) {
     
      var api2 = JSON.parse(body);
      var söz = api2.soz;      

    let embed = new Discord.RichEmbed()
    .setAuthor(message.author.username+' ', message.author.avatarURL)
  			.setColor("#9b59b6")
        .setDescription(söz)
        .setFooter(client.ayarlar.footer, client.ayarlar.footerURL)
    .setImage(link);
      message.channel.send({embed: embed});
          })
});
};