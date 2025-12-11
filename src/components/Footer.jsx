import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-content">
                    <div className="footer-brand">
                        <h2>LUX</h2>
                        <p>Transformando marcas con creatividad y estrategia.</p>
                    </div>
                    <div className="footer-nav">
                        <a href="#servicios">Servicios</a>
                        <a href="#equipo">Únete</a>
                        <a href="#instagram">Instagram</a>
                    </div>
                </div>
                <div className="footer-bottom">
                    <p>Copyright © 2025 LUX. Todos los derechos reservados.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
