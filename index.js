var express = require ('express');
var cookieParser = require('cookie-parser');
var session = require('express-session');
var bodyParser = require('body-parser');
var app = express();

app.set('view engine', 'pug');
app.set('views','./views');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(session({secret: "authenticate"}));

app.get('/',function(req,res){
    console.log('server started for'+req.sessionID);
    res.render('test');
});

app.get('/signup',function(req,res){
    console.log('SignUp page rendered');
});

app.post('/expressproject', function(req,res){
    console.log(req.body);
    if(req.body.username === 'yash' && req.body.password === '123'){
        res.send('Welcome..!');
    }
    res.send('bye..!');
});

app.listen(3000,function(){
    console.log('I\'m listening...!');
})