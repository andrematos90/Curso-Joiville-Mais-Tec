/*Deveremos criar um login para nosso jogo da forca.

Esse login será somente perguntado o nome/nickname do jogador e tendo um botão de iniciar.*/

 // Login
 document.getElementById("btnIniciar").addEventListener("click", () => {
    const nome = document.getElementById("nomeJogador").value.trim();
    if (nome === "") {
      alert("Por favor, insira seu nome para jogar!");
      return;
    }

    document.getElementById("login").style.display = "none";
    document.getElementById("jogo").style.display = "block";
    document.getElementById("jogadorExibido").textContent = nome;
    exibirEspacos();
  });

//jogo
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
  
  document.getElementById("verificarLetra").addEventListener("click", () => {
    const input = document.getElementById("entradaLetra");
    const letra = input.value.toLowerCase();
  
    if (!letra.match(/[a-z]/) || letra.length !== 1) {
      alert("Digite apenas uma letra válida.");
      input.value = '';
      return;
    }
  
    if (letrasCertas.includes(letra) || letrasErradas.includes(letra)) {
      alert("Você já tentou essa letra.");
      input.value = '';
      return;
    }
  
    if (palavraSorteada.includes(letra)) {
      letrasCertas.push(letra);
    } else {
      letrasErradas.push(letra);
      document.getElementById("letrasErradas").textContent = letrasErradas.join(", ");
    }

    
  
    exibirEspacos();
    input.value = '';

    const todasLetrasAcertadas = palavraSorteada.split("").every(letra => letrasCertas.includes(letra));
    if (todasLetrasAcertadas) {
      setTimeout(() => {
        alert("Parabéns! Você acertou a palavra: " + palavraSorteada);
      }, 100); 
    }
  });
 