import React from 'react';
import './Pastas.css';
import Molhos from '../Molhos/Molhos';

const pastasData = [
  {
    nome: 'Espaguete',
    preco: 'R$ 28,00',
    imagem: 'https://www.minhareceita.com.br/app/uploads/2022/01/espaguete-ao-molho-bolonhesa-portal-minha-receita-1.jpg',
    molhos: ['Alla Puttanesca', 'Al Pesto di Basilico', 'Cacio e Pepe', 'Alla Matriciana'],
  },
  {
    nome: 'Tagliatelle',
    preco: 'R$ 30,00',
    imagem: 'https://sabores-new.s3.amazonaws.com/public/2024/11/tagliatelle-com-cogumelos.jpg',
    molhos: ['Alla Puttanesca', 'Alla Matriciana'],
  },
  {
    nome: 'Fettuccine',
    preco: 'R$ 29,00',
    imagem: 'https://static.itdg.com.br/images/1200-630/66bd30a4826f401889a07f0c1a4da242/shutterstock-2144543743-1-1-.jpg',
    molhos: ['Alla Puttanesca', 'Al Pesto di Basilico', 'Cacio e Pepe'],
  },
  {
    nome: 'Penne',
    preco: 'R$ 27,00',
    imagem: 'https://www.portalumami.com.br/app/uploads/2021/07/Penne-Integral-Alla-Putanesca-e1427310983312.jpg',
    molhos: ['Alla Puttanesca', 'Cacio e Pepe'],
  },
  {
    nome: 'Rigatoni',
    preco: 'R$ 30,00',
    imagem: 'https://www.paganinigastronomia.com.br/blog/wp-content/uploads/2024/02/rigatoni_amatriciana-1400px.jpg',
    molhos: ['Alla Matriciana'],
  },
  {
    nome: 'Pappardelle',
    preco: 'R$ 31,00',
    imagem: 'https://pastificioitaliano.com.br/img/produtos/55.jpg',
    molhos: ['Alla Puttanesca', 'Alla Matriciana'],
  },
];

const PastaCard = ({ pasta }) => (
  <div className="pasta-card">
    <img src={pasta.imagem} alt={pasta.nome} />
    <h3>{pasta.nome}</h3>
    <p className="preco">{pasta.preco}</p>
    <p className="molhos-titulo">Molhos disponíveis:</p>
    <ul className="molhos-lista">
      {pasta.molhos.map((molho, i) => (
        <li key={i}>{molho}</li>
      ))}
    </ul>
  </div>
);

const Pastas = () => {
  return (
    <section className="pastas-section">
      <h2>Massas Artesanais</h2>
      <div className="pastas-grid">
        {pastasData.map((pasta, index) => (
          <PastaCard key={index} pasta={pasta} />
        ))}
      </div>
    </section>
  );
};

export default Pastas;
