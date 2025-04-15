const userId = 1; // Pode deixar dinâmico depois

function mostrarResultado(data) {
document.getElementById('resultado').innerHTML = `<pre>${JSON.stringify(data, null, 2)}</pre>`;
}

function buscarDadosNaoEditaveis() {
fetch(`/api/dados-nao-editaveis/${userId}`)
.then(res => res.json())
.then(mostrarResultado);
}

function buscarDadosEditaveis() {
fetch(`/api/dados-editaveis/${userId}`)
.then(res => res.json())
.then(mostrarResultado);
}

function listarContatos() {
fetch(`/api/contatos/${userId}`)
.then(res => res.json())
.then(mostrarResultado);
}

function listarConversas() {
fetch(`/api/conversas/${userId}`)
.then(res => res.json())
.then(mostrarResultado);
}

function buscarConversaEspecifica() {
const nomeContato = prompt("Nome do contato (ex: Ana Maria)");
fetch(`/api/conversa/${userId}/${encodeURIComponent(nomeContato)}`)
.then(res => res.json())
.then(mostrarResultado);
}

function buscarPalavraChave() {
const nomeContato = prompt("Nome do contato");
const palavra = prompt("Palavra-chave");
fetch(`/api/pesquisa/${userId}/${encodeURIComponent(nomeContato)}/${encodeURIComponent(palavra)}`)
.then(res => res.json())
.then(mostrarResultado);
}