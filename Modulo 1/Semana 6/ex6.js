/*Quando o jogador informar seu nome/nick, esse nick deve ficar salvo no local storage e, o nome do usuário, deve aparecer na finalização da forca, onde temos a parabenização (Exercício 4).*/

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
  const nome = localStorage.getItem("nomeJogador") || "Jogador";
  document.getElementById("jogadorExibido").textContent = nome;
  
  function exibirEspacos() {
    divPalavra.innerHTML = '';
    for (let letra of palavraSorteada) {
      const span = document.createElement("span");
      span.classList.add("letra");
      span.textContent = letrasCertas.includes(letra) ? letra : "";
      divPalavra.appendChild(span);
    }
  
    verificarVitoria();
  }
  
  function verificarVitoria() {
    let venceu = true;
    for (let letra of palavraSorteada) {
      if (!letrasCertas.includes(letra)) {
        venceu = false;
        break;
      }
    }
  
    if (venceu) {
      document.getElementById("mensagemFinal").style.display = "block";
      document.getElementById("textoFinal").textContent = `Parabéns, ${nome}! Você venceu o jogo da forca! 🎉`;
      document.getElementById("entradaLetra").disabled = true;
      document.getElementById("verificarLetra").disabled = true;
    }
  }
  
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
  });
  
  exibirEspacos();
  