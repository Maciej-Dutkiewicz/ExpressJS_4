var express = require('express');
var app = express();

app.set('view engine', 'pug');
app.set('views','./views');

app.get('/', function(req,res) {
	res.render('start.pug')
});

app.get('/auth/google', function(req,res) {
	res.render('log.pug');
});

app.get('/login', function(req,res) {
	res.render('login.pug', {name: req.query.username, pass: req.query.password});
});

app.listen(3000);