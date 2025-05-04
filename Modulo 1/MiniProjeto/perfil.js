document.addEventListener('DOMContentLoaded', () => {
  const nome = document.getElementById("nomeUsuario");
  const especie = document.getElementById("arvoreUsuario");
  const total = document.getElementById("totalArvores");
  const avatar = document.getElementById("avatar");
  const bio = document.getElementById("bio");
  const btnSalvarBio = document.getElementById("salvarBio");

  // Pega os dados do localStorage
  const nomeSalvo = localStorage.getItem("nomeUsuario") || "Usuário não identificado";
  const arvore = localStorage.getItem("arvore") || "pau-brasil";
  const totalPlantadas = parseInt(localStorage.getItem("totalPlantadas")) || 0;
  const bioSalva = localStorage.getItem("bio") || "";

  nome.textContent = nomeSalvo;
  especie.textContent = arvore.replace("-", " ");
  total.textContent = totalPlantadas;
  bio.value = bioSalva;

  function obterAvatar(arvore, quantidade) {
    let fase = "1";
    if (quantidade >= 1500) fase = "4";
    else if (quantidade >= 700) fase = "3";
    else if (quantidade >= 300) fase = "2";
    else if (quantidade >= 100) fase = "1";
    return `img/${arvore}-${fase}.jpg`;
  }

  avatar.src = obterAvatar(arvore, totalPlantadas);

  btnSalvarBio.addEventListener("click", () => {
    localStorage.setItem("bio", bio.value);
    alert("Bio atualizada com sucesso!");
  });
});
