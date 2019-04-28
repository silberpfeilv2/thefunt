        const Discord = require("discord.js"); 
    module.exports = {
        komut: "ban", 
        açıklama: "İstediğiniz kişiyi sunucudan yasaklar.",
        kategori: "moderasyon", 
        alternatifler: ['yasakla', 'sunucudan yasakla', 'banla', 'banhammer'],
        kullanım: "", 
        yetki: 'BAN_MEMBERS', 
                            
        args: [
         {
					anahtar: 'member',
					soru: 'Kimi sunucudan yasaklamak istersin?',
					tip: 'kullanici'
				},
				{
					anahtar: 'sebep',
					soru: 'Neden bu kişiyi sunucudan yasaklamak istiyorsun?',
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
  .setColor("#9b59b6")//hata?
 .setAuthor(message.author.tag, message.author.avatarURL)
 .setFooter(client.ayarlar.footer, client.ayarlar.footerURL) 
  .addField('Hata!', '`yasakla` adlı komutu özel mesajlarda kullanamazsın.')
  return message.author.send(ozelmesajuyari); }
        
      let msg = message;
      
      
      
      let guild = msg.guild;
		const member = args.member;
		const user = member.user;
		const reason = args.sebep;
      const vt = client.veritabanı.veri(msg.guild.id+'modLog')
      const db = client.veritabanı.veri(msg.guild.id+'modLogK')
      
			
		if (db ==! "true") msg.channel.send(client.ayarlar.uyari + ' Lütfen `mod-log-ayarla` komutu ile mod-log kanalı belirleyiniz. Şimdilik komut geçerli fakat lütfen yakın zamanda belirleyiniz.');
		let modlog = vt;
		if (!message.guild.channels.get(modlog)) msg.channel.send(client.ayarlar.uyari + ' Mod-log olarak belirlediğiniz kanal silinmiş, lütfen yeni  bir mod-log kanalı açıp `mod-log-ayarla` komutu ile mod-log olarak ayarlayınız. Şimdilik es geçiliyor.');
if (message.guild.members.get(args.member.id).highestRole.calculatedPosition > message.guild.members.get(msg.author.id).highestRole.calculatedPosition - 1) {
//if(message.author.highestRole.comparePositionTo(args.member.highestRole) > 0){
			return msg.channel.send(client.ayarlar.basarisiz + ' Bu kişinin senin rollerinden/rolünden daha yüksek rolleri/rolü var.');
		}
		if (!message.guild.members.get(args.member.id).bannable) return msg.channel.send(client.ayarlar.basarisiz + ' Bu kişiyi sunucudan yasaklayamıyorum çünkü `benden daha yüksek bir role sahip` ya da `bana gerekli yetkileri vermedin`.');
    	if (args.member.id === msg.author.id) return msg.channel.send(client.ayarlar.basarisiz + ' Kendini banlayamazsın.')
		
      let pm = new Discord.RichEmbed()
       .setColor("#9b59b6")
     .setAuthor(message.author.tag, message.author.avatarURL)
     .setFooter(client.ayarlar.footer, client.ayarlar.footerURL)
      .setImage(args.member.avatarURL)
      .setTitle("Sunucudan Yasaklama")
      .addField("Sunucu", message.guild.name + " ("+message.guild.id+")", true)
      .setDescription("Siz" + " ("+args.member.tag+") "+message.author+" ("+message.author.tag+") tarafından " + args.sebep + " nedeniyle yasaklandınız. Bir yanlışlık olduğunu düşünüyorsanız belirtilen kullanıcıya ulaşın.")
      .setTimestamp(new Date());
      
		member.send({pm})
		msg.guild.ban(args.member, 2, message.author.tag+">TheFunt");

      let embed = new Discord.RichEmbed()
      .setColor("#9b59b6")
     .setAuthor(message.author.tag, message.author.avatarURL)
     .setFooter(client.ayarlar.footer, client.ayarlar.footerURL)
      .setImage(args.member.avatarURL)
      .setTitle("Sunucudan Yasaklama")
      .addField("Yasaklanan:", args.member + " ("+args.member+")", true)
      .addField("Yasaklayan:", msg.author + " ("+msg.author.tag+")", true)
      .addField("Sebep:", args.sebep + " (Komut İle - 001)", true)
      .setTimestamp(new Date());
      
	
			
      if (db ==! "true"){
		guild.channels.get(modlog).send({embed});
      msg.channel.send({embed});
        msg.channel.send(client.ayarlar.basarili + ' İşlem başarılı!');
      }else{
        msg.channel.send({embed});
        msg.channel.send(client.ayarlar.basarili + ' İşlem başarılı!');
      }
    
      
      
    };
                