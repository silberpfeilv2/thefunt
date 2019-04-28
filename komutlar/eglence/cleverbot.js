
const commando  = require('discord.js-commando');
const Discord = require('discord.js');
const Cleverbot = require('cleverbot-node');
const clbot     = new Cleverbot;  

module.exports = {
        komut: "sor", 
        açıklama: "Yapayzeka ile konuşmanızı sağlar.",
        kategori: "eglence", 
        alternatifler: ['ask', 'botla konuş', 'konuş', 'cleverbot'],
        kullanım: "", 
        yetki: '', 
                            
        args: [
          {
            anahtar: 'msg', 
            soru: '🗨 Evet, dinliyorum?',
            tip: 'yazi' 
           
            
          }
        ]
    };
                         
    module.exports.baslat = (client, message, args) => {
      const attachment = new Discord.Attachment('https://media.giphy.com/media/uZvpSc5LVa3hS/giphy.gif');
        message.channel.send(attachment)
          .then(msg => {
          msg.delete(2000)
        });
       
      
      setTimeout(() => {
      const soru = args.msg;
      const msg = message;
        if (soru === "yapimcin kim" || soru === "yapimcin kim?" || soru === "yapımcın kim" || soru === "yapımcın kim?") {
            msg.channel.startTyping();
              setTimeout(() => {
                   msg.channel.send(new Discord.RichEmbed()
                      .setAuthor("🗨 Yapay Zeka", client.user.avatarURL)
                      .setDescription('Yapımcım: TheFunt')
                      .setColor('RANDOM'));
                   msg.channel.stopTyping();
              }, Math.random() * (1 - 3) + 1 * 1000);
              return;
        }
  		return msg.channel.send(client.ayarlar.basarisiz + ' Komut kısa süreliğine devre dışıdır.');
  		Cleverbot.prepare(() => {
  		  clbot.write(soru, (response) => {
  			msg.channel.startTyping();
  			setTimeout(() => {
  			  msg.channel.send(new Discord.RichEmbed()
                      .setAuthor("🗨 Yapay Zeka", client.user.avatarURL)
                      .setDescription(response)
                      .setColor('RANDOM')).catch(console.error);
  			  msg.channel.stopTyping();
  			}, Math.random() * (1 - 3) + 1 * 1000);
  		  });
  		});
      
      
      
      
    }, 2000);
    };
             