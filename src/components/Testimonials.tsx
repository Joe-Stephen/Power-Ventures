import React, { useState, useEffect } from 'react';
import './Testimonials.css';

interface Testimonial {
  id: number;
  text: string;
  author: string;
  role: string;
}

const Testimonials: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(1);

  const testimonials: Testimonial[] = [
    {
      id: 1,
      text: "Power Ventures has been our go-to supplier for all electrical needs. Their quality products and excellent service have never disappointed us. Highly recommended!",
      author: "Rajesh Kumar",
      role: "Electrical Contractor"
    },
    {
      id: 2,
      text: "The LED lighting solutions from Power Ventures have transformed our office space. Energy efficient and beautiful lighting that saves us money every month.",
      author: "Priya Sharma",
      role: "Office Manager"
    },
    {
      id: 3,
      text: "Outstanding customer service and premium quality products. The team at Power Ventures goes above and beyond to ensure customer satisfaction.",
      author: "Amit Patel",
      role: "Homeowner"
    },
    {
      id: 4,
      text: "Fast delivery, competitive prices, and top-notch quality. Power Ventures has become our trusted partner for all electrical supplies.",
      author: "Sunita Reddy",
      role: "Project Manager"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide(prev => prev === testimonials.length ? 1 : prev + 1);
    }, 5000);

    return () => clearInterval(interval);
  }, [testimonials.length]);

  const goToSlide = (slideNumber: number) => {
    setCurrentSlide(slideNumber);
  };

  return (
    <section id="testimonials" className="testimonials">
      <div className="container">
        <div className="section-header">
          <h2>What Our Customers Say</h2>
          <p>Hear from our satisfied customers about their experience</p>
        </div>
        <div className="testimonials-carousel">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className={`testimonial-slide ${currentSlide === testimonial.id ? 'active' : ''}`}
            >
              <div className="testimonial-content">
                <div className="testimonial-text">
                  <p>"{testimonial.text}"</p>
                </div>
                <div className="testimonial-author">
                  <div className="author-info">
                    <h4>{testimonial.author}</h4>
                    <span>{testimonial.role}</span>
                  </div>
                  <div className="rating">
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="testimonial-dots">
          {testimonials.map((_, index) => (
            <span
              key={index + 1}
              className={`testimonial-dot ${currentSlide === index + 1 ? 'active' : ''}`}
              onClick={() => goToSlide(index + 1)}
            ></span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
