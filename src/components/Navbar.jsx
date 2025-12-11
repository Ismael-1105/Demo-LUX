import React, { useState, useEffect } from 'react';
import './Navbar.css';

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
            <div className="container nav-container">
                <a href="#" className="logo">LUX</a>

                {/* Desktop Menu */}
                <ul className={`nav-menu ${mobileMenuOpen ? 'active' : ''}`}>
                    <li><a href="#servicios" className="nav-link" onClick={() => setMobileMenuOpen(false)}>Servicios</a></li>
                    <li><a href="#equipo" className="nav-link" onClick={() => setMobileMenuOpen(false)}>Únete</a></li>
                    <li><a href="#instagram" className="nav-link" onClick={() => setMobileMenuOpen(false)}>Instagram</a></li>
                    <li><a href="#contacto" className="btn btn-primary nav-cta" onClick={() => setMobileMenuOpen(false)}>Contacto</a></li>
                </ul>

                {/* Mobile Toggle */}
                <button
                    className={`mobile-toggle ${mobileMenuOpen ? 'open' : ''}`}
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    aria-label="Menu"
                >
                    <span></span>
                    <span></span>
                    <span></span>
                </button>
            </div>
        </nav>
    );
};

export default Navbar;
