document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('reflorestamentoForm');
  const resultado = document.getElementById('resultado');
  const body = document.body;
  const btnPerfil = document.getElementById('btnPerfil');

  // Aplica o tema da árvore escolhida
  const arvore = localStorage.getItem('arvore');
  if (arvore) {
    body.classList.add(arvore);
  }

  // Botão de perfil redireciona
  btnPerfil.addEventListener('click', () => {
    window.location.href = 'perfil.html';
  });

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const quantidade = document.getElementById('quantidade').value;
    const especie = document.getElementById('especie').value;

    const objeto = {
      usuario: "", // pode preencher futuramente
      quantidade: parseInt(quantidade),
      especie: especie
    };

    resultado.textContent = JSON.stringify(objeto, null, 2);
    alert("Reflorestamento registrado!");
  });
});
