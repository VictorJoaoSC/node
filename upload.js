// var http = require('http');

// var formidable = require('formidable');

// http.createServer(function(req,res){
//     res.writeHead(200,{'Content-type':'text/html'});
//     res.write('<form action="fileupload" method="post" enctype="multipart/form-data">');
//     res.write('<input type="file" name="fileupload"><br>');
//     res.write('<input type="submit">');
//     res.write('</form>');

//     res.end();


// }).listen(3000);

// console.log('Iniciei o servidor de upload de arquivos!');


var http = require('http');
var formidable = require('formidable');
var fs = require('fs');


http.createServer(function(req,res){

    if(req.url =='/fileupload'){
        var form = new formidable.IncomingForm();
        form.parse(req,function(err,fields,files){
            var caminhoTemp = files.filetoupload.path;  
            var caminhoPersiste ='/home/joao-victor/labs/node/arquivos/' + files.filetoupload.name;
            fs.rename(caminhoTemp,caminhoPersiste, function (err){
                    if(err) throw err;
                    res.write('arquivo upado com sucess!');
                    res.end();
            })

         });
    }
    else{
        res.writeHead(200,{'Content-Type':'text/html'});
        res.write('<form action="fileupload" method="post" enctype="multipart/form-data">');
        res.write('<input type="file" name="filetoupload"><br>');
        res.write('<input type="submit">');
        res.write('</form>');
        return res.end();
    }

}).listen(3000);

console.log("----------------------------------------------")
console.log("Initializing!")
console.log("Initialized!")
console.log("started!")