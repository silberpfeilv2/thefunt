const Discord = require("discord.js"); 
const { createCanvas, loadImage } = require('canvas');
const snekfetch = require('snekfetch');


module.exports = {
        komut: "pixel", 
        açıklama: "İstediğiniz kullanıcının profil fotoğrafını pixelleştirir.", 
        kategori: "eglence",
        alternatifler: ["pixelize", "pixelleştir", "pix"], 
        kullanım: "", 

                
        args: [
          {
            anahtar: 'user',
            soru: 'Kimin profil fotoğrafını pixelleştirmek istersiniz? ', 
            tip: 'kullanici' 
          }
        ]
    };

module.exports.baslat = (client, message, args) => {
    //eğer bir bot yollamış ise mesajı
if (message.author.bot === true) {
  return;
}

  const user = args.user;
  const msg = message;
  
let avatarURL;
        if (user === 'member') avatarURL = msg.author.avatarURL;
        else avatarURL = user.avatarURL;
		try {
			
			const avatar = loadImage(user.avatarURL);
			const canvas = createCanvas(512, 512);
			const ctx = canvas.getContext('2d');
			ctx.imageSmoothingEnabled = false;
			ctx.drawImage(avatar, 0, 0, 512, 512);
			return msg.send({ files: [{ attachment: canvas.toBuffer(), name: 'pixel.png' }] });
		} catch (err) {
			return msg.reply(`Bir hata oluştu: \`${err.message}\`. Daha sonra tekrar dene!`);
		}
	
};