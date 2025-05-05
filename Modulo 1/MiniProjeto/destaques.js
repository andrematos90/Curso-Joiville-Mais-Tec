document.addEventListener("DOMContentLoaded", () => {
   
    const usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];
    
 
    usuarios.sort((a, b) => b.totalPlantadas - a.totalPlantadas);
    
  
    const topUsuarios = usuarios.slice(0, 3);
    
    
    const destaquesContainer = document.getElementById("destaques");

    btnPerfil.addEventListener("click", () => {
      window.location.href = "perfil.html";
    });
  
    btnRelatorio?.addEventListener("click", () => {
      window.location.href = "relatorio.html";
    });
  
    btnDestaques?.addEventListener("click", () => {
      window.location.href = "destaques.html";
    });
  
    
    topUsuarios.forEach(usuario => {
      const avatarUrl = `img/${usuario.arvore}-1.jpg`; 
      
      
      const divDestaque = document.createElement("div");
      divDestaque.classList.add("destaque");
      
      divDestaque.innerHTML = `
        <img src="${avatarUrl}" alt="Avatar de ${usuario.nome}">
        <p>${usuario.nome}</p>
      `;
      
     
      destaquesContainer.appendChild(divDestaque);
    });
  });
  