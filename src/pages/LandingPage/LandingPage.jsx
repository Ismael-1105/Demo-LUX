import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import About from './components/About';
import Partners from './components/Partners';
import Footer from './components/Footer';

const LandingPage = () => {
    return (
        <div className="landing-page">
            <Navbar />
            <Hero />
            <About />
            <Services />
            <Partners />
            <Footer />
        </div>
    );
};

export default LandingPage;
