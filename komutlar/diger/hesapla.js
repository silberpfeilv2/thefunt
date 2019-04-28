const Discord = require('discord.js');
const math = require('math-expression-evaluator')
 
module.exports = {
 komut: "hesapla", //komut adı 
 açıklama: "Matematik işlemlerinizi kolayca yapabilirsiniz.", //komut açıklaması
 kategori: "diger",
 alternatifler: ["hesapla"], 
 kullanım: "/hesapla <işlem>",  
args: [
  {
      anahtar: 'islem', 
      soru: 'Bir matematik işlemi belirtin. (örn: 100/10)', 
      tip: 'yazi' //yoksa * / fln olmaz
  }
]
}

module.exports.baslat = (client,message,args) => {
    
//eğer bir bot yollamış ise mesajı
if (message.author.bot === true) {
  return;
}
  
  let cevap;
        try {
            cevap = math.eval(args.islem)
        } catch(err) {
            message.channel.send('Hatalı işlem: \n **' + err+'**')
        }

        const embed = new Discord.RichEmbed()
		    .setColor("#9b59b6")
 .setAuthor(message.author.tag, message.author.avatarURL)
 .setFooter(client.ayarlar.footer, client.ayarlar.footerURL) 
        .addField('İşlem', args.islem)
        .addField('Cevap', cevap)

        message.channel.send(embed)
    }
