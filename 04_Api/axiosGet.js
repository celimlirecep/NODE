const axios = require("axios");


const UlkeBilgileriGetir=(ulke)=>{
    axios.get(`https://restcountries.com/v3.1/name/${ulke}`)
    .then(res=>console.log(`
    ülkenin adı:${res.data[0].name.common}\n
    ülkenin resmi adı: ${res.data[0].name.official}\n
    ülkenin başkenti: ${res.data[0].capital}\n

    Hangi Bölgede Bulunur: ${res.data[0].region}\n
    Ülke Konumu: ${res.data[0].maps.googleMaps}\n
    Ülke Nüfusu: ${res.data[0].population}\n
    Ülke Trafik Yönü: ${res.data[0].car.side}\n
    Ülke Bayrağı: ${res.data[0].flags.png}\n


    `))
}

module.exports=UlkeBilgileriGetir;


