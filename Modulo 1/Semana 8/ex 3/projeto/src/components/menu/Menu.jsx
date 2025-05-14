import React from 'react';
import './Menu.css';
import { Link } from 'react-router-dom';

const Menu = () => {
  return (
    <nav className="menu">
      <h1 className="logo">Mamamia Massas</h1>
      <ul className="menu-items">
        <li><Link to="apresentacao">Início</Link></li>
        <li><Link to="gnocchi">Gnocchi</Link></li>
        <li><Link to="pastas">Pastas</Link></li>
        <li><Link to="bebidas">Bebidas</Link></li>
      
      </ul>
    </nav>
  );
};

export default Menu;