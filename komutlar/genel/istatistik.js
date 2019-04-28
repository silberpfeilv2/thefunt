const Discord = require('discord.js');

module.exports = {
    komut: "istatistik",  
    açıklama: "Botun anlık sistem bilgilerini görebilirsiniz.", 
    kategori: "genel", 
    alternatifler: ["i", "istatistik", "istatistikler"], 
    kullanım: `istatistik`
};
 
module.exports.baslat = (client, message) => {
  //eğer bir bot yollamış ise mesajı
if (message.author.bot === true) {
  return;
}

    var bekleEmbed = new Discord.RichEmbed()
  .addField(" <a:loading2:503562521077219328>  **|** Sistem ve sistem bilgileri ölçülüyor.", "*Yaklaşık 2 saniye beklemeniz yeterli olacaktır.*")
      message.channel.send({embed: bekleEmbed}).then(m => m.delete(800));

  let iEmbed = new Discord.RichEmbed()
 .setColor("#9b59b6")
 .setAuthor(message.author.tag, message.author.avatarURL)
 .setFooter(client.ayarlar.footer, client.ayarlar.footerURL) 
 .setThumbnail(client.user.avatarURL)
 .addField('❯ Botun anlık pingi:', "**" + `${client.ping}` + " Ms.**", true)
 .addField('❯ Mesaj gecikmesi:', `**${new Date().getTime() - message.createdTimestamp} Ms.**`, true)
 .addField('❯ Botun çalışma süresi:', "**" + `${process.uptime()}` + " Saniye**")
 .addField('❯ VDS\'in işletim sistemi:', "**" + `${process.platform}` + "**, **" + `${process.arch}` + "**")
 .addField('❯ Kullanılan RAM Miktarı:', "**" + `${process.memoryUsage().heapUsed}` + " MB** / **" + `${process.memoryUsage().heapTotal}` + " MB**")
 .addField('❯ Kullanılan CPU Miktarı:', "**" + `${process.cpuUsage().system}` + " MB**")
  .setTimestamp()
  
              setTimeout(() => {
              message.channel.send({embed: iEmbed});
            }, 250);  
};