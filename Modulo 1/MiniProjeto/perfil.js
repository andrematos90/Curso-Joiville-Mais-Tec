document.addEventListener('DOMContentLoaded', () => {
  const arvore = localStorage.getItem('arvore');
  if (arvore) {
    document.body.classList.add(arvore);
  }

  const nome = document.getElementById("nomeUsuario");
  const especie = document.getElementById("arvoreUsuario");
  const total = document.getElementById("totalArvores");
  const avatar = document.getElementById("avatar");
  const bio = document.getElementById("bio");
  const btnSalvarBio = document.getElementById("salvarBio");


  const nomeSalvo = localStorage.getItem("nomeUsuario") || "Usuário não identificado";
  const arvoreEscolhida = localStorage.getItem("arvore") || "pau-brasil";
  const totalPlantadas = parseInt(localStorage.getItem("totalPlantadas")) || 0;
  const bioSalva = localStorage.getItem("bio") || "";

  nome.textContent = nomeSalvo;
  especie.textContent = arvoreEscolhida.replace("-", " ");
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

  avatar.src = obterAvatar(arvoreEscolhida, totalPlantadas);

  btnSalvarBio.addEventListener("click", () => {
    localStorage.setItem("bio", bio.value);
    alert("Bio atualizada com sucesso!");
  });
});
