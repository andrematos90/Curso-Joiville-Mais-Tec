document.addEventListener("DOMContentLoaded", () => {
  const btnBuscar = document.getElementById("btnBuscar");
  const inputNome = document.getElementById("buscaNome");
  const inputArvore = document.getElementById("buscaArvore");
  const resultados = document.getElementById("resultados");

  function normalizar(texto) {
    return texto.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();
  }

  btnBuscar.addEventListener("click", () => {
    const nomeBusca = normalizar(inputNome.value.trim());
    const arvoreBusca = normalizar(inputArvore.value.trim());
    const usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];

    const encontrados = usuarios.filter(u => {
      const nomeMatch = nomeBusca ? normalizar(u.nome).includes(nomeBusca) : true;
      const arvoreMatch = arvoreBusca ? normalizar(u.arvore).includes(arvoreBusca) : true;
      return nomeMatch && arvoreMatch;
    });

    resultados.innerHTML = "";

    if (encontrados.length === 0) {
      resultados.innerHTML = "<p>Nenhum resultado encontrado.</p>";
    } else {
      encontrados.forEach(u => {
        resultados.innerHTML += `
          <p><strong>Usuário:</strong> ${u.nome}<br>
          <strong>Árvore escolhida:</strong> ${u.arvore}<br>
          <strong>Total de árvores plantadas:</strong> ${u.totalPlantadas}</p>
          <hr>
        `;
      });
    }
  });
});
