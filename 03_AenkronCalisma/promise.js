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

GetUser(123)
.then(res => getCours(res.name))
.then(res=>getCommend(res[0]))
.then(res=>console.log(res))
