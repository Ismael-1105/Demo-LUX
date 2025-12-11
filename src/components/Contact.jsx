import React from 'react';
import './Contact.css';

const Contact = () => {
    return (
        <section className="section contact" id="contacto">
            <div className="container contact-container">
                <div className="contact-info">
                    <h2 className="section-title text-left">Conversemos</h2>
                    <p className="contact-sub">¿Listo para transformar tu marca? Contáctanos y comencemos a crear algo extraordinario juntos.</p>

                    <div className="contact-details">
                        <div className="contact-row">
                            <strong>Email:</strong>
                            <a href="mailto:luxagenciademktg@gmail.com">luxagenciademktg@gmail.com</a>
                        </div>
                        <div className="contact-row">
                            <strong>Teléfono:</strong>
                            <a href="tel:+593998329028">(+593) 99 832 9028</a>
                        </div>
                        <div className="contact-row">
                            <strong>Ubicación:</strong>
                            <span>Loja – Ecuador</span>
                        </div>
                    </div>

                    <div className="social-links">
                        <a href="#">Instagram</a>
                        <a href="#">TikTok</a>
                        <a href="#">Facebook</a>
                    </div>
                </div>

                <form className="contact-form">
                    <div className="form-group">
                        <input type="text" placeholder="Nombre" required />
                    </div>
                    <div className="form-group">
                        <input type="email" placeholder="Email" required />
                    </div>
                    <div className="form-group">
                        <input type="tel" placeholder="Teléfono" />
                    </div>
                    <div className="form-group">
                        <textarea placeholder="Mensaje" rows="5" required></textarea>
                    </div>
                    <button type="submit" className="btn btn-primary">Enviar Mensaje</button>
                </form>
            </div>
        </section>
    );
};

export default Contact;
