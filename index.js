import express from 'express';

const app = express();

app.get('/', function (req, res) {
    res.send("Oi mundo")
})

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
app.listen(3000);


