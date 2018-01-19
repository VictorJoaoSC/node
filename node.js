var http = require('http');
var modulo = require('./primeiroModulo')
var cluster = require('cluster')


if(cluster.isPrime){
    cluster.fork();
    cluster.fork();
}


http.createServer(function(req,res){
    console.log('Chamada efetuado!')
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write('ola,'+modulo.PrimeiroModulo())
    res.write("url de acesso : "+req.url)
    res.end();    
}).listen(3000)

console.log('Servidor incializado, pressione CTRL + C para encerrar o servidor!')

teste = function(){
    console.log('vai merda!')
}