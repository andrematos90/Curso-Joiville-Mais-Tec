import React from 'react';
import './Footer.css';
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <p className="address">Rua das Massas, 123 - Bairro Italiano - São Paulo/SP</p>
      <div className="social-icons">
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><FaFacebook /></a>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
      </div>
      <p className="copyright">© 2025 Mamamia Massas. Todos os direitos reservados.</p>
    </footer>
  );
};

export default Footer;
