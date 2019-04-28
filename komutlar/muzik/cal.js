
const Discord = require("discord.js");

module.exports = {
        komut: "oynat",
        açıklama: "Yazılan şarkıyı oynatır.",
        kategori: "muzik",
        alternatifler: ["çal", "play"],
        kullanım: "oynat [şarkı adı|şarkı URL'si]",

        args: [
            {
                anahtar: 'song',
                soru: 'Bir şarkı yaz da coşalım karşim!!',
                tip: 'yazi'
            }
        ]
};


module.exports.baslat = async (client, message, args) => {
    client.müzik.oynat(args.song)
};