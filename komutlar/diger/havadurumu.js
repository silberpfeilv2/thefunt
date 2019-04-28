const Discord = require('discord.js');
    module.exports = {
        komut: "havadurumu", //komut adı 
        açıklama: "Şehrinizdeki havadurumunu görüntüleyebilirsiniz.", //komut açıklaması
        kategori: "diger",
        alternatifler: ["havadurumu","hava"], 
        kullanım: "/havadurumu <şehir>", 
                            
        args: [     
          {
            anahtar: 'şehir', 
            soru: 'Hangi şehrin havadurumunu görüntülemek istersiniz?', 
            tip: 'yazi' 
          },  
        ]
    };
module.exports.baslat = (client,message,args) => {
  
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
  .addField('Hata!', '`havadurumu` adlı komutu özel mesajlarda kullanamazsın.')
  return message.author.send(ozelmesajuyari); }
  
const api = 'http://api.openweathermap.org/data/2.5/weather?q=' + args.şehir + '&appid=9085d68629e6d57983a2c93a8fa2cd66';
var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
  
  try {
  
    function Get(yourUrl){ 
      var Httpreq = new XMLHttpRequest(); //yagag
      Httpreq.open("GET",yourUrl,false);
      Httpreq.send(null);
      return Httpreq.responseText; 
    }
    
    var json = JSON.parse(Get(api));
    var coord = json.coord;
    var weather = json.weather[0];
    var main = json.main;
    var wind = json.wind;
    var clouds = json.clouds;
    var sys = json.sys;

    function windDirection(degree)
    {
        if (degree < 11 || degree > 348) 
        {
            return "Kuzey";
        }
        else if (degree > 11 && degree < 33)
        {
            return "Kuzey-Kuzeydoğu";
        }
        else if (degree > 33 && degree < 56)
        {
            return "Kuzeydoğu";
        }
        else if (degree > 56 && degree < 78)
        {
            return "Doğu-Kuzeydoğu";
        }
        else if (degree > 78 && degree < 101)
        {
            return "Doğu";
        }
        else if (degree > 101 && degree < 123)
        {
            return "Doğu-Güneydoğu";
        }
        else if (degree > 123 && degree < 146)
        {
            return "Güneydoğu";
        }
        else if (degree > 146 && degree < 168)
        {
            return "Güney-Güneydoğu";
        }
        else if (degree > 168 && degree < 191)
        {
            return "Güney";
        }
        else if (degree > 191 && degree < 213)
        {
            return "Güney-Güneybatı";
        }
        else if (degree > 213 && degree < 236)
        {
            return "Güneybatı";
        }
        else if (degree > 236 && degree < 258)
        {
            return "Batı-Güneybatı";
        }
        else if (degree > 258 && degree < 281)
        {
            return "Batı";
        }
        else if (degree > 281 && degree < 303)
        {
            return "Batı-Kuzeybatı";
        }
        else if (degree > 303 && degree < 326)
        {
            return "Kuzeybatı";
        }
        else if (degree > 326 && degree < 348)
        {
            return "Kuzey-Kuzeybatı";
        }
        else
        {
            return "N/A";
        }
    }

 function UnixToDate(unix)
{
var d = new Date(unix*1000).getHours();
var d1 = new Date(unix*1000).getMinutes();
var text = d + ':' + d1
return text;
}
        var cc = main.temp;
        var hc = main.temp_max;
        var lc = main.temp_min;
        var currentcelsius = cc - 273.15;
        var currentf1 = currentcelsius * 1.8;
        var currentfahrenheit = currentf1 + 32;
        var ccelsius = Math.round(currentcelsius);
        var cfahrenheit = Math.round(currentfahrenheit);
    
        var highcelsius = hc - 273.15;
        var highf1 = highcelsius * 1.8;
        var highfahrenheit = highf1 + 32;
        var hcelsius = Math.round(highcelsius);
        var hfahrenheit = Math.round(highfahrenheit);
    
        var lowcelsius = lc - 273.15;
        var lowf1 = lowcelsius * 1.8;
        var lowfahrenheit = lowf1 + 32; 
        var lcelsius = Math.round(lowcelsius);
        var lfahrenheit = Math.round(lowfahrenheit);


		const embed = new Discord.RichEmbed()
    .setTitle(json.name + ','   + sys.country +   ' için hava durumu gösteriliyor')
    .setThumbnail('http://openweathermap.org/img/w/' + weather.icon + '.png')
    .setColor("#9b59b6")
    .setAuthor(message.author.tag, message.author.avatarURL)
    .setFooter(client.ayarlar.footer, client.ayarlar.footerURL)     .addField('Koordinatları', 'Enlem: **' + coord.lat + '**\nBoylam: **' + coord.lon + '**', true)
    .addField('Şehrin IDsi', '**' + json.id + '**', true)
    .addField('Rüzgar', 'Yönü: **' + windDirection(wind.deg) + '**\nHızı: **' + wind.speed + 'm/s**', true)
    .addField('Bulut Oranı', '**%' + clouds.all + '**', true)
    .addField('Hava Koşulları', 'Mevcut Sıcaklık: **' + ccelsius + ' °C / ' + cfahrenheit + ' °F**\nEn Yüksek Sıcaklık: **' + hcelsius + ' °C / ' + hfahrenheit + ' °F**\nEn Düşük Sıcaklık: **' + lcelsius + ' °C / ' + lfahrenheit + ' °F**\nNem: **%' + main.humidity + '**\nBarometrik Basınç: **' + main.pressure + '**', true)    
    //.addField('Güneş', 'Gündoğumu: **' + UnixToDate(sys.sunrise)[1] + '**\nGünbatımı: **' + UnixToDate(sys.sunset)[1] + '**', inline=true)
    .addField('Güneş','Gündoğumu: **' + UnixToDate(sys.sunrise) + '**\nGünbatımı: **' + UnixToDate(sys.sunset) + '**',true)    
    return message.channel.send(embed); 
} catch (e) {
    const error = new Discord.RichEmbed()
    .setColor("RED")
    .setAuthor(message.author.tag, message.author.avatarURL)
    .setFooter(client.ayarlar.footer, client.ayarlar.footerURL) 
    .setDescription(' <a:hata:503562520171380766> | Bir hata ile karşılaştık : \n`' + e.message + '`')
    return message.channel.send(error);
}
}
