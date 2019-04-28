const Discord = require('discord.js');
    module.exports = {
        komut: "çeviri", //komut adı 
        açıklama: "Google açmadan discord üzerinden çeviri yapabilirsiniz.", //komut açıklaması
        kategori: "diger",
        alternatifler: ["çeviri","çevir","translate"], 
        kullanım: "/çeviri", 
                            
        args: [
          {
            anahtar: 'csözcük', 
            soru: 'Lütfen çevirmek istediğiniz kelimeyi giriniz.', 
            tip: 'yazi' 
            
          },
          {
            anahtar: 'metindili', 
            soru: 'Hangi dilden çeviri yapmak istediğinizi giriniz. Yani çevirmek istediğiniz sözcük hangi dile ait? (örn: eng,tr,fr)', 
            tip: 'yazi' 
          },
          {
           anahtar: 'hangidile',
           soru: 'Çevireceğiniz sözcüğü hangi dile çevirmek istiyorsunuz (örn: tr)',
           tip: 'yazi'
          }
          
        ]
    };

module.exports.baslat = (client,message,args) => {
   
//eğer bir bot yollamış ise mesajı
if (message.author.bot === true) {
  return;
}

//özel mesaj uyarı
    if (!message.guild) {
  const ozelmesajuyari = new Discord.RichEmbed()
  .setColor("#9b59b6")
 .setAuthor(message.author.tag, message.author.avatarURL)
 .setFooter(client.ayarlar.footer, client.ayarlar.footerURL) 
  .addField('Hata!', '`çeviri` adlı komutu özel mesajlarda kullanamazsın.')
  return message.author.send(ozelmesajuyari); }
  
  var cevir = require('node-google-translate-skidz');
  
  /*bazı kısayol tanımlamaları olmadı
if(args.metindili === "ingilizce") {
  var argss = args.metindili === "eng";
}
if(args.metindili === "türkçe") {
    args.metindili === "tr";
}
if(args.metindili === "fransızca" ){
    args.metindili === "fr";
}
if(args.metindili === "çince") {
    args.metindili === "cn";
}
if(args.metindili === "almanca") {
    args.metindili ==="de";
}
if(args.metindili === "italyanca") {
    args.metindili ==="it";
}
if(args.metindili === "japonca") {
    args.metindili === "jp";
}

 //bazı kısayol tanımlamaları2
 if(args.hangidile === "ingilizce") {
    args.hangidile === "eng";
}
if(args.hangidile === "türkçe") {
    args.hangidile === "tr";
}
if(args.hangidile === "fransızca" ){
    args.hangidile === "fr";
}
if(args.hangidile === "çince") {
    args.hangidile === "cn";
}
if(args.hangidile === "almanca") {
    args.hangidile ==="de";
}
if(args.hangidile === "italyanca") {
    args.hangidile ==="it";
}
if(args.hangidile === "japonca") {
    args.hangidile === "jp";
} */



  cevir({
                text: args.csözcük,
                source: args.metindili,
                target: args.hangidile
            }, function(result) {
                var dl = result.translation
                const embed = new Discord.RichEmbed()
                .setColor("#9b59b6")
                .setAuthor(message.author.tag, message.author.avatarURL)
                .setFooter(client.ayarlar.footer, client.ayarlar.footerURL) 
                .setTitle(`${args.metindili} dilinden ${args.hangidile} diline çevrildi!`)
                .addField("»Çevrilmek İstenen Metin:", args.csözcük)
                .addField("»Çevrilen Metin:", dl)
                .setFooter(`Çeviren Kullanıcı: ${message.author.tag}`, message.author.avatarURL)
                 message.channel.send({embed})
                    .catch(error => message.channel.send(`Bir Hata Oluştu! \n »Lütfen bot sahiplerine bildiriniz: https://discord.gg/Yd2Z8eU \n**Hata:** \n${error}`))
            });
  
}