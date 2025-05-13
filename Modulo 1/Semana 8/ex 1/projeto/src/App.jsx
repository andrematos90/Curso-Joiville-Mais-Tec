import React from 'react';
import Menu from './components/Menu/Menu';
import './App.css';
import fachada from '../public/fachada.jpg'; 

function App() {
  return (
    <div>
      <Menu />
      <main className="container">
        <div className="text-content">
          <h2>Servindo massas à mais de 70 anos</h2>
          <p>Qualidade passada por gerações</p>
        </div>
        <div className="image-content">
          <div className="frame">
            <img src={fachada} alt="Fachada do restaurante" />
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
