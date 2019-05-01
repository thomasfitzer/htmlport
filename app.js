var express = require('express');

var app = express();

app.get('/', function (req,res) {
    res.send('root')
});

app.get('/contact', function (req,res){
    res.send('contact')
});

app.get('/portfolio', function (req,res){
    res.send('portfolio')
})

app.listen(3000);