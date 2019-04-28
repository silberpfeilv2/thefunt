    
const Discord = require('discord.js');

module.exports = {
        komut: "minecraft-avatar", 
        açıklama: "Kullanıcı adı ile minecraft avatarı bulmanızı sağlar.",
        kategori: "eglence", 
        alternatifler: ["mc-avatar"],
        kullanım: "", 
        yetki: '', 
                            
        args: [
          {
            anahtar: 'msg', 
            soru: '<:mc:571808180862976001> Minecraft kullanıcı adı nedir?',
            tip: 'yazi' 
           
            
          }
        ]
    };
                         
    module.exports.baslat = (client, message, args) => {
    const kadi = args.msg;
        let embed = new Discord.RichEmbed()
        .setTitle(`<:mc:571808180862976001> **${kadi}** adlı kullanıcının avatarı:`)
        .setImage(`https://cravatar.eu/avatar/${kadi}/100.png`)
        .setAuthor(message.author.tag, message.author.avatarURL)
        .setFooter(client.ayarlar.footer, client.ayarlar.footerURL)
        .setColor('#9b59b6');
		message.channel.send({embed: embed});

    };
             