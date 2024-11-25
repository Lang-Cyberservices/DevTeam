import React, { useState, useRef, useEffect } from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';

import logo from "../assets/images/logo.png";

const Navbar: React.FC = () => {
  const [isNavExpanded, setNavExpanded] = useState(false);
  const ref = useRef<HTMLDivElement | null>(null);

  const toggleNav = () => {
    setNavExpanded(!isNavExpanded);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        setNavExpanded(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [ref]);

  return (
    <header>
      <nav 
        className={`navbar`} 
        data-expanded={isNavExpanded} // Adicionando o atributo data-expanded
        ref={ref} 
        data-test="component-navbar" 
        aria-expanded={isNavExpanded}
      >
        <div className="brand">
          <img src={logo} alt="" className="logo nav-item menu"/>
        </div>      

        <div className={`nav-center ${isNavExpanded ? 'show' : ''}`}>
          <ul>
            <li><Link className="nav-item menu" to="/">Inicio</Link></li>
            <li><Link className="nav-item menu" to="/sobre">Sobre Nós</Link></li>           
            <li><Link className="nav-item menu" to="/projetos">Projetos</Link></li>
            <li><Link className="nav-item menu" to="/contact">Contato</Link></li>
          </ul>
        </div>


        <button className="hamburger" onClick={toggleNav}>
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </button>
      </nav>
    </header>
  );
};

export default Navbar;
