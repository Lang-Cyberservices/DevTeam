import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

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
      <nav className={`navbar`} ref={ref}>
        <div className={`nav-center`}>
          <ul className={`nav-links ${isNavExpanded ? 'expanded' : ''}`}>
            <li>
              <Link className="nav-item" to="/">Home</Link>
            </li>
            <li>
              <Link className="nav-item" to="/sobre">Quem Sou</Link>
            </li>
            <li>
              <Link className="nav-item" to="/contato">Contato</Link>
            </li>
          </ul>
          <button className="nav-toggle" onClick={toggleNav}>
            {isNavExpanded ? 'X' : '☰'}
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
