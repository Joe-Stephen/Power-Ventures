import React, { useEffect, useState } from "react";
import "./FeaturedWorks.css";

import led1 from "../uploads/led.jpg";
import switch1 from "../uploads/switch.jpg";
import wire1 from "../uploads/wire.jpg";
import tool1 from "../uploads/tool.jpg";
import prodLed from "../uploads/product_led.webp";
import prodWire from "../uploads/product_wire.jpeg";
import prodSwitch from "../uploads/product_switch.jpeg";

interface WorkItem {
  id: number;
  image: string;
  title: string;
  caption: string;
}

const FeaturedWorks: React.FC = () => {
  const works: WorkItem[] = [
    { id: 1, image: led1, title: "LED Retrofit", caption: "Office lighting upgrade" },
    { id: 2, image: prodSwitch, title: "Switch Panel", caption: "Modular switch installation" },
    { id: 3, image: wire1, title: "Wiring", caption: "Residential rewiring project" },
    { id: 4, image: prodLed, title: "Panel Lights", caption: "Commercial lobby lighting" },
    { id: 5, image: switch1, title: "Smart Switches", caption: "Home automation setup" },
    { id: 6, image: prodWire, title: "Cable Laying", caption: "Industrial cable routing" },
    { id: 7, image: tool1, title: "Testing & QA", caption: "On-site verification" },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const goNext = () => {
    setCurrentIndex((prev) => (prev + 1) % works.length);
  };

  const goPrev = () => {
    setCurrentIndex((prev) => (prev - 1 + works.length) % works.length);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % works.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [works.length]);

  const activeWork = works[currentIndex];

  return (
    <section id="featured-works" className="featured-works">
      <div className="container">
        <div className="section-header">
          <h2>Featured Works</h2>
          <p>A glimpse of projects we’ve delivered with quality and care</p>
        </div>

        <div className="works-carousel">
          <button className="nav-arrow left" aria-label="Previous" onClick={goPrev}>
            <i className="fas fa-chevron-left"></i>
          </button>

          <figure className="work-slide">
            <div className="work-slide-image">
              <img src={activeWork.image} alt={activeWork.title} />
            </div>
            <figcaption className="work-slide-caption">
              <h4>{activeWork.title}</h4>
              <span>{activeWork.caption}</span>
            </figcaption>
          </figure>

          <button className="nav-arrow right" aria-label="Next" onClick={goNext}>
            <i className="fas fa-chevron-right"></i>
          </button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedWorks;


