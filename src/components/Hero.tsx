import React, { useState, useEffect } from 'react';
import './Hero.css';

interface Slide {
  id: number;
  title: string;
  subtitle: string;
  icon: string;
}

const Hero: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(1);

  const slides: Slide[] = [
    {
      id: 1,
      title: "LED Lighting Solutions",
      subtitle: "Energy-efficient and long-lasting LED products for modern lighting needs",
      icon: "fas fa-lightbulb"
    },
    {
      id: 2,
      title: "Premium Switches",
      subtitle: "High-quality electrical switches and sockets for every application",
      icon: "fas fa-plug"
    },
    {
      id: 3,
      title: "Electrical Wires",
      subtitle: "Durable and safe electrical wiring solutions for all installations",
      icon: "fas fa-bolt"
    },
    {
      id: 4,
      title: "Electrical Tools",
      subtitle: "Professional-grade electrical tools and equipment for experts",
      icon: "fas fa-tools"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide(prev => prev === slides.length ? 1 : prev + 1);
    }, 5000);

    return () => clearInterval(interval);
  }, [slides.length]);

  const goToSlide = (slideNumber: number) => {
    setCurrentSlide(slideNumber);
  };

  return (
    <section id="home" className="hero">
      <div className="hero-carousel">
        {slides.map((slide) => (
          <div
            key={slide.id}
            className={`carousel-slide ${currentSlide === slide.id ? 'active' : ''}`}
          >
            <div className="slide-bg">
              <div className="slide-placeholder">
                <i className={slide.icon}></i>
              </div>
            </div>
            <div className="slide-content">
              <h1 className="hero-title">{slide.title}</h1>
              <p className="hero-subtitle">{slide.subtitle}</p>
              <div className="hero-buttons">
                <a href="#products" className="btn btn-primary">View Products</a>
                <a href="#about" className="btn btn-secondary">Learn More</a>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      <div className="carousel-navigation">
        <div className="carousel-dots">
          {slides.map((_, index) => (
            <span
              key={index + 1}
              className={`dot ${currentSlide === index + 1 ? 'active' : ''}`}
              onClick={() => goToSlide(index + 1)}
            ></span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
