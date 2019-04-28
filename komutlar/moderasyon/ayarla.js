const Discord = require('discord.js');

module.exports = {
    komut: "ayarla",  
    açıklama: "Botta bulunan özellikleri sunucunuzda açar/kapatırsınız.", 
    kategori: "moderasyon", 
    alternatifler: ["ayarla"], 
    kullanım: `/ayarla <özellik> <aç/kapat>`,
    yetki: 'MANAGE_GUILD',
    args: [
        {
            anahtar: 'özellik', 
            soru: 'Hangi özelliği ayarlamak istersiniz?',
            tip: 'yazi'
        },
        {
            anahtar: 'secenek', 
            soru: 'Bu özelliğin çalışma stilini ne olarak ayarlamak istersiniz? (Aç/Kapat)',
            tip: 'yazi'
        }
    ]
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
    .addField('Hata!', '`Ayarla` adlı komutu özel mesajlarda kullanamazsın.')
    return message.author.send(ozelmesajuyari); }
   
    /**//**//**/
  var özellikler = ["küfürengel","reklamengel"]; //knk bu kısımda hata var işte [] içindekileri aramıyor
if (!özellikler.some(word => args.özellik.includes(word))) {
 return message.channel.send(`<@${message.author.id}>,` + " yanlış bir özellik ismi girdiniz. \nSeçenekler: `küfürengel`, `reklamengel`."); }
    
    if (args.secenek == 'aç') {
        client.veritabanı.ayarla(`${message.guild.id}.ayarlar.${args.özellik}`, "acik")
          var eembed = new Discord.RichEmbed()
          .setAuthor(`TheFunt`)
          .setColor("RANDOM")
          .addField(`${args.özellik} modu: `, "Açık")
           .setTimestamp()
      .setFooter("Komut " + message.author.tag + " tarafından kullanıldı.")
       return message.channel.send({embed: eembed});
      }
      if (args.secenek == 'kapat') {
        client.veritabanı.sil(`${message.guild.id}.ayarlar.${args.özellik}`)
                var kembed = new Discord.RichEmbed()
          .setAuthor("TheFunt")
          .setColor("RANDOM")
          .addField(`${args.özellik} modu: `, "Kapalı")
           .setTimestamp()
      .setFooter("Komut " + message.author.tag + " tarafından kullanıldı.")
      return  message.channel.send({embed: kembed});
      } else {
      return message.channel.send(`<@${message.author.id}>,` + " yanlış bir seçenek girdiniz. \nSeçenekler: `aç`, `kapat`."); }
};