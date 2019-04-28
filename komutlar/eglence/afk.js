const Discord = require('discord.js');
    module.exports = {
        komut: "afk", //komut adı 
        açıklama: "Away From Keyboard moduna geçiş yaparsınız.", //komut açıklaması
        kategori: "eglence",
        alternatifler: ["afkol", "awayfromkeyboard"], 
        kullanım: "/afk İşim Çıktı", 
        
                            
        args: [
          {
            anahtar: 'neden', 
            soru: 'Neden klavyeden uzaklaşıyorsunuz?', 
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
  .addField('Hata!', '`afk` adlı komutu özel mesajlarda kullanamazsın.')
  return message.author.send(ozelmesajuyari); }


    const msg = message;
		const neden = args.neden;
		const vt = client.veritabanı.veri(message.author.id, 'afkStatus', []);
		const db = client.veritabanı.veri(message.author.id, 'afkBefore', []);
		const db1 = client.veritabanı.veri(message.author.id, 'afkGuild', []);
		if (vt !== true) {
			if (msg.member.nickname !== null) {
				client.veritabanı.ayarla(message.author.id, 'afkReason', neden);
				client.veritabanı.ayarla(message.author.id, 'afkBefore', msg.member.nickname);
				client.veritabanı.ayarla(message.author.id, 'afkStatus', true);
				client.veritabanı.ayarla(message.author.id, 'afkGuild', msg.guild.id);
				msg.member.setNickname('[AFK] ' + msg.member.nickname + '');
				return msg.channel.send(client.config.customEmojis.basarili + " Artık '" + neden + "' nedeni ile AFK'sınız");
			} else {
				client.veritabanı.ayarla(msg.author.id, 'afkReason', neden);
				client.veritabanı.ayarla(msg.author.id, 'afkBefore', msg.author.username);
				client.veritabanı.ayarla(msg.author.id, 'afkStatus', true);
				client.veritabanı.ayarla(msg.author.id, 'afkGuild', msg.guild.id);
				msg.member.setNickname('[AFK] ' + msg.author.username + '');
				return msg.channel.send(client.config.customEmojis.basarili + " Artık '" + neden + "' nedeni ile AFK'sınız");
			}
		} else {
			this.client.provider.set(msg.author.id, 'afkReason', "null");
			this.client.provider.set(msg.author.id, 'afkStatus', false);
			this.client.provider.set(msg.author.id, 'afkGuild', "null");
			msg.member.setNickname(db);
			return msg.reply('Tekrardan hoş geldiniz.');
		}
    
};