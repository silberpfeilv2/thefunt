    module.exports = {
        komut: "taş-kağıt-makas",
        açıklama: '<:tas:571803393014759425> Taş <:kagit:571803392909901858> kağıt <:makas:571803393350434816> makas oynar.',
        kategori: "eglence", 
        alternatifler: ['taş', 'tas', 'kağıt', 'kagıt', 'kagit', 'kağit', 'makas', 'tkm', 'taskagitmakas', 'taskagıtmakas', 'taskağıtmakas', 'tas-kagıt-makas'],
        kullanım: "", 
        yetki: '', 
        
    };
                     
    module.exports.baslat = (client, message) => {
        
    function get_random(list) {
            return list[Math.floor((Math.random() * list.length))];
        };
            //<:tas:571803393014759425> <:kagit:571803392909901858> <:makas:571803393350434816>
        var yazitura = ["T-K-M **|** Sonuç: **<:tas:571803393014759425> (TAŞ)** ","T-K-M **|** Sonuç: **<:kagit:571803392909901858>** (KAĞIT)","T-K-M **|** Sonuç: **<:makas:571803393350434816>** (MAKAS)"] ;
        var sonuc = get_random(yazitura);
        message.channel.send('<:tas:571803393014759425> <:kagit:571803392909901858> <:makas:571803393350434816> 3...').then(msg => {
          setTimeout(() => {
                msg.edit("<:tas:571803393014759425> <:kagit:571803392909901858> <:makas:571803393350434816> 2...")
            }, 1000);
          setTimeout(() => {
                msg.edit("<:tas:571803393014759425> <:kagit:571803392909901858> <:makas:571803393350434816> 1...")
            }, 1000);
            setTimeout(() => {
                msg.edit("<:tas:571803393014759425>")
            }, 1000);
            setTimeout(() => {
                msg.edit("<:kagit:571803392909901858>")
            }, 2000);
            setTimeout(() => {
                msg.edit("<:makas:571803393350434816>")
            }, 3000);
            setTimeout(() => {
                msg.edit("<:tas:571803393014759425>")
            }, 4000);
            setTimeout(() => {
                msg.edit("<:kagit:571803392909901858>")
            }, 5000);
            setTimeout(() => {
                msg.edit("<:makas:571803393350434816>")
            }, 6000);
            setTimeout(() => {
                msg.edit("<:tas:571803393014759425>")
            }, 7000);
            setTimeout(() => {
                msg.edit("<:kagit:571803392909901858>")
            }, 8000);
            setTimeout(() => {
                msg.edit("<:makas:571803393350434816>")
            }, 9000);
            setTimeout(() => {
                msg.edit(sonuc)
            }, 10000);
        });
  
    };