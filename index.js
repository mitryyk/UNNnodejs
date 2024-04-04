console.log('start');

const art = require('ascii-art');
art.font("XXX", "Doom", (err, renderredText)=>{
    if (err){return;}
    console.log(renderredText);
})