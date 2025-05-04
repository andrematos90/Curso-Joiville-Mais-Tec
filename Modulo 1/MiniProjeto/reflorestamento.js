document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('reflorestamentoForm');
  const resultado = document.getElementById('resultado');
  const body = document.body;

  // Recupera árvore do localStorage e aplica o tema correspondente
  const arvore = localStorage.getItem('arvore');
  if (arvore) {
    body.classList.add(arvore);
  }

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const quantidade = document.getElementById('quantidade').value;
    const especie = document.getElementById('especie').value;

    const objeto = {
      usuario: "", // preenchido futuramente
      quantidade: parseInt(quantidade),
      especie: especie
    };

    resultado.textContent = JSON.stringify(objeto, null, 2);
    alert("Reflorestamento registrado!");
  });
});
