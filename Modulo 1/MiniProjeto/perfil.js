document.addEventListener('DOMContentLoaded', () => {
    // Simulando o usuário e o total de árvores plantadas
    const usuarioFake = {
      nome: "João Reflorestador",
      arvore: localStorage.getItem("arvore") || "pau-brasil", // pega a árvore do cadastro
      arvoresPlantadas: parseInt(localStorage.getItem("totalPlantadas")) || 1500 // pega o total salvo
    };
  
    const nome = document.getElementById("nomeUsuario");
    const especie = document.getElementById("arvoreUsuario");
    const total = document.getElementById("totalArvores");
    const avatar = document.getElementById("avatar");
  
    nome.textContent = usuarioFake.nome;
    especie.textContent = usuarioFake.arvore.replace("-", " ");
    total.textContent = usuarioFake.arvoresPlantadas;
  
    // Função para escolher imagem com base na árvore e quantidade
    function obterAvatar(arvore, quantidade) {
      let fase = "1";
      if (quantidade >= 1500) fase = "4";
      else if (quantidade >= 700) fase = "3";
      else if (quantidade >= 300) fase = "2";
      else if (quantidade >= 100) fase = "1";
  
      return `img/${arvore}-${fase}.jpg`;
    }
  
    avatar.src = obterAvatar(usuarioFake.arvore, usuarioFake.arvoresPlantadas);
  });
  