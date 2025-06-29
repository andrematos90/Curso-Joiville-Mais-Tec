// src/routes/index.tsx
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import Filmes from '../pages/Filmes';
import DetalhesFilme from '../pages/DetalhesFilme';
import Contato from '../pages/Contato';

export function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/filmes" element={<Filmes />} />
        <Route path="/filmes/:id" element={<DetalhesFilme />} />
        <Route path="/contato" element={<Contato />} />
      </Routes>
    </BrowserRouter>
  );
}
