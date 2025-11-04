import React, { useEffect, useState } from "react";
import "./FeaturedWorks.css";

import work1 from "../uploads/work1.jpg";
import work2 from "../uploads/work2.jpg";
import work3 from "../uploads/work3.jpg";
import work4 from "../uploads/work4.jpg";
import work5 from "../uploads/work5.jpg";
import work6 from "../uploads/work6.jpg";
import work7 from "../uploads/work7.jpg";
import work8 from "../uploads/work8.jpg";
import work9 from "../uploads/work9.jpg";
import work10 from "../uploads/work10.jpg";
import work11 from "../uploads/work11.jpg";

interface WorkItem {
  id: number;
  image: string;
  title: string;
  caption: string;
}

const FeaturedWorks: React.FC = () => {
  const works: WorkItem[] = [
    {
      id: 1,
      image: work1,
      title: "Project Work 1",
      caption: "Our quality electrical installation",
    },
    {
      id: 2,
      image: work2,
      title: "Project Work 2",
      caption: "Professional electrical solutions",
    },
    {
      id: 3,
      image: work3,
      title: "Project Work 3",
      caption: "Premium electrical work",
    },
    {
      id: 4,
      image: work4,
      title: "Project Work 4",
      caption: "Expert electrical installation",
    },
    {
      id: 5,
      image: work5,
      title: "Project Work 5",
      caption: "Quality craftsmanship",
    },
    {
      id: 6,
      image: work6,
      title: "Project Work 6",
      caption: "Modern electrical solutions",
    },
    {
      id: 7,
      image: work7,
      title: "Project Work 7",
      caption: "Professional electrical work",
    },
    {
      id: 8,
      image: work8,
      title: "Project Work 8",
      caption: "Reliable electrical services",
    },
    {
      id: 9,
      image: work9,
      title: "Project Work 9",
      caption: "Expert installation services",
    },
    {
      id: 10,
      image: work10,
      title: "Project Work 10",
      caption: "Premium electrical projects",
    },
    {
      id: 11,
      image: work11,
      title: "Project Work 11",
      caption: "Quality electrical solutions",
    },
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
          <button
            className="nav-arrow left"
            aria-label="Previous"
            onClick={goPrev}
          >
            <i className="fas fa-chevron-left"></i>
          </button>
          <figure className="work-slide">
            <div className="work-slide-image">
              <img src={activeWork.image} alt={activeWork.title} />
            </div>
            <figcaption className="work-slide-caption">
              {/* <h4>{activeWork.title}</h4>
              <span>{activeWork.caption}</span> */}
            </figcaption>
          </figure>

          <button
            className="nav-arrow right"
            aria-label="Next"
            onClick={goNext}
          >
            <i className="fas fa-chevron-right"></i>
          </button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedWorks;
