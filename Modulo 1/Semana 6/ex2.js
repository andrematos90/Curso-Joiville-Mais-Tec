/*Crie um array com 30 palavras que serão usadas para nosso jogo da forca: as palavras são a sua escolha e não usaremos acentuação e nem letras especiais.
Será feito um sorteio dentre uma dessas palavras para termos nossa palavra da forca. No momento que a mesma for escolhida, temos de preparar nossa aplicação, mostrando os espaços para letras conforme o tamanho da nossa palavra sorteada.*/

const palavras = [
    "banana", "computador", "cachorro", "girassol", "elefante", "violao", "cadeira", "janela", "teclado", "guitarra",
    "livro", "caneta", "mochila", "abacaxi", "telefone", "camiseta", "bicicleta", "escola", "futebol", "chaveiro",
    "travesseiro", "geladeira", "ventilador", "montanha", "oculos", "chuveiro", "areia", "praia", "trator", "espelho"
  ];

  let palavraSelecionada = "";
  let letrasCorretas = [];
  let letrasErradas = [];

  function iniciarJogo() {
    const indice = Math.floor(Math.random() * palavras.length);
    palavraSelecionada = palavras[indice];
    letrasCorretas = [];
    letrasErradas = [];
    atualizarExibicaoPalavra();
    document.getElementById("wrongLetters").textContent = "Letras erradas: ";
    document.getElementById("message").textContent = "";
  }

  function atualizarExibicaoPalavra() {
    const display = palavraSelecionada
      .split("")
      .map(letra => letrasCorretas.includes(letra) ? letra : "_")
      .join(" ");
    document.getElementById("wordDisplay").textContent = display;

    if (!display.includes("_")) {
      document.getElementById("message").textContent = "Parabéns! Você venceu!";
    }
  }

  function tentarLetra() {
    const input = document.getElementById("letterInput");
    const letra = input.value.toLowerCase();
    input.value = "";

    if (!letra || letra.length !== 1 || !/[a-z]/.test(letra)) {
      document.getElementById("message").textContent = "Digite uma letra válida.";
      return;
    }

    if (letrasCorretas.includes(letra) || letrasErradas.includes(letra)) {
      document.getElementById("message").textContent = "Você já tentou essa letra.";
      return;
    }

    if (palavraSelecionada.includes(letra)) {
      letrasCorretas.push(letra);
    } else {
      letrasErradas.push(letra);
      document.getElementById("wrongLetters").textContent = "Letras erradas: " + letrasErradas.join(", ");
    }

    document.getElementById("message").textContent = "";
    atualizarExibicaoPalavra();
  }

  window.onload = iniciarJogo;