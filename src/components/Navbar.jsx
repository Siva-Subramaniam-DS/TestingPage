import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { Sun } from 'lucide-react';
import '../styles/Layout.css';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    document.body.style.overflow = isMobileMenuOpen ? 'auto' : 'hidden';
  };

  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container">
        <nav className="navbar">
          <div className="logo">
            <Sun size={32} color={isScrolled ? "#0F4C81" : "#ffffff"} />
            <span style={{ color: isScrolled ? "#0F4C81" : "#ffffff" }}>KON Sun Energy</span>
          </div>
          
          <ul className="nav-links">
            <li><NavLink to="/" end>Home</NavLink></li>
            <li><NavLink to="/about">About Us</NavLink></li>
            <li><NavLink to="/solutions">Solar Solutions</NavLink></li>
            <li><NavLink to="/contact">Contact Us</NavLink></li>
          </ul>
          
          <button className="menu-toggle" onClick={toggleMobileMenu} aria-label="Toggle menu">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="3" y1="12" x2="21" y2="12"></line>
              <line x1="3" y1="6" x2="21" y2="6"></line>
              <line x1="3" y1="18" x2="21" y2="18"></line>
            </svg>
          </button>
        </nav>
      </div>
      
      <div className={`mobile-menu ${isMobileMenuOpen ? 'active' : ''}`}>
        <div className="mobile-menu-header">
          <button className="mobile-menu-close" onClick={toggleMobileMenu} aria-label="Close menu">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>
        </div>
        
        <ul className="mobile-nav-links">
          <li><NavLink to="/" end onClick={toggleMobileMenu}>Home</NavLink></li>
          <li><NavLink to="/about" onClick={toggleMobileMenu}>About Us</NavLink></li>
          <li><NavLink to="/solutions" onClick={toggleMobileMenu}>Solar Solutions</NavLink></li>
          <li><NavLink to="/contact" onClick={toggleMobileMenu}>Contact Us</NavLink></li>
        </ul>
      </div>
      
      <div className={`overlay ${isMobileMenuOpen ? 'active' : ''}`} onClick={toggleMobileMenu}></div>
    </header>
  );
};

export default Navbar;