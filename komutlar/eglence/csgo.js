const Discord = module.require('discord.js');
var request = require('request');
var cheerio = require('cheerio');
var SteamID = require("steamid");
var n = require('num-ber');
var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;


module.exports = {
    komut: "csgo", 
    açıklama: "CS:GO istatistiklerinizi görüntüler",
    kategori: "eglence", 
    alternatifler: ['csgo','CS:GO','cs'],
    kullanım: "/csgo",
    yetki: ''
};
 args: [
          {
            anahtar: 'kadı', 
            soru: 'Steam kullanıcı adınız nedir? (Steam **CustomURLID** veya **SteamID** giriniz!)',
            tip: 'yazi' 
           
            
          }
        ]

module.exports.baslat = (client, message,args) => {
  

//eğer bir bot yollamış ise mesajı
if (message.author.bot === true) {
    return;
  }

  //özel mesaj uyarı
  //eğer Özel mesajlarda kullanılmaya çalışılır ise hata yolla koçum :)
 //eğer Özel mesajlarda kullanılmaya çalışılır ise hata yolla koçum :)
if (!message.guild) {
  const ozelmesajuyari = new Discord.RichEmbed()
  .setColor("#9b59b6")//hata?
 .setAuthor(message.author.tag, message.author.avatarURL)
 .setFooter(client.ayarlar.footer, client.ayarlar.footerURL) 
  .addField('Hata!',' `csgo` adlı komutu özel mesajlarda kullanamazsın.')
  return message.author.send(ozelmesajuyari); }
  
  function getStatData(location, $) {

    var selector = $('.stats-stat .value').eq(location).text();

    var stat_array = $.parseHTML(selector);

    var stat = 0;

    if (stat_array == null || stat_array.lengh == 0) {
        return -1;

    } else {
        stat = stat_array[0].data;
    }

    return stat;
}

  
  
        var UR_L = "http://csgo.tracker.network/profile/" + args.kadı;

        if(!args.kadı){
          return message.channel.send("Please Enter a valid STEAMID64 or custom url");
        }

        request(UR_L, function(err, resp, body){

            $ = cheerio.load(body);

            var KD = getStatData(0, message, $);
            var WIN = getStatData(1, message, $);
            var HS = getStatData(4, message, $);
            var MONEY = getStatData(5, message, $);
            var SCORE = getStatData(6, message, $);
            var KILLS = getStatData(7, message, $);
            var DEATHS = getStatData(8, message, $);
            var MVP = getStatData(9, message, $);
            var BS = getStatData(13, message, $);
            var BD = getStatData(14, message, $);
            var HR = getStatData(15, message, $);

            var STAT = new Discord.RichEmbed()

            .setTitle("__***CSGO Stats***__")
            .setURL(UR_L)

            .addField("------------------------------------",
                      "Total KD: " + "__**" + KD + "**__" + "\n" +
                      "Total Win%: " + "__**" + WIN + "**__" + "\n" +
                      "Total MVPs: " + "__**" + MVP + "**__" + "\n" +
                      "Total Score: " + "__**" + SCORE + "**__" + "\n" +
                      "Total Kills: " + "__**" + KILLS + "**__" + "\n" +
                      "Total Deaths: " + "__**" + DEATHS + "**__" + "\n" +
                      "Total Bombs Set: " + "__**" + BS + "**__" + "\n" +
                      "Total Bombs Defused: " + "__**" + BD + "**__" + "\n" +
                      "Total Headshots: " + "__**" + HS + "**__" + "\n" +
                      "Total Money Earned: " + "__**" + MONEY + "**__" + "\n" +
                      "Total Hostages Rescued: " + "__**" + HR + "**__" + "\n" +
                      "------------------------------------\n", true)

              .setColor("0x#FF0000")
            message.channel.send(STAT);
        })
};

      