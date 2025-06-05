import { Link, useLocation } from 'react-router-dom';
import { useTheme } from '../../../contexts/ThemeContext';
import { Moon, Sun } from 'lucide-react';
import './Menu.css';

const Menu = () => {
  const { theme, toggleTheme } = useTheme();
  const location = useLocation();

  return (
    <nav className="menu">
      <ul>
        <li className={location.pathname === '/' ? 'active' : ''}>
          <Link to="/">Início</Link>
        </li>
        <li className={location.pathname === '/filmes' ? 'active' : ''}>
          <Link to="/filmes">Filmes</Link>
        </li>
        <li className={location.pathname === '/contato' ? 'active' : ''}>
          <Link to="/contato">Contato</Link>
        </li>
      </ul>
      <button onClick={toggleTheme} className="theme-toggle" aria-label="Toggle Theme">
        {theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
      </button>
    </nav>
  );
};

export default Menu;
