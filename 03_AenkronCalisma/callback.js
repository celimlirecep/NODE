console.log("basladi");

 GetUser(123,function (user) {
    console.log("Getirilen User: " + user.name);
  getCours(user.name,(KursDizisi)=>{
    console.log("Kurslar: "+KursDizisi);
  });
   
});





function GetUser(id,callback) {
    console.log("Getirilen User: "+id);
    setTimeout(() => {
        
        callback({
            id:id,
            name:"recep"
        });
    }, 1500)
}

function getCours(userName,callback) {
    console.log(userName+" adlı kişinin kursları getiriliyor");
   setTimeout(()=>{
    
    callback(["pyton","c#","javascript"]) ;
   },2000)
}


console.log("bitti");