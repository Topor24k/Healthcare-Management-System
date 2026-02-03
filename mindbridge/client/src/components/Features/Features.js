import React from 'react';
import './Features.css';

const Features = () => {
  const features = [
    {
      title: 'JOURNAL',
      description: 'Your journal is a private space to vent, reflect, and track progress.',
      icon: '📝'
    },
    {
      title: 'AI COMPANION',
      description: 'Our AI Companion is available around the clock to listen, comfort, and guide you through difficult moments.',
      icon: '🤖'
    },
    {
      title: 'COMMUNITY',
      description: 'Peer Circles create a space where you can connect with others facing similar challenges.',
      icon: '👥'
    },
    {
      title: 'BREATHING',
      description: 'Our toolkit helps you ground yourself when emotions feel overwhelming.',
      icon: '🧘'
    }
  ];

  return (
    <section className="features" id="features">
      <div className="features-container">
        <h2 className="features-title">EXPLORE MINDBRIDGE FEATURES</h2>
        <p className="features-subtitle">
          Explore the support solutions created to guide you through life's challenges.
        </p>
        
        <div className="features-grid">
          {features.map((feature, index) => (
            <div className="feature-card" key={index}>
              <div className="feature-icon">{feature.icon}</div>
              <h3 className="feature-title">{feature.title}</h3>
              <p className="feature-description">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
