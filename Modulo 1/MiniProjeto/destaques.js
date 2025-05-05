document.addEventListener("DOMContentLoaded", () => {
   
    const usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];
    
 
    usuarios.sort((a, b) => b.totalPlantadas - a.totalPlantadas);
    
  
    const topUsuarios = usuarios.slice(0, 3);
    
    
    const destaquesContainer = document.getElementById("destaques");
    
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
  