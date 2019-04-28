
        const Discord = require("discord.js"); 
    module.exports = {
        komut: "temizle", 
        açıklama: "Mesajları siler.",
        kategori: "moderasyon", 
        alternatifler: ["mesajsil","mesajtemizle","mesajlarısil","mesajlarıtemizle","sil","prune"],
        kullanım: "", 
        yetki: 'MANAGE_MESSAGES', 
                            
        args: [
          {
            anahtar: 'limit', 
            soru: 'Kaç adet mesaj silinsin istersiniz? (1-500)',
            tip: 'sayi' 
           
          }
        ]
    };
                         
    module.exports.baslat = (client, message, args) => {
      const msg = message;  
      
      
     const sayi1 = args.limit;
		const sayi  = Number(sayi1);
		if (sayi < 1) return msg.channel.send(client.ayarlar.basarisiz + ' En az 1 mesaj silinebilir.');
		if (sayi > 100) return msg.channel.send(client.ayarlar.basarisiz + ' En fazla 100 mesaj silinebilir.');
	
			const sorgula = msg.channel.send(sayi + ' adet mesaj sorgulanıyor...')
  
        message.channel.fetchMessages({ 
            limit: args.limit // Fetch last 50 messages.
            }).then((msgCollection) => { // Resolve promise
          	msgCollection.forEach((msg) => { // forEach on message collection
        		msg.delete(); // Delete each message
          	})
          
              
   
        
          
        
      })
                    msg.channel.send(client.ayarlar.basarili + " Silme komudu verildi. ")
                    
           
            
			
			
    
             };