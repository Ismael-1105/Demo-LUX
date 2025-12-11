import React, { useState } from 'react';
import './Services.css';

const servicesData = [
    {
        title: "Community Management",
        description: "Construimos y gestionamos tu comunidad en línea, creando contenido atractivo y manteniendo tu marca relevante y en crecimiento. ¡Llevamos tu marca al siguiente nivel!"
    },
    {
        title: "Branding",
        description: "Creamos identidades de marca únicas y poderosas que resuenan con tu público objetivo. Transformamos tu visión en una marca inolvidable."
    },
    {
        title: "Creadores UGC",
        description: "Fomentamos la creación de contenido auténtico y atractivo por parte de tus usuarios, transformándolo en una poderosa herramienta de marketing. ¡Convierte a tus clientes en tus embajadores!"
    },
    {
        title: "Video y Fotografía",
        description: "Creamos videos cautivadores y de alta calidad que capturan la esencia de tu marca. Capturamos la esencia de tu marca a través de imágenes impresionantes y de alta calidad."
    },
    {
        title: "Diseño Web",
        description: "Desarrollamos y diseñamos sitios web atractivos y funcionales que reflejan la identidad de tu marca. Sitios optimizados para SEO y responsivos."
    },
    {
        title: "Marketing de Influencers",
        description: "Conectamos tu marca con influencers relevantes que pueden amplificar tu mensaje. Incluye identificación, negociación y seguimiento de métricas."
    }
];

const Services = () => {
    const [activeIndex, setActiveIndex] = useState(null);

    const toggleAccordion = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <section className="section services" id="servicios">
            <div className="container">
                <h2 className="section-title">Nuestros Servicios</h2>
                <p className="section-subtitle">Soluciones integrales para diferenciar tu marca</p>

                <div className="services-list">
                    {servicesData.map((service, index) => (
                        <div
                            key={index}
                            className={`service-item ${activeIndex === index ? 'active' : ''}`}
                            onClick={() => toggleAccordion(index)}
                        >
                            <div className="service-header">
                                <span className="service-number">0{index + 1}</span>
                                <h3 className="service-title">{service.title}</h3>
                                <span className="service-icon">+</span>
                            </div>
                            <div className="service-body">
                                <p>{service.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
