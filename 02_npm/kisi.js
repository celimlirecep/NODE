const fs = require('fs');
const chalk = require('chalk');



const kisiEkle=function(isim,tel){


    const kisiler=DosyadanKisileriOKu();

    const aynıAdaSahipKisiler= kisiler.filter(kisi=>kisi.isim===isim)

    if (aynıAdaSahipKisiler.length==0) {
        kisiler.push({
            isim:isim,
            tel:tel,
        });
        DosyayaKisileriYaz(kisiler);
    }
    else{
        console.log(chalk.red.inverse("Bu isimde bir kullanıcı zaten var"));
    }


   
}
function DosyadanKisileriOKu() {
   try {
    const dataBuffer=fs.readFileSync("kisiler.json");
    const dataJson=dataBuffer.toString();
    return JSON.parse(dataJson);    
   } catch (error) {
       return [];
   }
};
function DosyayaKisileriYaz(kisiler) {
    const JsonKisi=JSON.stringify(kisiler);
    fs.writeFileSync("kisiler.json",JsonKisi);

}


const kisiSil=function (isim) {
    console.log(isim+" silme işlemi")
    const kisiler=DosyadanKisileriOKu();
    const kisiSilinmisDizi=kisiler.filter(kisi=>kisi.isim!=isim);
    if (kisiler.length>kisiSilinmisDizi.length) {
        DosyayaKisileriYaz(kisiSilinmisDizi);
        console.log(chalk.green("Silme İŞlemi Başarılı"));
    }
    else{
        console.log("Kisi bulunamadı")
    }
   
}

const kisiGoster=function (isim) {
    console.log("senin adın "+isim);
    const kisiler=DosyadanKisileriOKu();
    const bulunanKisi=kisiler.find(kisi=>kisi.isim==isim);
    if (bulunanKisi) {
        console.log("aradığınız kisinin numarası:" +bulunanKisi.tel);
    }
    else{
        console.log("böyle bir kişi yok")
    }
}

module.exports={
    ekle:kisiEkle,
    sil:kisiSil,
    goster:kisiGoster,
};