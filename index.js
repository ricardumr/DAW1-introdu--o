import express from 'express';

const app = express();

app.set('view engine', 'ejs');
//configura a pasta views para outro local 
//app.set('view', path.join(__dirname, 'tela'));

app.use(express.urlencoded({ extended: true }));

app.get('/rifa', function (req, res) {
    res.render('configurarifa')
});

app.post('/rifa', function (req, res) {
    const inicio = parseInt(req.body.inicio)
    const fim = parseInt(req.body.fim)
    const mensagem = req.body.mensagem

    res.render('rifa', { inicio: inicio, fim: fim, mensagem: mensagem });
});





app.get('/Calculadora', function (req, res) {
    //res.send("Oi mundo")
    res.render('calculadora')
})/*
    app.post('/Calculadora', function (req, res) {
        res.send("resultado" + req.body.op)
    })*

app.post('/Calculadora', function (req, res) {
    let resultado;
    if (req.body.op == "soma") {
        resultado = parseFloat(req.body.op1) + parseFloat(req.body.op2)
        //res.send("Resultado da soma: " + soma)
    }
    else if (req.body.op == "subtracao") {
        resultado = parseFloat(req.body.op1) - parseFloat(req.body.op2)
        //res.send("Resultado da subtração: " + subtracao)
    }
    else if (req.body.op == "multiplicacao") {
        resultado = parseFloat(req.body.op1) * parseFloat(req.body.op2)
        //res.send("Resultado da multiplicação: " + mult)
    }
    else if (req.body.op == "divisao") {
        resultado = parseFloat(req.body.op1) / parseFloat(req.body.op2)
        //res.send("Resultado da divisão: " + div)
    }
    else {
        res.send("Operação inválida!")
    }
    res.render('resposta.ejs', { Valor: resultado, op: req.body.op })
    //res.send("Ricardo");
})









/*const soma
const soma
app.get('/Ricardo', function (req, res) {
    res.send("Ricardo!")
})
 
app.get("/:x", function (req, res) {
    const mensagem = "Oi " + req.params.x;
    res.send(mensagem)
})
 
app.get('/:nome/:sobrenome', function (req, res) {
    const mensagem = 'Oi ' + req.params.nome + ' ' + req.params.sobrenome;
    res.send(mensagem)
});
 
 
 
 
app.get('/soma/:i/:j', function (req, res) {
 
    const soma = parseFloat(req.params.i) + parseFloat(req.params.j)
    const i = express()
    const j = express()
    res.send("Resultado: " + soma)
})
app.get('/mult/:k/:l', function (req, res) {
 
    const mult = parseFloat(req.params.k) * parseFloat(req.params.l)
    const k = express()
    const l = express()
    res.send("Resultado: " + mult)
})
app.get('/div/:m/:n', function (req, res) {
    const div = parseFloat(req.params.m) / parseFloat(req.params.n)
    const m = express()
    const n = express()
    res.send("Resultado: " + div)
})
 
app.get('/subt/:o/:p', function (req, res) {
    const subt = parseFloat(req.params.o) - parseFloat(req.params.p)
    const o = express()
    const p = express()
    res.send("Resultado: " + subt)
 
 
 
 
})
*/
app.listen(3000);


