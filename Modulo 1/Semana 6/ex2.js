/*Crie um array com 30 palavras que serão usadas para nosso jogo da forca: as palavras são a sua escolha e não usaremos acentuação e nem letras especiais.
Será feito um sorteio dentre uma dessas palavras para termos nossa palavra da forca. No momento que a mesma for escolhida, temos de preparar nossa aplicação, mostrando os espaços para letras conforme o tamanho da nossa palavra sorteada.*/



const palavras = [
  "banana", "computador", "abacaxi", "guitarra", "violao",
  "carro", "bicicleta", "sorvete", "elefante", "jacare",
  "pinguim", "tigre", "leopardo", "girafa", "camelo",
  "foguete", "planeta", "estrela", "astronauta", "universo",
  "livro", "caneta", "caderno", "borracha", "lapis",
  "cadeira", "mesa", "janela", "porta", "chave"
];

let palavraSorteada = palavras[Math.floor(Math.random() * palavras.length)];
let letrasCertas = [];
let letrasErradas = [];

const divPalavra = document.getElementById("palavra");

function exibirEspacos() {
  divPalavra.innerHTML = '';
  for (let letra of palavraSorteada) {
    const span = document.createElement("span");
    span.classList.add("letra");
    span.textContent = letrasCertas.includes(letra) ? letra : "";
    divPalavra.appendChild(span);
  }
}

exibirEspacos();

