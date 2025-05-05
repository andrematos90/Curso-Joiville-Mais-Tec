class Usuario {
    constructor(nome, senha, arvore) {
      this.nome = nome;
      this.senha = senha;
      this.arvore = arvore;
    }
  
    gerarJson() {
      return {
        usuario: this.nome,
        senha: this.senha,
        arvore: this.arvore
      };
    }
  }
  
  document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('userForm');
    const body = document.body;
  
    // Aplica o tema salvo anteriormente, se existir
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
  
      // Salva o tema no localStorage
      localStorage.setItem('arvore', arvore);
  
      // Aplica a classe de tema
      body.className = ''; // Limpa classes anteriores
      body.classList.add(arvore);
  
      
      console.log("Objeto para envio:", usuario.gerarJson());
  
      alert("Usuário cadastrado com sucesso!");
      
      localStorage.setItem("nomeUsuario", nome);

      window.location.href = "reflorestamento.html";
      
    });
  });
  