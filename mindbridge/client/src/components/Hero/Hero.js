import React from 'react';
import './Hero.css';

const Hero = () => {
  const scrollToAbout = () => {
    const element = document.getElementById('about');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="hero" id="home">
      <div className="hero-container">
        <div className="hero-content">
          <h1 className="hero-title">A Safe Space to Heal, Grow, and Connect.</h1>
          <p className="hero-description">
            Mind Bridge offers a safe and supportive space for individuals experiencing anxiety, 
            depression, stress, grief, loneliness, and more. Connect with our AI Companion for 
            compassionate conversations, engage anonymously with others in peer circles, join 
            meaningful community programs, and explore wellness tools like guided breathing and 
            mindfulness exercises. And remember — we're always here when you need to reach out.
          </p>
          <button className="hero-btn" onClick={scrollToAbout}>ABOUT US</button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
