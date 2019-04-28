const Discord = require('discord.js');

module.exports = {
    komut: "ayarlar",  
    açıklama: "Botta bulunan özelliklerin sunucunuzda açık mı kapalı mı olduğunu görürsünüz.", 
    kategori: "moderasyon", 
    alternatifler: ["ayarlar"], 
    kullanım: `/ayarlar`,
    yetki: 'MANAGE_GUILD'
};
module.exports.baslat = (client, message, args) => {
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
    .setTimestamp()
    
    .addField('Hata!', '`Ayarlar` adlı komutu özel mesajlarda kullanamazsın.')
    return message.author.send(ozelmesajuyari); }
   
    /**//**//**/

    if (client.veritabanı.varMı(`${message.guild.id}.ayarlar.küfürengel`) === "true") { 
    var DurumKE = `${client.ayarlar.acik}`;
     } else {
         var DurumKE = `${client.ayarlar.kapali}`;
     }

    const ayarlare = new Discord.RichEmbed()
    .setColor("#9b59b6")
 .setAuthor(message.author.tag, message.author.avatarURL)
 .setFooter(client.ayarlar.footer, client.ayarlar.footerURL) 
    .setDescription("Bir özelliği açmak istiyorsanız **/ayarla** komutu ile yapabilirsiniz.")
    .addField(`Küfür engel: `, DurumKE)
 //   .addField(`Reklam engel: `, DurumRE)
    message.channel.send({embed: ayarlare})
};