import React from 'react';
import './Bebidas.css';
import { FaTint, FaGlassWhiskey, FaWineGlassAlt } from 'react-icons/fa';

const bebidasData = {
  Água: {
    icone: <FaTint />,
    cor: '#E0F7FA',
    itens: [
      { nome: 'Água sem gás', preco: 'R$ 3,00' },
      { nome: 'Água com gás', preco: 'R$ 4,00' },
    ]
  },
  Refrigerante: {
    icone: <FaGlassWhiskey />,
    cor: '#FFF3E0',
    itens: [
      { nome: 'Coca-Cola (350ml)', preco: 'R$ 6,00' },
      { nome: 'Guaraná (350ml)', preco: 'R$ 5,50' },
      { nome: 'Sprite (350ml)', preco: 'R$ 5,50' },
    ]
  },
  Sucos: {
    icone: <FaWineGlassAlt />,
    cor: '#F3E5F5',
    itens: [
      { nome: 'Suco de Morango', preco: 'R$ 7,00' },
      { nome: 'Suco de Laranja', preco: 'R$ 6,50' },
      { nome: 'Suco de Uva', preco: 'R$ 6,50' },
    ]
  }
};

const Bebidas = () => {
  return (
    <section className="bebidas">
      <h2>Cardápio de Bebidas</h2>
      {Object.entries(bebidasData).map(([categoria, { icone, cor, itens }]) => (
        <div key={categoria} className="categoria" style={{ backgroundColor: cor }}>
          <h3>
            <span className="icone">{icone}</span>
            {categoria}
          </h3>
          <ul>
            {itens.map((item, index) => (
              <li key={index} className="bebida-item">
                <span>{item.nome}</span>
                <span className="preco">{item.preco}</span>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </section>
  );
};

export default Bebidas;
