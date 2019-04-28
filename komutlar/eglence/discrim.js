const Discord = require("discord.js"); 


module.exports = {
        komut: "discrim", 
        açıklama: "Yazdığınız Discrim'e sahip kullanıcıları aratır.", 
        kategori: "eglence",
        alternatifler: ["discriminator", "search-discriminator", "tag"], 
        kullanım: "", 

                
        args: [
          {
            anahtar: 'discrim',
            soru: 'Bir discrim yazınız. (Yalnızca sayı) ', 
            tip: 'sayi' 
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
 
  .addField('Hata!', '`discrim` adlı komutu özel mesajlarda kullanamazsın.')
  return message.author.send(ozelmesajuyari); }
  
  	const discrim = args.discrim || message.author.discriminator;
        const users = client.users.filter(user => user.discriminator === discrim).map(user => user.tag);
        if (users < 1) {
            let embed = {
                color: 3447003,
                description: `${discrim} bulunamadı!`,
              };
            return message.channel.send({embed});
        } else {
            let embed = {
                color: 3447003,
                description: `${users.join('\n ')}`,
              };
            return message.channel.send({embed});
        }
  
};