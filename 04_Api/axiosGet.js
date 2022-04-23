
const UlkeBilgileriGetir=(ulke)=>{

    const { default: axios } = require("axios");

    axios.get(`https://restcountries.com/v3.1/name/${ulke}`)
    .then(res=>console.log(res.data[0].name.official))
    

}

module.exports=UlkeBilgileriGetir;


