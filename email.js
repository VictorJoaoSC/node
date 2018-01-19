var nodemailer = require('nodemailer');

var enviarEmail = nodemailer.createTransport({
    service:'gmail',
    auth:{
        user:'##################',
        pass:'##################'
    }
});


var mailOptions ={
    from :'#####################',
    to:'########################',
    subject:'Enviando email aparti do node.js!',
    text:'Meu primeiro programa de enviar email. É foi no node.js.Legal esse tal node.js =)'
}

enviarEmail.sendMail(mailOptions,function(err,info){
    if(err){
        console.log('falha no envio!');
        console.log(err);
    }
    else{
        console.log('Email enviado :'+info.response);
    }
});
