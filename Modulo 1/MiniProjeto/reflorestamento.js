document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('reflorestamentoForm');
  const resultado = document.getElementById('resultado');
  const btnPerfil = document.getElementById('btnPerfil');

  btnPerfil.addEventListener("click", () => {
    window.location.href = "perfil.html";
  });

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const qtd = parseInt(document.getElementById('quantidade').value);

    let totalAnterior = parseInt(localStorage.getItem('totalPlantadas')) || 0;
    let novoTotal = totalAnterior + qtd;

    localStorage.setItem('totalPlantadas', novoTotal);
    resultado.textContent = `Você registrou ${qtd} árvores. Total agora: ${novoTotal}.`;
    form.reset();
  });
});
