import React from 'react';
import './Menu.css';

const Menu = () => {
  return (
    <nav className="menu">
      <h1 className="logo">Mamamia Massas</h1>
      <ul className="menu-items">
        <li><a href="#inicio">Início</a></li>
        <li><a href="#gnocchi">Gnocchi</a></li>
        <li><a href="#pastas">Pastas</a></li>
        <li><a href="#bebidas">Bebidas</a></li>
      </ul>
    </nav>
  );
};

export default Menu;