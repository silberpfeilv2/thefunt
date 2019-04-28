const Discord = require("discord.js");  

module.exports = {
        komut: "mcistatistik", 
        açıklama: 'Sunucu IP adresi ile sunucunun durumunu görmenizi sağlar.',
        kategori: "eglence", 
        alternatifler: ['minecraftping', 'mcping', 'mcserverstatus', 'mss', 'mcserver', 'mci'],
        kullanım: "", 
        yetki: '', 
                            
        args: [
          {
            anahtar: 'msg', 
            soru: "<:mc:571808180862976001> Minecraft Sunucu IP'si nedir?",
            tip: 'yazi' 
           
            
          },
          {
            anahtar: 'msg2', 
            soru: '<:mc:571808180862976001> Sunucunun özel bir portu var mıdır? (Yoksa veya bilmiyorsanız 0 yazın.)',
            tip: 'yazi' 
           
            
          }
        ]
    };
                         
    module.exports.baslat = (client, message, args) => {
      const ip = args.msg;
		const port = args.msg2;
		
		const request = require('superagent');
		request
		  .get("mcapi.us/server/status")
		  .query({ip}, {port})
		  .then(res=>{
			if (res.body.status === "error") {
				message.channel.send(client.ayarlar.basarisiz + ' Sunucudan hiç bir bilgi alamadım. Hata: ', res.body.error)
      }
        
        
        let embed = new Discord.RichEmbed()
       .setColor("#9b59b6")
      .setAuthor(message.author.tag, message.author.avatarURL)
      .setFooter(client.ayarlar.footer, client.ayarlar.footerURL)
      .setDescription(ip+":"+port+" adresli sunucunun istatistikleri:")
      .addField("❯ Sunucu durumu", res.body.online ? 'Açık' : 'Kapalı' || "Bilgi alınamadı!", false)
      .addField("❯ Sunucu versiyonu", res.body.server.name.replace(/§./g,"") || "Bilgi alınamadı!", false)
      .addField("❯ Aktif oyuncular", `${res.body.players.now}/${res.body.players.max}` || "Bilgi alınamadı!", false)
      .addField("❯ Açıklama", res.body.motd.replace(/§./g,"") || "Bilgi alınamadı!", false)
      .setImage('https://eu.mc-api.net/v3/server/favicon/'+ip);
			
			

				

			  message.channel.send({embed: embed})
		
        
    
      

            });
};