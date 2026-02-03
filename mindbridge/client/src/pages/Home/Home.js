import React from 'react';
import Hero from '../../components/Hero/Hero';
import Assistance from '../../components/Assistance/Assistance';
import Features from '../../components/Features/Features';
import About from '../../components/About/About';
import Journeys from '../../components/Journeys/Journeys';
import Contact from '../../components/Contact/Contact';
import Footer from '../../components/Footer/Footer';
import './Home.css';

const Home = () => {
  return (
    <div className="home">
      <Hero />
      <Assistance />
      <Features />
      <About />
      <Journeys />
      <Contact />
      <Footer />
    </div>
  );
};

export default Home;
