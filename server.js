const express = require('express')
const app = express()
const hbs = require('hbs');

//heroku variables de entorno globales
const port = process.env.PORT || 3000;
require('./hbs/helpers')
app.use(express.static(__dirname+'/public')); // utiizamos middleware 
//Express HBS Engine
hbs.registerPartials(__dirname+'/views/parciales');
app.set('view engine', 'hbs');

app.get('/', function (req, res) {
    res.render('home',{
        nombre:'Alexander',
    });
});

app.get('/about', function (req, res) {
    res.render('about');
});

app.listen(port,()=>{
    console.log('Escuchando puertos ',port);
});