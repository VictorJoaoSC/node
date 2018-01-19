var http = require('http');
var url = require('url');

http.createServer(function(req, resp){
    var param = url.parse(req.url,true).query;

    var txt = param.ano + " "+param.mes;

    resp.end(txt);
}).listen(3000)