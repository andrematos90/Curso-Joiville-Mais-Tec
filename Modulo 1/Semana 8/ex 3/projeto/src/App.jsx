import React from 'react';
import Menu from './components/menu/Menu';
import Gnocchi from './components/gnocchi/Gnocchi'
import Molhos from './components/molhos/Molhos'
import './App.css';

function App() {
  return (
    <div>
      <Menu />
      <Gnocchi />
      <Molhos />
    </div>
  );
}

export default App;
