const Discord = require("discord.js");

module.exports = {
    komut: "ping", 
    açıklama: "Botun pingini ölçer.",
    kategori: "genel", 
    alternatifler: ['ping','p','gecikmesüresi'],
    kullanım: "!ping"//, 
    //yetki: '',
};
                 
module.exports.baslat = (client, message) => {
//eğer bir bot yollamış ise mesajı
if (message.author.bot === true) {
  return;
}

  var bekleEmbed = new Discord.RichEmbed()
    
  .setDescription(client.ayarlar.loading +  " | Ping ölçülüyor..")
  
            .setColor("#9b59b6")
            .setAuthor(message.author.tag, message.author.id)

            .setFooter(client.ayarlar.footer, client.ayarlar.footerURL);
  message.channel.send({embed: bekleEmbed}).then(m => m.delete(1000));

  let pingEmbed = new Discord.RichEmbed()
            .setColor("#9b59b6")
            .setAuthor(message.author.tag, message.author.avatarURL)       
            .setFooter(client.ayarlar.footer, client.ayarlar.footerURL)
            .setDescription(`❯ <:PingPong:503547373268500490> | Botun anlık pingi: ** ${Math.round(client.ping)}  ms.**`, true);
  setTimeout(() => {
     message.channel.send({embed: pingEmbed});
            }, 1001);  

};