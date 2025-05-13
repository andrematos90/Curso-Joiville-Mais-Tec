import React from 'react';
import './Gnocchi.css';

const gnocchiData = [
  {
    nome: 'Gnocchi de Batata',
    preco: 'R$ 32,00',
    imagem: 'https://via.placeholder.com/200?text=Batata',
  },
  {
    nome: 'Gnocchi de Espinafre',
    preco: 'R$ 34,00',
    imagem: 'https://via.placeholder.com/200?text=Espinafre',
  },
  {
    nome: 'Gnocchi de Cenoura',
    preco: 'R$ 33,00',
    imagem: 'https://via.placeholder.com/200?text=Cenoura',
  },
  {
    nome: 'Gnocchi de Beterraba',
    preco: 'R$ 33,00',
    imagem: 'https://via.placeholder.com/200?text=Beterraba',
  },
];

const Gnocchi = () => {
  return (
    <section className="gnocchi-section">
      <h2>Opções de Gnocchi</h2>
      <div className="gnocchi-grid">
        {gnocchiData.map((item, index) => (
          <div className="gnocchi-card" key={index}>
            <img src={item.imagem} alt={item.nome} />
            <h3>{item.nome}</h3>
            <p>{item.preco}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Gnocchi;
