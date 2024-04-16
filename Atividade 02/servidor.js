const express = require('express');
const app = express();
const port = 8081;
const path = require('path');

const basePath = path.join(__dirname, 'html');

const quizBancoDados = require('./Quizzes/db');
const quizPoo = require('./Quizzes/poo');
const quizWeb = require('./Quizzes/web');

app.get('/', (req, res) => {
    res.sendFile(`${basePath}/index.html`);
});

app.get('/quizBancoDados', (req, res) => {
    res.send(quizBancoDados);
});

app.get('/quizPoo', (req, res) => {
    res.send(quizPoo);
});

app.get('/quizWeb', (req, res) => {
    res.send(quizWeb);
});

app.listen(port, () => {
    console.log(`Servidor executando na porta ${port}`);
});