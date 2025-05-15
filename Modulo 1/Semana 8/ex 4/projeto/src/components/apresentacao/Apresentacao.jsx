import React from 'react';
import './Apresentacao.css';
import fachada from '../../../public/fachada.jpg'; 

function Apresentacao(){
  return (
    <div>
      
      <div className="container">
        <div className="text-content">
          <h2>Servindo massas à mais de 70 anos</h2>
          <p>Qualidade passada por gerações</p>
        </div>
        <div className="image-content">
          <div className="image">
            <img src={fachada} alt="Fachada do restaurante" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Apresentacao;
