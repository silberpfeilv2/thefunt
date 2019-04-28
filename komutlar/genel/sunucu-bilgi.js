    
const stripIndents = require('common-tags').stripIndents;

const filterLevels = ['Yok', 'Rolü olmayanlar için', 'Herkes için'];
const verificationLevels = ['Yok', 'Düşük', 'Orta', '(╯°□°）╯︵ ┻━┻', '(╯°□°）╯︵ ┻━┻', '┻━┻ ﾐヽ(ಠ益ಠ)ノ彡┻━┻'];
        const Discord = require("discord.js");




    module.exports = {
        komut: "sunucu-bilgi", 
        açıklama: 'Bulunduğunuz sunucu hakkında bilgi verir.',
        kategori: "genel", 
        alternatifler: ['sunucu', 'sunucu bilgim', 'sbilgim', 'sb'],
        kullanım: "", 
        yetki: '', 
                          
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
      
      var embed = new Discord.RichEmbed()
      .setColor("#9b59b6")
     .setAuthor(message.author.tag, message.author.avatarURL)
     .setFooter(client.ayarlar.footer, client.ayarlar.footerURL)
      .setThumbnail(msg.guild.iconURL)
      .addField('❯ Ad ve ID', msg.guild.name + ', '+ msg.guild.id, false)
			.addField('❯ Oluşturulma Tarihi', msg.guild.createdAt, false)
			.addField('❯ Toplam Kanal Sayısı', `Toplam: ${msg.guild.channels.size} | Yazı: ${msg.guild.channels.filter(c => c.type === "text").size} | Sesli: ${msg.guild.channels.filter(c => c.type === "voice").size}`, false)
			.addField('❯ Toplam Üye Sayısı', msg.guild.memberCount,false)
			.addField('❯ Bot Sayısı', msg.guild.members.filter(m => m.user.bot).size,false)
			.addField('❯ Premium Ayrıcalıkları?', client.veritabanı.varMı(msg.guild.id+'.premium') ? "Evet" : "Hayır" ,false)
			.addField('❯ Sakıncalı içerik filtresi', filterLevels[msg.guild.explicitContentFilter],false)
      .addField('❯ Doğrulama Seviyesi', verificationLevels[msg.guild.verificationLevel],false)
			.addField('❯ Rol Sayısı', msg.guild.roles.size,false)
			.addField('❯ Rol Listesi', message.guild.roles.map(roles => `\`${roles.name}\``).join(' '))
      .addField('❯ Bölge', msg.guild.region,false)
      .addField('❯ Sahip', msg.guild.owner.user.tag+', ('+msg.guild.owner.user.id+')',false)
		
		msg.channel.send({embed});
      
      
    };
           