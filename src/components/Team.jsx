import React from 'react';
import './Team.css';

const Team = () => {
    return (
        <section className="section team-cta" id="equipo">
            <div className="container">
                <div className="team-card">
                    <div className="team-content">
                        <h2 className="team-title">Únete a Nuestro Equipo</h2>
                        <p className="team-desc">
                            Buscamos talentos apasionados y creativos para unirse a nuestro equipo dinámico.
                            Si estás listo para desafiar tus límites y hacer un impacto, ¡queremos conocerte!
                        </p>
                        <a href="#" className="btn btn-white">Sé parte de Ángeles</a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Team;
