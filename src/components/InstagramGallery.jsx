import React, { useRef } from 'react';
import './InstagramGallery.css';

// Using placeholder images for demo
const images = [
    "https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=1000&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1542038784456-1ea8e935640e?q=80&w=1000&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?q=80&w=1000&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1516455207990-7a41ce80f7ee?q=80&w=1000&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1600607686527-6fb886090705?q=80&w=1000&auto=format&fit=crop"
];

const InstagramGallery = () => {
    const scrollRef = useRef(null);

    const scroll = (direction) => {
        const { current } = scrollRef;
        if (current) {
            const scrollAmount = 300;
            current.scrollBy({
                left: direction === 'left' ? -scrollAmount : scrollAmount,
                behavior: 'smooth'
            });
        }
    };

    return (
        <section className="section instagram" id="instagram">
            <div className="container">
                <div className="section-header">
                    <h2 className="section-title">Explora el Mundo del Lujo</h2>
                    <p className="section-subtitle">Síguenos en @luxagency para ver las últimas tendencias</p>
                </div>

                <div className="gallery-container">
                    <button className="nav-btn prev" onClick={() => scroll('left')}>&lt;</button>
                    <div className="gallery-track" ref={scrollRef}>
                        {images.map((img, index) => (
                            <div key={index} className="gallery-item">
                                <img src={img} alt={`Instagram ${index + 1}`} />
                                <div className="overlay">
                                    <span>Ver en Instagram</span>
                                </div>
                            </div>
                        ))}
                    </div>
                    <button className="nav-btn next" onClick={() => scroll('right')}>&gt;</button>
                </div>
            </div>
        </section>
    );
};

export default InstagramGallery;
