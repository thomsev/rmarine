import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './header.css';
// Import your logo image here, replace 'logoImage' with your actual logo file path
// ... other imports
import logoImage from   "../../assets/logo.png";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header>
      <nav>
        <NavLink to="/" className="logo">
          <img src={logoImage} alt="Logo" />
        </NavLink>
        <ul className={`nav-links ${isMenuOpen ? 'open' : ''}`}>
          <li><NavLink to="/boats-motors" activeClassName="active">Båt & Motorer</NavLink></li>
          <li><NavLink to="/netbutikk" activeClassName="active">Nettbutikk</NavLink></li>
          <li><NavLink to="/verksted" activeClassName="active">Verksted</NavLink></li>
          <li><NavLink to="/book-time" activeClassName="active">Bestill time</NavLink></li>
          <li><NavLink to="/contact" activeClassName="active">Kontakt</NavLink></li>
          <li><NavLink to="/about-us" activeClassName="active">Om oss</NavLink></li>
        </ul>
        <div className={`hamburger ${isMenuOpen ? 'open' : ''}`} onClick={toggleMenu}>
          <div className="line"></div>
          <div className="line"></div>
          <div className="line"></div>
        </div>
      </nav>
    </header>
  );
};

export default Header;

