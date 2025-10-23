import React from 'react';
import './About.css';

const About: React.FC = () => {
  return (
    <section id="about" className="about">
      <div className="container">
        <div className="about-content">
          <div className="about-text">
            <h2>About Power Ventures</h2>
            <p>We are passionate about delivering exceptional quality electrical products and outstanding craftsmanship. Our journey began with a simple mission: to provide our customers with the finest electrical solutions that exceed their expectations.</p>
            <p>Every item in our collection is carefully selected and sourced from trusted manufacturers, ensuring that you receive not just a product, but an experience that brings value to your electrical projects.</p>
            <div className="about-features">
              <div className="feature">
                <i className="fas fa-award"></i>
                <h4>Quality Guaranteed</h4>
                <p>Premium materials and craftsmanship</p>
              </div>
              <div className="feature">
                <i className="fas fa-shipping-fast"></i>
                <h4>Fast Shipping</h4>
                <p>Quick and reliable delivery</p>
              </div>
              <div className="feature">
                <i className="fas fa-headset"></i>
                <h4>24/7 Support</h4>
                <p>Always here to help you</p>
              </div>
            </div>
          </div>
          <div className="about-image">
            <div className="about-placeholder">
              <i className="fas fa-users"></i>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
