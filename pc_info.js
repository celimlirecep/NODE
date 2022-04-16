const os = require('os');
const fs = require('fs');


module.exports.pcInfo=function() {
    let freeRam=ByteToGB(os.freemem());
let totalRam=ByteToGB(os.totalmem());
let usedRam=(totalRam-freeRam).toFixed(2);
let cpuCount=os.cpus().length;
fs.writeFile("pc_info.txt",yazdir(),()=>{
    if(err) console.log(err);
})

function ByteToGB(deger) {
    return (deger/1024/1024/1024).toFixed(2);
}
function yazdir() {
    return `Total Ram:${totalRam}\n Used Ram:${usedRam}\n CPU Count:${cpuCount}`;
}
}
