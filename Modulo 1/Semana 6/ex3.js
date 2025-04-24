/*Precisaremos que o usuário informe ao sistema qual letra será verificada (usaremos um evento, a sua escolha para isso...).

Existem várias formas de fazer esse processo e você tem liberada para manipular o html e adicionar itens, se necessário). Caso a letra esteja na palavra, ela deve ser exibida em sua posição na forca; caso não esteja, ela deve ir para uma área de "letras erradas". O usuário não pode informar duas vezes a mesma letra: o sistema não deve permitir isso.*/



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
    
  });
  