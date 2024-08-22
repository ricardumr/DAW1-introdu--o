import express from 'express';

const app = express();

app.set('view engine', 'ejs');
//configura a pasta views para outro local 
//app.set('view', path.join(__dirname, 'tela'));

app.use(express.urlencoded({ extended: true }));

app.get('/Calculadora', function (req, res) {
    //res.send("Oi mundo")
    res.render('calculadora')
})/*
    app.post('/Calculadora', function (req, res) {
        res.send("resultado" + req.body.op)
    })*/

app.post('/Calculadora', function (req, res) {
    if (req.body.op == "soma") {
        const soma = parseFloat(req.body.op1) + parseFloat(req.body.op2)
        res.send("Resultado da soma: " + soma)
    }
    else if (req.body.op == "subtração") {
        const subtracao = parseFloat(req.body.op1) - parseFloat(req.body.op2)
        res.send("Resultado da subtração: " + subtracao)
    }
    else if (req.body.op == "multiplicacao") {
        const mult = parseFloat(req.body.op1) * parseFloat(req.body.op2)
        res.send("Resultado da multiplicação: " + mult)
    }
    else if (req.body.op == "divisao") {
        const div = parseFloat(req.body.op1) / parseFloat(req.body.op2)
        res.send("Resultado da divisão: " + div)
    }
    else {
        res.send("Operação inválida!")
    }
})









/*
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


