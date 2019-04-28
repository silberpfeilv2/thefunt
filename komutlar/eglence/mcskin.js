const Discord = require("discord.js"); 

module.exports = {
        komut: "minecraft-skin", 
        açıklama: "Kullanıcı adı ile minecraft skini bulmanızı sağlar.",
        kategori: "eglence", 
        alternatifler: ["mc-skin", "mcskin", "skinbul", "skin"],
        kullanım: "", 
        yetki: '', 
                            
        args: [
          {
            anahtar: 'msg', 
            soru: 'Skinini edinmek istediğiniz Minecraft kullanıcı adı nedir?',
            tip: 'yazi' 
           
            
          }
        ]
    };
                         
    module.exports.baslat = (client, message, args) => {
         const kadi = args.msg;
        var embed = new Discord.RichEmbed()
      .setColor("#9b59b6")
      .setAuthor(message.author.tag, message.author.avatarURL)
      .setFooter(client.ayarlar.footer, client.ayarlar.footerURL)
        .setTitle(`**${kadi}** adlı kullanıcının skini:`)
        .setImage(`https://minotar.net/armor/body/${kadi}/300.png`)
    
		return message.channel.send({embed});

    };
                