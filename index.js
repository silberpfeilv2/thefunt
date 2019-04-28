const TheFunt = require('TheFunt-CommandHandler'); //TheFunt komut yükleyicisi by TheFuntStudio © 2019
const Discord = require('discord.js');

//TheFunt Bot © 2019 
const client = new TheFunt.Client({
    token: "NDQwMDIwMzQ1NjMwNDkwNjI1.XMU9WQ.Auaz6btTWGujhc3BXmhaBWspx5k", 
    prefix: "/", 
    sahip: ["403919171718479878","384358855582416899"], 
    komutDosya: "komutlar",
  
    varsayılanKomutlar: 'hepsi',
    veritabanı: {
            dosya: "db.json" 
        }      
});

//TheFunt Ayarlı ayarları kolay kullanma kısmı
client.ayarlar.footer = "TheFunt 2019 Yapımı";
client.ayarlar.footerURL = "https://cdn.discordapp.com/avatars/440020345630490625/c8aa595cfef8db22d829352eda1074e9.png";
client.ayarlar.basarisiz = "basarisiz emojisi";
client.ayarlar.basarili = "basarili emojisi";
client.ayarlar.uyari = "warning emojisi";
client.ayarlar.loading = "loading emojisi"; 
client.ayarlar.acik = "<:acik:571958786357461022>";
client.ayarlar.kapali = "<:kapali:571959081917480981>";




client.eventYükle('events');
                         
    client.kategoriYükle([ 
        ['genel', 'Genel Komutlar'],
        ['moderasyon','Moderasyon Komutları'],
        ['diger', 'Diğer komutlar'],
        ['muzik', 'Müzik Komutları'],
        ['eglence', 'Eğlence Komutları'] 
    ]);

//Küfür engel BAŞLANGIÇ!
client.on("message", async message => {
    if (client.veritabanı.varMı(`${message.guild.id}.ayarlar.küfürengel`)) {
      const kufur = ["fuck","shit","porn","xnxx","amk","aq","sik","a q","a mk","oç","oruspu","orusbu","anan","sikerler","sikerim","s1kerler","s1kerim","s1ker1m","wtf","AMK","AQ","ORUSBU","ORUSPU","SİKERLER","GAY","GÖT","ANAN","PORNHUB.COM","pornhub.com","brazzers","BRAZZERS","ANANI","ananı","ananı sikerim","ananı sik","anamı sik","ANANI SİK","ANANI SİKERİM","şerefsiz","Şerefsiz","ŞEREFSİZ","orospu","orospu çocuğu","OC","Piç","PİÇ","yavşak","YAVŞAK","ibne","ipne","İBNE","İPNE","amına korum","pi.ç","piç"];
    if (kufur.some(word => message.content.toLowerCase().includes(word))) {
     try { 
       if (!message.member.hasPermission("MANAGE_GUILD")) {
       message.delete();
     var küfüruyarı = new Discord.RichEmbed()
     .setColor("#9b59b6")
            .setAuthor(message.author.tag, message.author.avatarURL)
            .setFooter(client.ayarlar.footer, client.ayarlar.footerURL) 
     .setDescription(`<@${message.author.id}> gönderdiğiniz mesajın içeriğinde küfür tespit edildi. Bu sunucuda küfür etmek yasaktır!`)
     
                 return message.channel.send({embed: küfüruyarı}) } } catch(err) { console.log(err); }}}  });
    //Küfür engel BİTİŞ!

    //Reklam engel BAŞLANGIÇ!
    client.on("message", async message => {
        if (client.veritabanı.varMı(`${message.guild.id}.ayarlar.reklamengel`)) {
            var regex = new RegExp("^(http[s]?:\\/\\/(www\\.)?|ftp:\\/\\/(www\\.)?|www\\.){1}([0-9A-Za-z-\\.@:%_\+~#=]+)+((\\.[a-zA-Z]{2,3})+)(/(.)*)?(\\?(.)*)?");
            if (regex.test(message.content)==true) {
     try { 
       if (!message.member.hasPermission("MANAGE_GUILD")) {
       message.delete();
     var reklamuyarı = new Discord.RichEmbed()
     .setColor("#9b59b6")
      .setAuthor(message.author.tag, message.author.avatarURL)
      .setFooter(client.ayarlar.footer, client.ayarlar.footerURL) 
     .setDescription(`<@${message.author.id}> gönderdiğiniz mesajın içeriğinde küfür tespit edildi. Bu sunucuda küfür etmek yasaktır!`)
     
                 return message.channel.send({embed: reklamuyarı}) } } catch(err) { console.log(err); }}}  });
    //Reklam engel BİTİŞ!

// SADECE GLITCHDE
//Sürekli açık kalma bölümü.
const express = require('express')
const app = express()
app.listen(process.env.PORT); 
app.use(express.static('css'));
app.get('/', (req, res) => {
res.sendFile(__dirname + '/index.html');
})
                         
client.giris(); 
                