const yargs = require('yargs');



// console.log(process.argv[2]);
// console.log(process.argv[3]);


// let gelenKomut=process.argv[2];
// if (gelenKomut=="aslan") {
//     console.log("giriş yapıldı")
// }
// console.log(yargs.argv)

yargs.command({
    command:'ekle',
    describe:'yeni kisi eklemeye yarar',
    handler(argv){
        
        console.log('Ismi: '+argv.isim+' telefon numrası: ' +argv.tel);
    }
});


yargs.command({
    command:"sil",
    describe:"Kisi silme islemi yapılacaktır",
    handler(argv){
        console.log(argv.isim+" adlı kisi silinecektir");
    },
});
yargs.command({
    command:"listele",
    describe:"kisiler listelenecktir",
    handler(argv){
        console.log(argv.isim+"listelendi")
    }
});




yargs.argv;