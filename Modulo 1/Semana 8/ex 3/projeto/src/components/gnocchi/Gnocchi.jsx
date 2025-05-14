import React from 'react';
import './Gnocchi.css';
import Molhos from '../molhos/Molhos';


const gnocchiData = [
  {
    nome: 'Gnocchi de Batata',
    preco: 'R$ 32,00',
    imagem: '/public/gnocchi-batata.jpg',
  },
  {
    nome: 'Gnocchi de Cenoura',
    preco: 'R$ 33,00',
    imagem: '/public/gnocchi-cenoura.jpg',
  },
  {
    nome: 'Gnocchi de Espinafre',
    preco: 'R$ 34,00',
    imagem: '/public/gnocchi-espinafre.jpg',
  },
  {
    nome: 'Gnocchi de Beterraba',
    preco: 'R$ 33,00',
    imagem: '/public/gnocchi-beterraba.jpeg',
  },
];

const Gnocchi = () => {
  return (
    <>
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

    <section>
      <Molhos/>
    </section>
    </>
  );
};

export default Gnocchi;
