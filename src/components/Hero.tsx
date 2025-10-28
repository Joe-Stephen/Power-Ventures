import ledImg from "../uploads/led.jpg";
import switchImg from "../uploads/switch.jpg";
import wireImg from "../uploads/wire.jpg";
import toolImg from "../uploads/tool.jpg";
import React, { useState, useEffect } from "react";
import "./Hero.css";
interface Slide {
  id: number;
  title: string;
  subtitle: string;
  icon: string;
  image: string;
}

const Hero: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(1);

  // ✅ Define all slides with title, subtitle, icon, and background image
  const slides: Slide[] = [
    {
      id: 1,
      title: "LED Lighting Solutions",
      subtitle:
        "Energy-efficient and long-lasting LED products for modern lighting needs",
      icon: "fas fa-lightbulb",
      image: ledImg,
    },
    {
      id: 2,
      title: "Premium Switches",
      subtitle:
        "High-quality electrical switches and sockets for every application",
      icon: "fas fa-plug",
      image: switchImg,
    },
    {
      id: 3,
      title: "Electrical Wires",
      subtitle:
        "Durable and safe electrical wiring solutions for all installations",
      icon: "fas fa-bolt",
      image: wireImg,
    },
    {
      id: 4,
      title: "Electrical Tools",
      subtitle: "Professional-grade electrical tools and equipment for experts",
      icon: "fas fa-tools",
      image: toolImg,
    },
  ];

  // ✅ Auto-slide effect every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev === slides.length ? 1 : prev + 1));
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
            className={`carousel-slide ${
              currentSlide === slide.id ? "active" : ""
            }`}
          >
            {/* ✅ Background image with dark overlay */}
            <div
              className="slide-bg"
              style={{
                backgroundImage: `linear-gradient(
                  rgba(0, 0, 0, 0.4),
                  rgba(0, 0, 0, 0.4)
                ), url(${slide.image})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
              }}
            ></div>

            {/* ✅ Text content */}
            <div className="slide-content">
              <h1 className="hero-title">{slide.title}</h1>
              <p className="hero-subtitle">{slide.subtitle}</p>
              <div className="hero-buttons">
                <a href="#products" className="btn btn-primary">
                  View Products
                </a>
                <a href="#about" className="btn btn-secondary">
                  Learn More
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* ✅ Navigation dots */}
      <div className="carousel-navigation">
        <div className="carousel-dots">
          {slides.map((_, index) => (
            <span
              key={index + 1}
              className={`dot ${currentSlide === index + 1 ? "active" : ""}`}
              onClick={() => goToSlide(index + 1)}
            ></span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
