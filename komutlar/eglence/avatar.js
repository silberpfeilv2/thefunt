const Discord = require("discord.js"); 


module.exports = {
        komut: "avatar", 
        açıklama: "İstediğiniz kullanıcının profil fotoğrafının adresini verir.", 
        kategori: "eglence",
        alternatifler: ["ppbul", "pp", "avatarbul"], 
        kullanım: "", 

                
        args: [
          {
            anahtar: 'kullanıcı',
            soru: 'Kimin profil fotoğrafını istersiniz? ', 
            tip: 'kullanici' 
          }
        ]
    };

module.exports.baslat = (client, message, args) => {
    //eğer bir bot yollamış ise mesajı
if (message.author.bot === true) {
  return;
}

  
    var embed = new Discord.RichEmbed()
        .setColor("#9b59b6")
 .setAuthor(message.author.tag, message.author.avatarURL)
 .setFooter(client.ayarlar.footer, client.ayarlar.footerURL) 
        .setImage(args.kullanıcı.avatarURL)
        
  		message.channel.send({embed});   
};