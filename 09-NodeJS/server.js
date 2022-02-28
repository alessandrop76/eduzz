
const http = require('http');
const host = 'http://localhost';
const PORT = 3000;
const stats = require ('./pcRamUsage.js');


console.log(stats);

http.createServer(( req , res) =>{
    let url = req.url;

    if(url === '/stats'){
        res.end(JSON.stringify(stats, null, 2))
    }else{
        res.end('<h1>Seja bem-vindo</h1>');    
    }
    
}).listen(PORT, ()=> console.log(`Server listening on port'${host}:${PORT}`));