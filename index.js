import express from 'express';

const app = express();

app.get('/', function(req, res){
    res.send("Oi mundo")
})

app.get('/Ricardo', function(req, res){
    res.send("Olá, Ricardo!")
})





app.listen(3000);