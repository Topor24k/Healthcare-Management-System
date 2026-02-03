import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Journeys.css';

const Journeys = () => {
  const [blogs, setBlogs] = useState([
    {
      _id: '1',
      title: '30 Days of Journaling: How It Changed Me',
      subtitle: 'I never thought writing a few lines each day could change my mindset. But 30 days later, I found myself more self-aware, lighter, and stronger.',
      content: 'Full blog content here...'
    },
    {
      _id: '2',
      title: 'Small Victories, Big Changes',
      subtitle: 'Getting out of bed, eating a meal, finishing a journal page — these small wins became the foundation of my healing.',
      content: 'Full blog content here...'
    },
    {
      _id: '3',
      title: 'Learning to Be Kind to Myself',
      subtitle: 'For years, I was my own harshest critic. Here\'s how I started practicing self-compassion, one small step at a time.',
      content: 'Full blog content here...'
    }
  ]);

  useEffect(() => {
    // Fetch blogs from API (optional)
    const fetchBlogs = async () => {
      try {
        const response = await axios.get('/api/blogs');
        if (response.data && response.data.length > 0) {
          setBlogs(response.data);
        }
      } catch (error) {
        console.log('Using default blogs');
      }
    };
    
    // fetchBlogs(); // Uncomment when backend is ready
  }, []);

  return (
    <section className="journeys" id="journeys">
      <div className="journeys-container">
        <h2 className="journeys-title">SHARED JOURNEYS</h2>
        <p className="journeys-subtitle">
          Discover personal stories of healing, resilience, and hope from our community.
        </p>

        <div className="journeys-grid">
          {blogs.slice(0, 3).map((blog, index) => (
            <div className="journey-card" key={blog._id || index}>
              <div className="journey-header">
                <span className="journey-number">Blog {index + 1}</span>
              </div>
              <h3 className="journey-title">{blog.title}</h3>
              <p className="journey-description">{blog.subtitle}</p>
              <button className="journey-btn">READ MORE</button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Journeys;
