        const Discord = require("discord.js"); 
    module.exports = {
        komut: 'mod-log-ayarla',
        açıklama: 'Mod-log kanalını değiştirmenizi sağlar.',
        kategori: "ayarlar", 
        alternatifler: ['modlogayarla', 'modlog', 'mod-log'],
        kullanım: "", 
        yetki: 'ADMINISTRATOR', 
                            
        args: [
          {
            anahtar: 'channel', 
            soru: 'mod-log kanalı hangi kanal olsun? (#kanalismi şeklinde yazınız)\n',
            tip: 'kanal' 
           
            
          }
        ]
    };
                         
    module.exports.baslat = (client, message, args) => {
      
      
     const msg = message;
       var ch = args.channel;
		if (ch.type == 'voice') return msg.reply('Sesli kanallar seçilemez!');
			
      const vt = client.veritabanı.veri(msg.guild.id+'modLog')
      const db = client.veritabanı.veri(msg.guild.id+'modLogK')
      const who = client.veritabanı.veri(msg.guild.id+'modLogW')
			
			if (vt === args.channel.id) {
				
        
				msg.channel.send(`${client.ayarlar.basarisiz} Mod-log kanalı `+client.users.get(who)+` (`+client.users.get(who).tag+`) tarafından zaten **${args.channel.name}** olarak ayarlanmış..`);
			} else {
        
		
        client.veritabanı.ayarla(msg.guild.id+'modLog', args.channel.id)
        client.veritabanı.ayarla(msg.guild.id+'modLogW', message.author.id)
				client.veritabanı.ayarla(msg.guild.id+'modLogK', 'true')
				return msg.channel.send(`${client.ayarlar.basarili} Mod-log olarak ayarlanan kanal: **${args.channel.name}**`);
			}
    };
                