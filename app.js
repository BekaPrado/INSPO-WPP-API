const express = require('express');
const app = express();
const cors = require('cors');
const funcoes = require('./data/funcoes.js');

app.use(cors());
app.use(express.json());
app.use(express.static('public')); // Serve HTML/CSS/JS do front

// Rotas da API:
app.get('/api/dados-nao-editaveis/:id', (req, res) => {
res.json(funcoes.getDadosUsuarioN(Number([req.params.id](http://req.params.id/))));
});

app.get('/api/dados-editaveis/:id', (req, res) => {
res.json(funcoes.getDadosUsuarioA(Number([req.params.id](http://req.params.id/))));
});

app.get('/api/contatos/:id', (req, res) => {
res.json(funcoes.getTodosOsContatos(Number([req.params.id](http://req.params.id/))));
});

app.get('/api/conversas/:id', (req, res) => {
res.json(funcoes.getListaDeConversas(Number([req.params.id](http://req.params.id/))));
});

app.get('/api/conversa/:id/:nomeContato', (req, res) => {
const { id, nomeContato } = req.params;
res.json(funcoes.filtroIdENome(Number(id), nomeContato));
});

app.get('/api/pesquisa/:id/:nomeContato/:palavra', (req, res) => {
const { id, nomeContato, palavra } = req.params;
res.json(funcoes.filtroPalavraChave(Number(id), nomeContato, palavra));
});

app.listen(3000, () => console.log('API rodando na porta 3000'));