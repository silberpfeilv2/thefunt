                const Discord = require("discord.js"); 
const { stripIndents } = require('common-tags');
    module.exports = {
        komut: "yenilikler",
        açıklama: "Bot ile ilgili yeni özellikleri gösterir.", 
        kategori: "genel", 
        alternatifler: [], 
        kullanım: "", 
        yetki: '', 
        
    };
                     
    module.exports.baslat = (client, message) => {
        
      
      var msg = message;
      
      
      
                                                  
       var embed = new Discord.RichEmbed()
			.setTitle('Yenilikler')
			.setDescription(stripIndents`
			**Sürüm 1.0.0**
			+ Bot aktif edildi.
			+ 40 adet yeni komut eklendi.
			+ Açılış düzenleniyor.


              Devam Eden Çalışmalarımız
			+ Sitemiz **https://thefunt.net** tekrardan aktif hale gelecek.
			**Komutları görmek için \`/yardım\`**
			`)
			.setColor("#9b59b6")
 .setAuthor(message.author.tag, message.author.avatarURL)
 .setFooter(client.ayarlar.footer, client.ayarlar.footerURL)
			
	

		msg.channel.send({embed});


    };
                