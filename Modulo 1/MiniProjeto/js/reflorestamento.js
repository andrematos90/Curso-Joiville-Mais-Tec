document.addEventListener('DOMContentLoaded', () => {
  const arvore = localStorage.getItem('arvore');
  if (arvore) {
    document.body.classList.add(arvore);
  }

  const form = document.getElementById('reflorestamentoForm');
  const resultado = document.getElementById('resultado');
  const btnPerfil = document.getElementById('btnPerfil');

  btnPerfil.addEventListener("click", () => {
    window.location.href = "perfil.html";
  });

  btnRelatorio?.addEventListener("click", () => {
    window.location.href = "relatorio.html";
  });

  btnDestaques?.addEventListener("click", () => {
    window.location.href = "destaques.html";
  });

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const qtd = parseInt(document.getElementById('quantidade').value);

    const nomeUsuario = localStorage.getItem("nomeUsuario");
    let usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];

    let usuario = usuarios.find(u => u.nome === nomeUsuario);
    if (usuario) {
      usuario.totalPlantadas = (usuario.totalPlantadas || 0) + qtd;
      localStorage.setItem("usuarios", JSON.stringify(usuarios));
      localStorage.setItem("totalPlantadas", usuario.totalPlantadas);
    }

    resultado.textContent = `Você registrou ${qtd} árvores. Total agora: ${usuario?.totalPlantadas || qtd}.`;
    form.reset();
  });
});
