const { get } = require("snekfetch"); 
const Discord = require('discord.js');

module.exports = {
        komut: "köpek", //komut adı 
        açıklama: "Rastgele bir 🐶 resmi gönderir", //komut açıklaması
        kategori: "eglence", //ilk örnekteki kategori oluşturma kısmına göre buraya tam olarak ne yazabileceğinizi anlayacaksınız. (komut kategorisi)
        alternatifler: ['random-dog', 'kopekpng', 'köpekjpg', '🐶'], //komutun asıl adı dışında kullanılabileceği alternatifler. Örneğin; (komut adını x olarak düşünürsek) alternatifler: ["y", "z"], olabilir mesela.
        kullanım: "", //komutun doğru kullanımı
        
     
    };
                     
    module.exports.baslat = (client, message) => {
  //eğer bir bot yollamış ise mesajı
if (message.author.bot === true) {
  return;
}



      
  try {
    get('https://random.dog/woof.json').then(res => {
    
			
      
              let embed = new Discord.RichEmbed()
            .setColor("#9b59b6")
            .setAuthor(message.author.tag, message.author.avatarURL)
            
            .setFooter(client.ayarlar.footer, client.ayarlar.footerURL)
            .setImage(res.body.url);
                  return message.channel.send({embed});
    })
      } catch (err) {
			return message.channel.send(`${client.ayarlar.basarisiz} Opss bir hata var galiba! \`${err.message}\`. Lütfen daha sonra tekrar dene!`);
		}
  };
              