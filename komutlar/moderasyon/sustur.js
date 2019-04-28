        const Discord = require("discord.js"); 
    module.exports = {
        komut: "sustur", 
        açıklama: "İstediğiniz kişiyi susturur.",
        kategori: "moderasyon", 
        alternatifler: ['susturma', 'sunucuda sustur', 'muteat', 'mute'],
        kullanım: "", 
        yetki: 'KICK_MEMBERS', 
                            
        args: [
         {
					anahtar: 'member',
					soru: 'Kimi sunucuda susturmak istersin?',
					tip: 'kullanici'
				},
				{
					anahtar: 'sebep',
					soru: 'Neden bu kişiyi sunucuda susturmak istiyorsun?',
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
  .addField('Hata!', '`sustur` adlı komutu özel mesajlarda kullanamazsın.')
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
		if (!message.guild.members.get(args.member.id).kickable) return msg.channel.send(client.ayarlar.basarisiz + ' Bu kişiyi susturamıyorum çünkü `benden daha yüksek bir role sahip` ya da `bana gerekli yetkileri vermedin`.');
    	if (args.member.id === msg.author.id) return msg.channel.send(client.ayarlar.basarisiz + ' Kendini susturamazsın.')
		
      let pm = new Discord.RichEmbed()
       .setColor("#9b59b6")
     .setAuthor(message.author.tag, message.author.avatarURL)
     .setFooter(client.ayarlar.footer, client.ayarlar.footerURL)
      .setImage(args.member.avatarURL)
      .setTitle("Sunucuda Susturma")
      .setDescription("Siz" + " ("+args.member.tag+") "+message.author+" ("+message.author.tag+") tarafından " + args.sebep + " nedeniyle sunucuda susturuldunuz.")
      .addField("Sunucu", message.guild.name + " ("+message.guild.id+")", true)
      .setTimestamp(new Date());
      
		member.send({pm})
		msg.channel.overwritePermissions(args.member.id, {
			SEND_MESSAGES: false
		});

      let embed = new Discord.RichEmbed()
      .setColor("#9b59b6")
     .setAuthor(message.author.tag, message.author.avatarURL)
     .setFooter(client.ayarlar.footer, client.ayarlar.footerURL)
      .setImage(args.member.avatarURL)
      .setTitle("Sunucuda Susturma")
      .addField("Susturulan:", args.member + " ("+args.member.tag+")", true)
      .addField("Susturan:", msg.author + " ("+msg.author.tag+")", true)
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
                