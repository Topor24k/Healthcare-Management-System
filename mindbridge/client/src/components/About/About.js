import React from 'react';
import './About.css';

const About = () => {
  return (
    <section className="about" id="about">
      <div className="about-container">
        <div className="founder-section">
          <h3 className="founder-label">Founder</h3>
          <h2 className="founder-name">Kayeen M. Campaña</h2>
          <p className="founder-role">Founder & Developer</p>
        </div>

        <div className="about-content">
          <h2 className="about-title">ABOUT US</h2>
          <div className="about-text">
            <p>
              Mind Bridge was first developed on September 24, 2025, while I was a 3rd-year 
              college student at the University of Mindanao. The idea came to life during 
              one of the most challenging seasons of my journey — when I was struggling 
              deeply with anxiety, loneliness, and functional depression.
            </p>
            <p>
              I had a few people I could lean on, but not all the time. On the days when 
              no one was available, I asked myself: <em>How do I take care of my mental health 
              when I feel completely alone?</em>
            </p>
            <p>
              That question became the foundation of Mind Bridge. This platform was built 
              to make sure no one has to face those silent struggles without support. By 
              combining technology, community, and compassion, Mind Bridge creates a space 
              where anyone can find comfort — whether through our AI Companion, peer circles, 
              wellness tools, or guided mindfulness practices.
            </p>
            <p>
              At its core, Mind Bridge is more than just a system — it's a lifeline, a 
              bridge of hope, and a reminder that you are never truly alone.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
