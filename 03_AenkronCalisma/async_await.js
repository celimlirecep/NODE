console.log("basladi");







function GetUser(id) {
    console.log("Getirilen User: " + id);
    return new Promise(resolve => {

        setTimeout(() => {

            resolve({
                id: id,
                name: "recep"
            });
        }, 1500)
    })

}

function getCours(userName) {
    console.log(userName + " adlı kişinin kursları getiriliyor");
    return new Promise(resolve => {
        setTimeout(() => {

            resolve(["pyton", "c#", "javascript"]);
            
        }, 2000)
    })
}

function getCommend(kurs) {
    console.log(kurs+"Kurs Hakkındaki Yorumlar Getiriliyor...")
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("mükemmel bir kurs");
        }, 1500)
    })

}

console.log("bitti");

async function yorumgetir() {
    const kullaniciBilgileri=await GetUser(123);
    const kurslarıGetir=await getCours(kullaniciBilgileri.name);
    const yorumgetir=await getCommend(kurslarıGetir[1]);
    console.log(yorumgetir);

}

yorumgetir();
