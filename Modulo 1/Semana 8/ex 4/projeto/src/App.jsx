import React from 'react';
import Menu from './components/menu/Menu';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Apresentacao from './components/apresentacao/Apresentacao';
import Gnocchi from './components/gnocchi/Gnocchi';
import Pastas from './components/pastas/Pastas';



function App() {
  return (
    <div>
      <Router>
      <div>
        <Menu />
        <Routes>
          <Route path="/apresentacao" element={<Apresentacao />} />
          <Route path="/gnocchi" element={<Gnocchi />} />
          <Route path="pastas" element={<Pastas/>} />
        </Routes>
      </div>
    </Router>
    </div>
  );
}

export default App;
