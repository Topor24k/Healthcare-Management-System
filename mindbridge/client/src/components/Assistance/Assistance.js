import React from 'react';
import './Assistance.css';

const Assistance = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="assistance">
      <div className="assistance-container">
        <h2 className="assistance-title">FOR FURTHER ASSISTANCE</h2>
        <p className="assistance-description">
          For guidance, partnership, or personal support, connect with us today
        </p>
        <button className="assistance-btn" onClick={scrollToContact}>
          CONTACT US NOW
        </button>
      </div>
    </section>
  );
};

export default Assistance;
