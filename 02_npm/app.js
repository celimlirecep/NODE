const yargs = require('yargs');
const kisi = require("./kisi");



// console.log(process.argv[2]);
// console.log(process.argv[3]);


// let gelenKomut=process.argv[2];
// if (gelenKomut=="aslan") {
//     console.log("giriş yapıldı")
// }
// console.log(yargs.argv)

// yargs.command({
//     command:'ekle',
//     describe:'yeni kisi eklemeye yarar',
//     handler(argv){
        
//         console.log('Ismi: '+argv.isim+' telefon numrası: ' +argv.tel);
//     }
// });


yargs.command({
    command:"sil",
    describe:"Kisi silme islemi yapılacaktır",
    builder:{
        isim:{
            describe:"silinecek isim",
            demandOption:true,
            type:"string"
        },
    },
    handler(argv){
     //   console.log(argv.isim+" adlı kisi silinecektir");
     kisi.sil(argv.isim);
    },
});
// yargs.command({
//     command:"listele",
//     describe:"kisiler listelenecktir",
//     handler(argv){
//         console.log(argv.isim+"listelendi")
//     }
// });

yargs.command({
    command:"ekle",
    describe:"yeni kisi eklemeye yarar",
    builder:{
        isim:{
            describe:"eklenecek kisi adı",
            demandOption:true,
            type:"string",
        },
        tel:{
            describe:"eklenecek kisi tel",
            demandOption:false,
            type:"string",
        },
    },
    handler(argv){
       // console.log("isim: "+argv.isim+" tel: "+argv.tel);
       kisi.ekle(argv.isim,argv.tel);
    }
});

yargs.command({
    command:"goster",
    describe:"Seçilen kişiyi detaylıca gösterir",
    builder:{
        isim:{
            describe:"Kişi adı",
            demandOption:true,
            type:"string",
        },
    },
    handler(argv){

        kisi.goster(argv.isim);
    }
})




yargs.parse();