import React, { useState, useEffect } from "react";
import "./Testimonials.css";

interface Testimonial {
  id: number;
  title: string;
  text: string;
  author: string;
  role: string;
}

const Testimonials: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(1);

  const testimonials: Testimonial[] = [
    {
      id: 1,
      title: "Reliable & Professional Electrical Partner",
      text: "Power Ventures has been our trusted supplier for project materials across multiple residential sites. Their product quality, pricing clarity, and fast delivery make them an indispensable partner for our business",
      author: "Arjun Menon",
      role: "Architect & Interior Designer",
    },
    {
      id: 2,
      title: "Excellent Range & Timely Delivery",
      text: "From wires and switches to LED lighting, Power Ventures always provides authentic materials at the right price. Their team ensures timely delivery and professional coordination — highly dependable.",
      author: "Vishnu R",
      role: "Builder & Developer",
    },
    {
      id: 3,
      title: "Smooth Experience for Home Electrical Needs",
      text: "We purchased all electrical fittings for our new home through Power Ventures. They explained options clearly, provided the best brand suggestions, and ensured fast delivery. Very satisfied.",
      author: "Priya & Suresh",
      role: "Home Owners",
    },
    {
      id: 4,
      title: "Trusted by Contractors",
      text: "As a project contractor, timely supply matters the most. Power Ventures always delivers as promised and supports us throughout installation. Excellent service and genuine products.",
      author: "Rohit K",
      role: " Electrical Contractor",
    },
    {
      id: 5,
      title: "Professional. Quality-Focused. Transparent",
      text: "Power Ventures has been supporting our projects with a consistent supply of premium electrical materials since 2019. Highly professional team and great product knowledge.",
      author: "Sandeep P",
      role: " Interior Consultant",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev === testimonials.length ? 1 : prev + 1));
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
              className={`testimonial-slide ${
                currentSlide === testimonial.id ? "active" : ""
              }`}
            >
              <div className="testimonial-content">
                <div className="testimonial-title">
                  <h3>{testimonial.title}</h3>
                </div>
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
              className={`testimonial-dot ${
                currentSlide === index + 1 ? "active" : ""
              }`}
              onClick={() => goToSlide(index + 1)}
            ></span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
