const request = require('snekfetch');
const fs = require('fs');
const Discord = require('discord.js');


module.exports = {
        komut: "minecraft-başarım", 
        açıklama: "Minecraft başarım resmi yapmanızı sağlar",
        kategori: "eglence", 
        alternatifler: ["mcbaşarım", "mc-başarım", "achievement"],
        kullanım: "", 
        yetki: '', 
                            
        args: [
          {
            anahtar: 'icon', 
            soru: 'Ikon ne olsun? (1-39) 20 - Taş, 1 - Çim, 21 - Kalas, 13 - Çalışma Masası, 18 - Fırın, 17 - Sandık , 9 - Yatak, 31 - Kömür , 22 - Demir, 23 - Altın, 2 - Elmas, 11 - Tabela, 19 - Kitap, 24 - Ahşap Kapı, 25 - Demir Kapı, 14 - Kızıltaş , 12 - Demiyolu, 33 - Yay, 34 - Ok, 32 - Demir Kılıç, 3 - Elmas Kılıç , 35 - Demir Göğüslük, 26 - Elmas Göğüslük, 6 - TNT, 27 - Çakmak, 15 - Ateş, 36 -  Kova, 37 - Su Kovası, 38 - Lav Kovası, 7 - Kurabiye, 10 - Kek, 39 - Süt Kovası, 4 - Creeper, 5 - Domuz, 30 - Doğurma Zindanı, 8 - Kalp, 16 - Ağ, 28 - İksir, 29 - Atmalık İksir',
            tip: 'sayi' 
           
            
          },
          {
            anahtar: 'text', 
            soru: 'Başarım mesajı ne olsun?',
            tip: 'yazi' 
           
            
          },
          {
             anahtar: 'text1', 
            soru: 'Başarım ne olsun?',
            tip: 'yazi' 
          }
          
        ]
    };
                         
    module.exports.baslat = (client, message, args) => {
        if (args.text > 39){
						message.channel.send ('Maksimum değer 39 olabilir.');
    }
      if (args.text.length > 25){
						message.channel.send ('25 karakterden daha fazla kabul edilmez.');
    }
      if (args.text1.length > 25){
						message.channel.send('25 karakterden daha fazla kabul edilmez.');
      }
      
      const { text } = args;
        
        const text1 = text
                .replace(/ö/g, 'o')
                .replace(/ç/g, 'c')
                .replace(/ş/g, 's')
                .replace(/ı/g, 'i')
                .replace(/ğ/g, 'g')
                .replace(/ü/g, 'u')
                .replace(/Ö/g, 'O')
                .replace(/Ç/g, 'C')
                .replace(/Ş/g, 'S')
                .replace(/İ/g, 'I')
                .replace(/Ğ/g, 'G')
                .replace(/Ü/g, 'U');

        try {

          
          

		
			
            
          
          let embed = new Discord.RichEmbed()
          .setColor("#9b59b6")
      .setAuthor(message.author.tag, message.author.avatarURL)
      .setFooter(client.ayarlar.footer, client.ayarlar.footerURL)
      .setImage('https://www.minecraftskinstealer.com/achievement/a.php?i='+args.icon+'&h='+args.text+'&t='+text1);
         message.channel.send({embed: embed})
		} catch (err) {
			return message.channel.send(`Opss bir hata var galiba! \`${err.message}\`. Lütfen daha sonra tekrar dene!`);
		}
          
          
          
    
      
      
    };