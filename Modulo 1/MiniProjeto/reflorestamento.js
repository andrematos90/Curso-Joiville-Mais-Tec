class Reflorestamento {
    constructor(quantidade, especie, usuario = "") {
      this.quantidade = quantidade;
      this.especie = especie;
      this.usuario = usuario; 
    }
  
    gerarJson() {
      return {
        quantidade: this.quantidade,
        especie: this.especie,
        usuario: this.usuario
      };
    }
  }
  
  document.addEventListener('DOMContentLoaded', () => {
  
    const tema = localStorage.getItem('arvore');
    if (tema) {
      document.body.classList.add(tema);
    }
  
    const form = document.getElementById('reflorestamentoForm');
  
    form.addEventListener('submit', (e) => {
      e.preventDefault();
  
      const quantidade = parseInt(document.getElementById('quantidade').value);
      const especie = document.getElementById('especie').value;
      const usuario = localStorage.getItem('usuario') || "";
  
      if (!quantidade || !especie) {
        alert("Preencha todos os campos.");
        return;
      }
  
      const registro = new Reflorestamento(quantidade, especie, usuario);
  
      console.log("Registro de reflorestamento para envio:", registro.gerarJson());
      alert("Ação registrada com sucesso!");
  
      form.reset();
    });
  });
  