var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
var Discord = require("discord.js");
const discord = require('discord.js');
module.exports = {
    komut: "lol", 
    açıklama: "lol istatistiklerinizi görüntüler",
    kategori: "eglence", 
    alternatifler: ['clol'],
    kullanım: "/lol <k.adı>",
    yetki: ''
}

module.exports.baslat = (client,message,args) => {

    const key = 'RGAPI-74af35da-4248-4da6-9dc4-81edc71bb357';
    const lolVersion = '8.5.1';
    //region errorEmbed
    var errorEmbed = new discord.RichEmbed()
    .setColor('RED')
    .setTitle('Hata!')
    .setDescription('<a:hata:503562520171380766> | Lütfen bir bölge ve bir isim giriniz!\nKullanımı: **/lol [Bölge] [İsim]**\nBölge listesi için: **/lol**');
	var errorEmbed3 = new discord.RichEmbed()
    .setColor('RED')
    .setTitle('Hata!')
    .setDescription('<a:hata:503562520171380766> | Lütfen bir bölge ve bir isim giriniz!\nKullanımı: **/lol [Bölge] [İsim]**\nBölge listesi için: **/lol**');
    //endregion
    let mesaj = args.slice(0).join(' ');
    if (mesaj.length < 1) return message.channel.send(errorEmbed3);
    var isim = args.slice(1).join(' ');
    var region = String(args[0]).toString().toLowerCase();
    var name = String(isim).toString().replace(' ', '').replace('ı', 'i')

    function Get(yourUrl)
    {
        var Httpreq = new XMLHttpRequest();
        Httpreq.open("GET", yourUrl, false);
        Httpreq.send(null);
        return Httpreq.responseText;
    }

    //region Converting Region
    if (region == "na")
    {
        region = "na1";
    }
    else if (region == "euw")
    {
        region = "euw1";
    }
    else if (region == "eun" || region == "eune")
    {
        region = "eun1";
    }
    else if (region == "lan")
    {
        region = "la1";
    }
    else if (region == "las")
    {
        region = "la2";
    }
    else if (region == "br")
    {
        region = "br1";
    }
    else if (region == "ru")
    {
        region = "ru";
    }
    else if (region == "tr")
    {
        region = "tr1";
    }
    else if (region == "oce")
    {
        region = "oc1";
    }
    else if (region == "kr")
    {
        region = "kr";
    }
    else if (region == "jp")
    {
        region = "jp1";
    }
    else
    {
        var regionListOnError = new discord.RichEmbed()
        .setColor('RANDOM')
        .setTitle('Geçerli Bölgeler')
        .setDescription('`NA (Kuzey Amerika)`, `EUW (AB Batı)`, `EUNE (AB Kuzey & Doğu)`,\n`LAN (Latin Amerika Kuzey)`, `LAS (Latin Amerika Güney)`,\n`BR (Brezilya)`, `RU (Rusya)`, `TR (Türkiye)`, `OCE (Okyanusya)`,\n`KR (Kore)`, `JP (Japonya)`')
        return message.channel.send(regionListOnError);
    }
    //endregion

    //region HoldOn Message
    var holdOn = new discord.RichEmbed()
    .setColor('RANDOM')
    .setTitle(' <a:loading2:503562521077219328> | Lol istatistikleri çekiliyor..')
    .setDescription('Biz istatistikleri çekerken lütfen bekleyin.')
    var hold =  message.channel.send(holdOn);
    //endregion

    //region Variables
    var summonerName;
    var summonerLevel;
    var summonerId;
    var accountId;
    //endregion

    function getProfile(_bolge, _isim)
    {
        var profileLink = 'https://' + _bolge + '.api.riotgames.com/lol/summoner/v3/summoners/by-name/' + _isim + '?api_key=' + key;

        var profile = JSON.parse(Get(profileLink));
        //region checking the status code
        try
        {
            var status = String(profile.status.status_code).toString();
            hold.delete();
            if (status == '400')
            {
                var badRequestEmbed = new discord.RichEmbed()
                .setColor('RED')
                .setTitle('Hata!')
                .setDescription('Bir hata ile karşılaştım hataya sebep olabilecek durumlar\n  • Sağlanan bir parametre yanlış biçimde (örn., Bir sayı yerine bir dize)\n  • Gerekli bir parametre sağlanmadı')
                .setFooter('Hata: 400 (Bad Request)')
                return message.channel.send(badRequestEmbed);
            }
            if (status == '403')
            {
                var forbiddenEmbed = new discord.RichEmbed()
                .setColor('RED')
                .setTitle('Hata!')
                .setDescription('Bir hata ile karşılaştım hataya sebep olabilecek durumlar\n  • API isteği ile hiçbir API anahtarı sağlanmadı\n  • API isteği ile geçersiz bir API anahtarı sağlandı\n  • API isteği ile kara listeye alınmış bir API anahtarı sağlandı\n  •API isteği yanlış veya desteklenmeyen bir yol içindi')
                .setFooter('Hata: 403 (Forbidden)')
                return message.channel.send(forbiddenEmbed);
            }
            if (status == '404')
            {
                var notFoundEmbed = new discord.RichEmbed()
                .setColor('RED')
                .setTitle('Hata!')
                .setDescription('Bir hata ile karşılaştım hataya sebep olabilecek durumlar\n  • Sağlanan ID veya ad, mevcut bir kaynağa uymuyor\n  • API isteği yanlış veya desteklenmeyen bir yol içindi')
                .setFooter('Hata: 404 (Not Found)')
                return message.channel.send(notFoundEmbed);
            }
            if (status == '415')
            {
                var unsupportedMediaTypeEmbed = new discord.RichEmbed()
                .setColor('RED')
                .setTitle('Hata!')
                .setDescription('Bir hata ile karşılaştım hataya sebep olabilecek durumlar\n  • Content-Type üstbilgisi uygun şekilde ayarlanmamış')
                .setFooter('Hata: 415 (Unsupported Media Type)')
                return message.channel.send(unsupportedMediaTypeEmbed);
            }
            if (status == '429')
            {
                var rateLimitExceededEmbed = new discord.RichEmbed()
                .setColor('RED')
                .setTitle('Hata!')
                .setDescription('Sınıra ulaşıldı lütfen 1-2 dakika sonra tekrar deneyiniz!')
                .setFooter('Hata: 429 (Rate Limit Exceeded)')
                return message.channel.send(rateLimitExceededEmbed);
            }
            if (status == '500')
            {
                var internalServerErrorEmbed = new discord.RichEmbed()
                .setColor('RED')
                .setTitle('Hata!')
                .setDescription('Bir hata ile karşılaştım hataya sebep olabilecek durumlar\n  • Sunucunun bir API isteğini yerine getirmesini engelleyen beklenmeyen bir durum veya istisna var')
                .setFooter('Hata: 500 (Internal Server Error)')
                return message.channel.send(internalServerErrorEmbed);
            }
            if (status == '503')
            {
                var serviceUnavailableEmbed = new discord.RichEmbed()
                .setColor('RED')
                .setTitle('Hata!')
                .setDescription('Bir hata ile karşılaştım hataya sebep olabilecek durumlar\n  • Sunucu şu anda bilinmeyen bir nedenle istekleri ele alamıyor')
                .setFooter('Hata: 503 (Service Unavailable)')
                return message.channel.send(serviceUnavailableEmbed);
            }
        }
        catch(e){}
//endregion


        summonerName = profile.name;
        summonerLevel = profile.summonerLevel;
        var profileIconId = profile.profileIconId;
        accountId = profile.accountId;
        summonerId = profile.id;
        var icon = 'http://ddragon.leagueoflegends.com/cdn/' + lolVersion + '/img/profileicon/' + profileIconId + '.png';

        var profileEmbed = new discord.RichEmbed()
        .setColor('RANDOM')
        .setThumbnail(icon)
        .setFooter('Sihirdar ve Hesap ID\'leri ' + summonerId + ', ' + accountId)
        .addField('Sihirdar İsmi', summonerName, true)
        .addField('Leveli', summonerLevel, true)
        hold.delete();
        message.channel.send(profileEmbed);
    }

    function getRankQ(_bolge, _id)
    {
        var rankLink = 'https://' + _bolge +'.api.riotgames.com/lol/league/v3/positions/by-summoner/' + _id + '?api_key=' + key;

        var page = String(Get(rankLink)).toString();
        if (page == '[]') { return; }
        var rankQ = JSON.parse(page);
        //region checking the status code
        try
        {
            var status = String(rankQ.status.status_code).toString();
            hold.delete();
            if (status == '400')
            {
                var badRequestEmbed = new discord.RichEmbed()
                .setColor('RED')
                .setTitle('Hata!')
                .setDescription('Bir hata ile karşılaştım hataya sebep olabilecek durumlar\n  • Sağlanan bir parametre yanlış biçimde (örn., Bir sayı yerine bir dize)\n  • Gerekli bir parametre sağlanmadı')
                .setFooter('Hata: 400 (Bad Request)')
                return message.channel.send(badRequestEmbed);
            }
            if (status == '403')
            {
                var forbiddenEmbed = new discord.RichEmbed()
                .setColor('RED')
                .setTitle('Hata!')
                .setDescription('Bir hata ile karşılaştım hataya sebep olabilecek durumlar\n  • API isteği ile hiçbir API anahtarı sağlanmadı\n  • API isteği ile geçersiz bir API anahtarı sağlandı\n  • API isteği ile kara listeye alınmış bir API anahtarı sağlandı\n  •API isteği yanlış veya desteklenmeyen bir yol içindi')
                .setFooter('Hata: 403 (Forbidden)')
                return message.channel.send(forbiddenEmbed);
            }
            if (status == '404')
            {
                var notFoundEmbed = new discord.RichEmbed()
                .setColor('RED')
                .setTitle('Hata!')
                .setDescription('Bir hata ile karşılaştım hataya sebep olabilecek durumlar\n  • Sağlanan ID veya ad, mevcut bir kaynağa uymuyor\n  • API isteği yanlış veya desteklenmeyen bir yol içindi')
                .setFooter('Hata: 404 (Not Found)')
                return message.channel.send(notFoundEmbed);
            }
            if (status == '415')
            {
                var unsupportedMediaTypeEmbed = new discord.RichEmbed()
                .setColor('RED')
                .setTitle('Hata!')
                .setDescription('Bir hata ile karşılaştım hataya sebep olabilecek durumlar\n  • Content-Type üstbilgisi uygun şekilde ayarlanmamış')
                .setFooter('Hata: 415 (Unsupported Media Type)')
                return message.channel.send(unsupportedMediaTypeEmbed);
            }
            if (status == '429')
            {
                var rateLimitExceededEmbed = new discord.RichEmbed()
                .setColor('RED')
                .setTitle('Hata!')
                .setDescription('Sınıra ulaşıldı lütfen 1-2 dakika sonra tekrar deneyiniz!')
                .setFooter('Hata: 429 (Rate Limit Exceeded)')
                return message.channel.send(rateLimitExceededEmbed);
            }
            if (status == '500')
            {
                var internalServerErrorEmbed = new discord.RichEmbed()
                .setColor('RED')
                .setTitle('Hata!')
                .setDescription('Bir hata ile karşılaştım hataya sebep olabilecek durumlar\n  • Sunucunun bir API isteğini yerine getirmesini engelleyen beklenmeyen bir durum veya istisna var')
                .setFooter('Hata: 500 (Internal Server Error)')
                return message.channel.send(internalServerErrorEmbed);
            }
            if (status == '503')
            {
                var serviceUnavailableEmbed = new discord.RichEmbed()
                .setColor('RED')
                .setTitle('Hata!')
                .setDescription('Bir hata ile karşılaştım hataya sebep olabilecek durumlar\n  • Sunucu şu anda bilinmeyen bir nedenle istekleri ele alamıyor')
                .setFooter('Hata: 503 (Service Unavailable)')
                return message.channel.send(serviceUnavailableEmbed);
            }
        }
        catch(e){}
        //endregion

        //region Tekli-Çiftli Sıra
        try
        {
            var leagueName, tier, rank, leaguePoints, wins, losses;

            leagueName = rankQ[0].leagueName;
            tier = rankQ[0].tier;
            rank = rankQ[0].rank;
            leaguePoints = rankQ[0].leaguePoints;
            wins = rankQ[0].wins;
            losses = rankQ[0].losses;

            var soloRankEmbed = new discord.RichEmbed()
            .setColor('RANDOM')
            .setTitle('Tekli/Çiftli Sıra')
            .addField(tier + ' ' + rank, leagueName, true)
            .addField('LP', leaguePoints, true)
            .addField('Kazanma', wins, true)
            .addField('Kaybetme', losses, true);
            if (tier == 'UNRANKED' || tier == 'PROVISIONAL') { soloRankEmbed.setThumbnail('https://image.ibb.co/dcejSn/provisional.png'); }
            if (tier == 'BRONZE') { soloRankEmbed.setThumbnail('https://image.ibb.co/j5SSf7/bronze.png'); }
            if (tier == 'SILVER') { soloRankEmbed.setThumbnail('https://image.ibb.co/jvVDL7/silver.png'); }
            if (tier == 'GOLD') { soloRankEmbed.setThumbnail('https://image.ibb.co/mBJNDS/gold.png'); }
            if (tier == 'PLATINUM') { soloRankEmbed.setThumbnail('https://image.ibb.co/mxQ2DS/platinum.png'); }
            if (tier == 'DIAMOND') { soloRankEmbed.setThumbnail('https://image.ibb.co/gmgL07/diamond.png'); }
            if (tier == 'MASTER') { soloRankEmbed.setThumbnail('https://image.ibb.co/j1uJnn/master.png'); }
            if (tier == 'CHALLENGER') { soloRankEmbed.setThumbnail('https://image.ibb.co/n29Jnn/challenger.png'); }
            message.channel.send(soloRankEmbed);
        }
        catch (e) { }
        //endregion

        //region Esnek Sıra
        try
        {
            var leagueName, tier, rank, leaguePoints, wins, losses;

            leagueName = rankQ[1].leagueName;
            tier = rankQ[1].tier;
            rank = rankQ[1].rank;
            leaguePoints = rankQ[1].leaguePoints;
            wins = rankQ[1].wins;
            losses = rankQ[1].losses;

            var soloRankEmbed = new discord.RichEmbed()
            .setColor('RANDOM')
            .setTitle('Esnek Sıra')
            .addField(tier + ' ' + rank, leagueName, true)
            .addField('LP', leaguePoints, true)
            .addField('Kazanma', wins, true)
            .addField('Kaybetme', losses, true);
            if (tier == 'UNRANKED' || tier == 'PROVISIONAL') { soloRankEmbed.setThumbnail('https://image.ibb.co/dcejSn/provisional.png'); }
            if (tier == 'BRONZE') { soloRankEmbed.setThumbnail('https://image.ibb.co/j5SSf7/bronze.png'); }
            if (tier == 'SILVER') { soloRankEmbed.setThumbnail('https://image.ibb.co/jvVDL7/silver.png'); }
            if (tier == 'GOLD') { soloRankEmbed.setThumbnail('https://image.ibb.co/mBJNDS/gold.png'); }
            if (tier == 'PLATINUM') { soloRankEmbed.setThumbnail('https://image.ibb.co/mxQ2DS/platinum.png'); }
            if (tier == 'DIAMOND') { soloRankEmbed.setThumbnail('https://image.ibb.co/gmgL07/diamond.png'); }
            if (tier == 'MASTER') { soloRankEmbed.setThumbnail('https://image.ibb.co/j1uJnn/master.png'); }
            if (tier == 'CHALLENGER') { soloRankEmbed.setThumbnail('https://image.ibb.co/n29Jnn/challenger.png'); }
            message.channel.send(soloRankEmbed);
        }
        catch (e) { }
        //endregion
    }

    getProfile(region, name);
    getRankQ(region, summonerId)
};

