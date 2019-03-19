var express = require ('express');
var cookieParser = require('cookie-parser');
var session = require('express-session');

var app = express();

app.get('/',function(req,res){
    console.log('server started');
    res.status(200).send('ok')
});

app.listen(3000,function(){
    console.log('I\'m listening...!');
})