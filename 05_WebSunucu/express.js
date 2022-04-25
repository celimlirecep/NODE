const express = require('express');
const app=express();

const kullanıcılar=[
    {id:2,ad:"recep",yas:54},
    {id:3,ad:"kazım",yas:43},
    {id:4,ad:"hasan",yas:12},
]



app.get("/",(req,res)=>{
console.log("ana sayfaya girildi")
res.send("Ana sayfa");
});

app.get("/users",(req,res)=>{
console.log("user sayfasına girildi");
console.log(req.query.ters);
if (req.query.ters) {
    console.log("ters burda")
    res.send(kullanıcılar.reverse());
}
else{
    console.log("normal burda")
    res.send(kullanıcılar);
}

})

app.get("/users/:id",(req,res)=>{

 
const bulunanUser=kullanıcılar.find(user=>user.id===parseInt(req.params.id));
if (bulunanUser) {
    res.send(bulunanUser);
}
else 
{
    res.status(404).send(`${req.params.id} id li kullanıcı bulunamamıştır`)
}
})


app.listen(3030,()=>{
    console.log("Server 3030 portunu dinliyor");
});