//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
// Array para armazenar os nomes
let amigos = [];

function adicionarAmigo() {
     // Captura o valor do campo de entrada
     const inputNome = document.getElementById('amigo');
    const nome = inputNome.value.trim(); // Remove espaços extras
    // Valida a entrada
    if (nome === '') {
        alert('Por favor, insira um nome.');
        return;
    }
    // Adiciona o nome ao array
    amigos.push(nome);

    // Atualiza a lista exibida
    atualizarLista();

    // Limpa o campo de entrada
    inputNome.value = '';
}
function atualizarLista() {
    // Seleciona o elemento onde a lista será exibida
    const listaAmigos = document.getElementById('listaAmigos');

    // Limpa o conteúdo atual da lista
    listaAmigos.innerHTML = '';

    // Gera os itens da lista com os nomes dos amigos
    amigos.forEach((amigo) => {
        const item = document.createElement('li');
        item.textContent = amigo;
        listaAmigos.appendChild(item);
    });
}

function sortearAmigo() {
    // Verifica se há amigos suficientes para o sorteio
    if (amigos.length === 0) {
        alert('A lista está vazia. Adicione amigos antes de sortear!');
        return;
    }

    // Gera um índice aleatório baseado no tamanho do array
    const indiceAleatorio = Math.floor(Math.random() * amigos.length);

    // Obtém o amigo correspondente ao índice sorteado
    const amigoSorteado = amigos[indiceAleatorio];

    // Exibe o resultado do sorteio
    const resultado = document.getElementById('resultado');
    resultado.innerHTML = `<li>O amigo sorteado é: <strong>${amigoSorteado}</strong></li>`;
}