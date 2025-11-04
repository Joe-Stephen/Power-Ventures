import React, { useState, useEffect } from 'react';
import './Navbar.css';
import logo from '../uploads/powerventures_logo.jpg';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="nav-container">
        <div className="nav-logo">
          <img src={logo} alt="Power Ventures" />
        </div>
        <ul className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
          <li className="nav-item">
            <a href="#home" className="nav-link" onClick={closeMenu}>Home</a>
          </li>
          <li className="nav-item">
            <a href="#brands" className="nav-link" onClick={closeMenu}>Brands</a>
          </li>
          <li className="nav-item">
            <a href="#products" className="nav-link" onClick={closeMenu}>Products</a>
          </li>
          <li className="nav-item">
            <a href="#testimonials" className="nav-link" onClick={closeMenu}>Testimonials</a>
          </li>
          <li className="nav-item">
            <a href="#about" className="nav-link" onClick={closeMenu}>About</a>
          </li>
          <li className="nav-item">
            <a href="#contact" className="nav-link" onClick={closeMenu}>Contact</a>
          </li>
        </ul>
        <div className={`hamburger ${isMenuOpen ? 'active' : ''}`} onClick={toggleMenu}>
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
