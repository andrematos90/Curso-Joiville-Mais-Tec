class Usuario {
  constructor(nome, senha, arvore) {
    this.nome = nome;
    this.senha = senha;
    this.arvore = arvore;
    this.totalPlantadas = 0;
  }

  gerarJson() {
    return {
      nome: this.nome,
      senha: this.senha,
      arvore: this.arvore,
      totalPlantadas: this.totalPlantadas
    };
  }
}

document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('userForm');
  const body = document.body;

  const temaSalvo = localStorage.getItem('arvore');
  if (temaSalvo) {
    body.classList.add(temaSalvo);
  }

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const nome = document.getElementById('username').value;
    const senha = document.getElementById('password').value;
    const arvore = document.getElementById('treeChoice').value;

    if (!arvore) {
      alert("Por favor, escolha uma árvore.");
      return;
    }

    const usuario = new Usuario(nome, senha, arvore);
    const usuariosSalvos = JSON.parse(localStorage.getItem("usuarios")) || [];

    const nomeExistente = usuariosSalvos.some(u => u.nome === nome);
    if (nomeExistente) {
      alert("Nome de usuário já cadastrado!");
      return;
    }

    usuariosSalvos.push(usuario.gerarJson());
    localStorage.setItem("usuarios", JSON.stringify(usuariosSalvos));
    localStorage.setItem("nomeUsuario", nome);
    localStorage.setItem("arvore", arvore);
    localStorage.setItem("totalPlantadas", 0);

    alert("Usuário cadastrado com sucesso!");

    body.className = '';
    body.classList.add(arvore);
    window.location.href = "reflorestamento.html";
  });
});
