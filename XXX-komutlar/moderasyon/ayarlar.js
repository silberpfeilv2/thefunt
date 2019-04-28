const Discord = require('discord.js');
module.exports = {
    komut: "ayarlar",  
    açıklama: "Botta yaptığınız özelleştirmeleri görüntüleyebilirsiniz.", 
    kategori: "moderasyon", 
    alternatifler: ["ayarlar"], 
    kullanım: `/ayarlar`,
    yetki: ''
};
module.exports.baslat = (client, message, args) => {
    //eğer bir bot yollamış ise mesajı
if (message.author.bot === true) {
    return;
  }
  //eğer Özel mesajlarda kullanılmaya çalışılır ise hata yolla koçum :)
  if (!message.guild) {
    const ozelmesajuyari = new Discord.RichEmbed()
    .setColor('RANDOM')
    .setTimestamp()
    .setAuthor(message.author.username, message.author.avatarURL)
    .addField('Hata!', '`Ayarlar` adlı komutu özel mesajlarda kullanamazsın.')
    return message.author.send(ozelmesajuyari); }

  //mesaj tanımlamaları başlangıcı
  // her ikisininde açık olduğu ihtimali
  if( client.veritabanı.veri(`${message.guild.id}.ayarlar.küfürengel`) === "acik" || client.veritabanı.veri(`${message.guild.id}.ayarlar.reklamengel`) === "acik") {
    const ihtimal1 = new Discord.RichEmbed()
  .setDescription("Şu anda TheFunt bot ile yaptığınız özelleştirmeleri görüntülüyorsunuz.")
  .setColor('RANDOM')
  .addField(client.ayarlar.acik,  " | Küfür engelleme özelliği aktif!")
  .addField(client.ayarlar.acik,  " | Reklam engelleme özelliği aktif!")
  message.channel.send({embed:ihtimal1})
  }
  // Küfür engellemenin açık reklam engellemenin kapalı olduğu ihtimal
  if( client.veritabanı.veri(`${message.guild.id}.ayarlar.küfürengel`) === "acik" || client.veritabanı.veri(`${message.guild.id}.ayarlar.reklamengel`) === "kapali") {
    const ihtimal2 = new Discord.RichEmbed()
    .setDescription("Şu anda TheFunt bot ile yaptığınız özelleştirmeleri görüntülüyorsunuz.")
    .setColor('RANDOM')
    .addField(client.ayarlar.acik,    " | Küfür engelleme özelliği aktif!")
    .addField(client.ayarlar.kapali,  " | Reklam engelleme özelliği deaktif!")
    message.channel.send({embed:ihtimal2})
  }
  //küfür engellemenin kapalı reklam engellemenin açık olduğu ihtimal
  if( client.veritabanı.veri(`${message.guild.id}.ayarlar.küfürengel`) === "kapali" || client.veritabanı.veri(`${message.guild.id}.ayarlar.reklamengel`) === "acik") {
    const ihtimal3 = new Discord.RichEmbed()
    .setDescription("Şu anda TheFunt bot ile yaptığınız özelleştirmeleri görüntülüyorsunuz.")
    .setColor('RANDOM')
    .addField(client.ayarlar.kapali,    " | Küfür engelleme özelliği deaktif!")
    .addField(client.ayarlar.acik,      " | Reklam engelleme özelliği aktif!")
    message.channel.send({embed:ihtimal3})
    //her ikisininde kapal ıolduğu ihtimal
    if( client.veritabanı.veri(`${message.guild.id}.ayarlar.küfürengel`) === "kapali" || client.veritabanı.veri(`${message.guild.id}.ayarlar.reklamengel`) === "kapali") {
        const ihtimal4 = new Discord.RichEmbed()
        .setDescription("Şu anda TheFunt bot ile yaptığınız özelleştirmeleri görüntülüyorsunuz.")
        .setColor('RANDOM')
        .addField(client.ayarlar.kapali +    " | Küfür engelleme özelliği", "deaktif!")
        .addField(client.ayarlar.kapali +    " | Reklam engelleme özelliği", "deaktif!")
        message.channel.send({embed:ihtimal4})
    }
  }
}