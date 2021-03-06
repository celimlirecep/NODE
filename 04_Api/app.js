const yargs = require('yargs');
const UlkeBilgileriGetir = require('./axiosGet');



function calistir() {
    yargs.command({
        command:"getir",
        describe:"Ülke bilgisi getirilecek",
        builder:{
            ulke:{
                describe:"Eklenecek Ülke Adı ingilizce",
                demandOption:true,
                type:"string",
            }
        },
        handler(argv){
            UlkeBilgileriGetir(argv.ulke);
        }
    })
    
    yargs.parse();
}

module.exports=calistir;
