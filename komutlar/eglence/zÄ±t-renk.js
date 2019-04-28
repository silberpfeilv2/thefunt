const Discord = require('discord.js');
const Jimp = require('jimp');
const fs = require('fs');

module.exports = {
    komut: "zıt-renk",  
    açıklama: "İstediğiniz kişinin avatarını (profil fotoğrafını) zıt renkleriyle görebilirsiniz.", 
    kategori: "eglence", 
    alternatifler: ["zıtr", "zıtrenk"], 
    kullanım: '',    
    args: [
            {
                anahtar: 'kisi', 
                soru: 'Kimin avatarını (profil fotoğrafını) zıt renkleriyle görmek istersiniz?',
                tip: 'kullanici',
                
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
  .setColor('RANDOM')
  .setTimestamp()
  .setAuthor(message.author.username, message.author.avatarURL)
  .addField('Hata!', '`zıt-renk` adlı komutu özel mesajlarda kullanamazsın.')
  return message.author.send(ozelmesajuyari); } 
 
      let bekleEmbed = new Discord.RichEmbed()
      .setColor("#9b59b6")
      .setAuthor(message.author.tag, message.author.avatarURL)
      .setFooter(client.ayarlar.footer, client.ayarlar.footerURL)
      .setDescription(client.ayarlar.loading + " | Fotoğraf işleniyor...");
      
      message.channel.send({embed: bekleEmbed}).then(m => m.delete(1000));
      Jimp.read(args.kisi.avatarURL, function (err, image){
          image.resize(295, 295)
        
          image.invert().write(`./img/zıt-renk/`+client.user.id+`-`+args.kisi.id+`.png`);
          setTimeout(() => {
            
            
            
            const attachment = new Discord.Attachment(`./img/zıt-renk/`+client.user.id+`-`+args.kisi.id+`.png`, args.kisi.id+`.png`);
         
            
            let resimEmbed = new Discord.RichEmbed()
            .setColor("#9b59b6")
            .setAuthor(message.author.tag, message.author.avatarURL)
            .setFooter(client.ayarlar.footer, client.ayarlar.footerURL) 
            .setDescription("Resim gömülü olarak sunucularımızdaki sıkıntıdan dolayı gönderilemedi. Fakat resim ayrı bir mesaj olarak gönderildi. Bu sorunu yakın zamanda düzelteceğiz. Teşekkürler.")
            .attachFile(attachment)
             message.channel.send({embed: resimEmbed});  
            
            
   

          }, 1001);
        
        
          setTimeout(() => {
        fs.unlinkSync(`./img/zıt-renk/`+client.user.id+`-`+args.kisi.id+`.png`, args.kisi.id+`.png`);
            }, 2000);
        
      });
};