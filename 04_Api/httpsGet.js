const https = require('https');
const { json } = require('stream/consumers');


https.get("https://restcountries.com/v3.1/name/turkey",(response)=>{
    let data="";
    response.on("data",chunk=>{
        data=data+chunk;
    });


    response.on("end",()=>{
        const Jsondata=JSON.parse(data);
        console.log(Jsondata[0].name.common);
    })


}).on("error",err=>{
    console.log(err.message)
});