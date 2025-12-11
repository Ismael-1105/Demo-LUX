import React, { useEffect, useState } from 'react';
import './Hero.css';

const Hero = () => {
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        setLoaded(true);
    }, []);

    return (
        <section className="hero">
            <div className="hero-bg">
                <div className="decoration dec-1"></div>
                <div className="decoration dec-2"></div>
            </div>
            <div className="container hero-container">
                <div className="hero-content">
                    <h1 className={`hero-title ${loaded ? 'fade-up' : ''}`}>
                        <span className="subtitle">LUX</span>
                        <span className="main-title">Es hora de cambiar</span>
                        <span className="main-title">las reglas...</span>
                    </h1>
                    <p className={`hero-desc ${loaded ? 'fade-up delay-1' : ''}`}>
                        Agencia de Marketing y Publicidad
                    </p>
                    <div className={`hero-btns ${loaded ? 'fade-up delay-2' : ''}`}>
                        <a href="#servicios" className="btn btn-primary">¡Ven y conócenos!</a>
                        <a href="#equipo" className="btn btn-secondary">Sé parte de Ángeles</a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
