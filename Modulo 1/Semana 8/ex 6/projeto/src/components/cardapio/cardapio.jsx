import React from 'react';
import Menu from '../Menu/Menu';
import Apresentacao from '../apresentacao/Apresentacao';
import Gnocchi from '../gnocchi/Gnocchi';
import Pastas from '../pastas/Pastas';
import Bebidas from '../bebidas/Bebidas';
import Footer from '../footer/Footer';

const Cardapio: React.FC = () => {
  return (
    <>
      <Menu />
      <Apresentacao />
      <Gnocchi />
      <Pastas />
      <Bebidas />
      <Footer />
    </>
  );
};

export default Cardapio;
