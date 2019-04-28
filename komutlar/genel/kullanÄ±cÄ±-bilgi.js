
        const Discord = require("discord.js"); 
    module.exports = {
        komut: "kullanıcı-bilgi", 
        açıklama: "İstediğiniz bir kişi hakkında bilgi verir.",
        kategori: "genel", 
        alternatifler: ['kullanıcı', 'kullanıcı bilgim', 'kbilgim'],
        kullanım: "", 
        yetki: '', 
                            
        args: [
          {
            anahtar: 'member', 
            soru: 'Kimin hakkında bilgi almak istersin?',
            tip: 'kullanici' 
           
            
          }
        ]
    };
                         
    module.exports.baslat = (client, message, args) => {
      if (message.author.bot === true) {
  return;
}
      
      
      //eğer Özel mesajlarda kullanılmaya çalışılır ise hata yolla koçum :)
if (!message.guild) {
  const ozelmesajuyari = new Discord.RichEmbed()
  .setColor("#9b59b6")//hata?
 .setAuthor(message.author.tag, message.author.avatarURL)
 .setFooter(client.ayarlar.footer, client.ayarlar.footerURL) 
  .addField('Hata!', '`kullanıcı-bilgi` adlı komutu özel mesajlarda kullanamazsın.')
  return message.author.send(ozelmesajuyari); }
      
      
      
      const msg = message;
      
      
      if (args.member === "") {
			const member = msg.member;
			const user = member.user;
			const statusOfAFK = client.veritabanı.veri(user.id, 'afkStatus', []);
			const guildOfAFK = client.veritabanı.veri(user.id, 'afkGuild', []);
			const reasonOfAFK = client.veritabanı.veri(user.id, 'afkReason', []);
			const Durum = user.presence.status;
			const Durm = (Durum == "online" ? (0x00AE86) : (Durum == "offline" ? (0x808080) : (Durum == "idle" ? (0xFFFF00) : (Durum == "dnd" ? (0xFF0000) : (0x00AE86)))))
			const durm = (Durum == "online" ? ("Çevrimiçi") : (Durum == "offline" ? ("Çevrimdışı") : (Durum == "idle" ? ("Boşta") : (Durum == "dnd" ? ("Rahatsız Etmeyin") : ("Bilinmiyor/bulunamadı.")))))
			
			if (statusOfAFK === true) {
				if (guildOfAFK === msg.guild.id) {
          
          
          
          let embed = new Discord.RichEmbed()
          .setColor("#9b59b6")
         .setAuthor(message.author.tag, message.author.avatarURL)
         .setFooter(client.ayarlar.footer, client.ayarlar.footerURL)
          .addField("❯ Ad ve ID", user.tag + ", "+user.id, false)
					.addField("❯ Kayıt Tarihi",user.createdAt, false)
					.addField("❯ Durumu", durm + ' - AFK', false)
					.addField("❯ AFK Nedeni", reasonOfAFK, false)
					.addField("❯ Şuanda Oynadığı Oyun", `${user.presence.game ? user.presence.game.name : 'Belirtilmemiş'}`, false)
          .addField("❯ Bot mu?", `${user.bot ? '\n Evet' : 'Hayır'}`)
					.addField("❯ Roller", `${member.roles.map(roles => `\`${roles.name}\``).join(' ')}`)
					.setThumbnail(user.avatarURL)
				
					return msg.channel.send({embed});
				}
			}
	
			let embed = new Discord.RichEmbed()
          .setColor("#9b59b6")
         .setAuthor(message.author.tag, message.author.avatarURL)
         .setFooter(client.ayarlar.footer, client.ayarlar.footerURL)
          .addField("❯ Ad ve ID", user.tag + ", "+user.id, false)
					.addField("❯ Kayıt Tarihi",user.createdAt, false)
					.addField("❯ Durumu", durm , false)
				
					.addField("❯ Şuanda Oynadığı Oyun", `${user.presence.game ? user.presence.game.name : 'Belirtilmemiş'}`, false)
          .addField("❯ Bot mu?", `${user.bot ? '\n Evet' : 'Hayır'}`)
					.addField("❯ Roller", `${member.roles.map(roles => `\`${roles.name}\``).join(' ')}`)
					.setThumbnail(user.avatarURL)
				
					return msg.channel.send({embed});
	
		}



		const member = args.member;
		const user = member;
      
     
		const statusOfAFK = client.veritabanı.veri(message.author.id, 'afkStatus', []);
		const guildOfAFK = client.veritabanı.veri(message.author.id, 'afkGuild', []);
		const reasonOfAFK = client.veritabanı.veri(message.author.id, 'afkReason', []);
		const Durum = args.member.presence.status; //sen sal bana/tamam
		const Durm = (Durum == "online" ? (0x00AE86) : (Durum == "offline" ? (0x808080) : (Durum == "idle" ? (0xFFFF00) : (Durum == "dnd" ? (0xFF0000) : (0x00AE86)))))
		const durm = (Durum == "online" ? ("Çevrimiçi") : (Durum == "offline" ? ("Çevrimdışı") : (Durum == "idle" ? ("Boşta") : (Durum == "dnd" ? ("Rahatsız Etmeyin") : ("Bilinmiyor/bulunamadı.")))))
		
		if (statusOfAFK === true) {
			if (guildOfAFK === msg.guild.id) {
				let embed = new Discord.RichEmbed()
          .setColor("#9b59b6")
         .setAuthor(message.author.tag, message.author.avatarURL)
         .setFooter(client.ayarlar.footer, client.ayarlar.footerURL)
          .addField("❯ Ad ve ID", user.tag + ", "+user.id, false)
					.addField("❯ Kayıt Tarihi",user.createdAt, false)
					.addField("❯ Durumu", durm + ' - AFK', false)
					.addField("❯ AFK Nedeni", reasonOfAFK, false)
					.addField("❯ Şuanda Oynadığı Oyun", `${user.presence.game ? user.presence.game.name : 'Belirtilmemiş'}`, false)
          .addField("❯ Bot mu?", `${user.bot ? '\n Evet' : 'Hayır'}`)
					.addField("❯ Roller", `${member.roles.map(roles => `\`${roles.name}\``).join(' ')}`)
					.setThumbnail(user.avatarURL)
				
					return msg.channel.send({embed});
			}
		}

		let embed = new Discord.RichEmbed()
          .setColor("#9b59b6")
         .setAuthor(message.author.tag, message.author.avatarURL)
         .setFooter(client.ayarlar.footer, client.ayarlar.footerURL)
          .addField("❯ Ad ve ID", args.member.tag + ", "+user.id, false)
					.addField("❯ Kayıt Tarihi",user.createdAt, false)
					.addField("❯ Durumu", durm , false)
				
					.addField("❯ Şuanda Oynadığı Oyun", `${user.presence.game ? user.presence.game.name : 'Belirtilmemiş'}`, false)
          .addField("❯ Bot mu?", `${user.bot ? '\n Evet' : 'Hayır'}`)
					.addField("❯ Roller", `${message.guild.members.get(member.id).roles.map(roles => `\`${roles.name}\``).join(' ')}`)
					.setThumbnail(user.avatarURL)
				
					return msg.channel.send({embed});
	
      
      
      
      
    };
           