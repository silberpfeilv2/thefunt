    module.exports = {
        komut: "yazı-tura",
        açıklama: '<:yazi:571806094825881609> Yazı <:tura:571806093915717632> tura atar.',
        kategori: "eglence", 
        alternatifler: ['yazıtura', 'yazitura', 'yazi-tura'],
        kullanım: "", 
        yetki: '', 
        
    };
                     
    module.exports.baslat = (client, message) => {
        
 function get_random(list) {
            return list[Math.floor((Math.random() * list.length))];
        };

        var yazitura = ["YAZI-TURA **|** Sonuç: **<:yazi:571806094825881609> (YAZI)** ","YAZI-TURA **|** Sonuç: **<:tura:571806093915717632> (TURA)**"];
        var sonuc = get_random(yazitura);
        message.channel.send('<:yazi:571806094825881609> <:tura:571806093915717632> Yazı tura atılıyor...').then(msg => {
          setTimeout(() => {
                msg.edit("<:yazi:571806094825881609> <:tura:571806093915717632> 3...")
            }, 1000);
          setTimeout(() => {
                msg.edit("<:yazi:571806094825881609> <:tura:571806093915717632> 2...")
            }, 1000);
          setTimeout(() => {
                msg.edit("<:yazi:571806094825881609> <:tura:571806093915717632> 1...")
            }, 1000);
            setTimeout(() => {
                msg.edit("<:yazi:571806094825881609>")
            }, 1000);
            setTimeout(() => {
                msg.edit("<:tura:571806093915717632>")
            }, 2000);
            setTimeout(() => {
                msg.edit("<:yazi:571806094825881609>")
            }, 3000);
            setTimeout(() => {
                msg.edit("<:tura:571806093915717632>")
            }, 4000);
            setTimeout(() => {
                msg.edit("<:yazi:571806094825881609>")
            }, 5000);
            setTimeout(() => {
                msg.edit("<:tura:571806093915717632>")
            }, 6000);
            setTimeout(() => {
                msg.edit("<:yazi:571806094825881609>")
            }, 7000);
            setTimeout(() => {
                msg.edit("<:tura:571806093915717632>")
            }, 8000);
            setTimeout(() => {
                msg.edit("<:yazi:571806094825881609>")
            }, 9000);
            setTimeout(() => {
                msg.edit(sonuc)
            }, 10000);
        });
  
    };