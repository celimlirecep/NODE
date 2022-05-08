const express = require('express');
const Joi = require('@hapi/joi');
const { use } = require('express/lib/application');
const { extension } = require('@hapi/joi/lib/schemas');


//https://expressjs.com/en/resources/middleware.html
const app = express();
app.use(express.json());
app.use(express.urlencoded({extension:true}));
app.use(express.static("public"));


const kullanıcılar = [
    { id: 2, ad: "recep", yas: 54 },
    { id: 3, ad: "kazım", yas: 43 },
    { id: 4, ad: "hasan", yas: 12 },
]



app.get("/", (req, res) => {
    console.log("ana sayfaya girildi")
    res.send("Ana sayfa");
});

app.get("/users", (req, res) => {
    console.log("user sayfasına girildi");
    console.log(req.query.ters);//users?ters=true (ters benim verdiğim isim)
    if (req.query.ters) {
        console.log("ters burda")
        res.send(kullanıcılar.reverse());
    }
    else {
        console.log("normal burda")
        res.send(kullanıcılar);
    }

});
app.get("/users/:id", (req, res) => {


    const bulunanUser = kullanıcılar.find(user => user.id === parseInt(req.params.id));
    if (bulunanUser) {
        res.send(bulunanUser);
    }
    else {
        res.status(404).send(`${req.params.id} id li kullanıcı bulunamamıştır`)
    }
})
app.post("/users",(req,res)=>{

    const schema=Joi.object({
        ad:Joi.string().min(3).max(30).required(),
        yas:Joi.number().integer().min(5).max(99).required()
    });

    const sonuc=schema.validate(req.body);
    if (sonuc.error) {
        res.send(sonuc.error.details[0].message)
    }else {
        const yeniKullanici={
            id:kullanıcılar.length+1,
            ad:req.body.ad,
            yas:req.body.yas
        }
        kullanıcılar.push(yeniKullanici);
        res.send(yeniKullanici);
    }

  
    
});
app.put("/users/:id",(req,res)=>{
   
    const arananKullanici=kullanıcılar.find(user=>user.id===parseInt(req.params.id))

    if (!arananKullanici) {
        return res.send(`${req.body.params} id li kullanıcı bulunamadı`)
    }
    const schema=Joi.object({
        ad:Joi.string().min(3).max(30).required(),
        yas:Joi.number().integer().min(4).max(99).required()
    })
    const sonuc=schema.validate(req.body);
    if (sonuc.error) {
       return res.status(400).send(sonuc.error.details[0].message)
    }
    arananKullanici.ad=req.body.ad;
    arananKullanici.yas=req.body.yas;
    res.send(req.body)
});
app.delete("/users/:id",(req,res) =>{

    const arananKullanici=kullanıcılar.find(user=>user.id==parseInt(req.params.id));
    if (!arananKullanici) {
        res.status(404).send(req.params.id +" li kullanıcı bulunamamıştır")
    }
    else{
        const index=kullanıcılar.indexOf(arananKullanici);
        kullanıcılar.splice(index,1);
        res.send(arananKullanici);
    }

})




app.listen(3030, () => {
    console.log("Server 3030 portunu dinliyor");
});