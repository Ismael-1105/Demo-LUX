import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Team from './components/Team';
import InstagramGallery from './components/InstagramGallery';
import Contact from './components/Contact';
import Footer from './components/Footer';

const LandingPage = () => {
    return (
        <div className="landing-page">
            <Navbar />
            <Hero />
            <Services />
            <Team />
            <InstagramGallery />
            <Contact />
            <Footer />
        </div>
    );
};

export default LandingPage;
