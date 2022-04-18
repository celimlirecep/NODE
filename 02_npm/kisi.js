const kisiEkle=function(isim,tel){

    console.log(isim+" *-*-*-*-* "+tel);
}

const kisiSil=function (isim) {
    console.log(isim+" silme işlemi")
}
module.exports={
    ekle:kisiEkle,
    sil:kisiSil,
};