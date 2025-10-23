import React, { useEffect, useRef } from 'react';
import './Brands.css';

interface Brand {
  id: number;
  name: string;
  icon: string;
}

const Brands: React.FC = () => {
  const brandsTrackRef = useRef<HTMLDivElement>(null);

  const brands: Brand[] = [
    { id: 1, name: 'Havells', icon: 'fas fa-industry' },
    { id: 2, name: 'Philips', icon: 'fas fa-industry' },
    { id: 3, name: 'Bajaj', icon: 'fas fa-industry' },
    { id: 4, name: 'Finolex', icon: 'fas fa-industry' },
    { id: 5, name: 'Anchor', icon: 'fas fa-industry' },
    { id: 6, name: 'Legrand', icon: 'fas fa-industry' },
    { id: 7, name: 'Schneider', icon: 'fas fa-industry' },
    { id: 8, name: 'Osram', icon: 'fas fa-industry' }
  ];

  useEffect(() => {
    const track = brandsTrackRef.current;
    if (!track) return;

    const handleMouseEnter = () => {
      track.style.animationPlayState = 'paused';
    };

    const handleMouseLeave = () => {
      track.style.animationPlayState = 'running';
    };

    track.addEventListener('mouseenter', handleMouseEnter);
    track.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      track.removeEventListener('mouseenter', handleMouseEnter);
      track.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <section id="brands" className="brands">
      <div className="container">
        <div className="section-header">
          <h2>Trusted Brands</h2>
          <p>We partner with leading manufacturers to bring you the best products</p>
        </div>
        <div className="brands-carousel">
          <div className="brands-track" ref={brandsTrackRef}>
            {brands.map((brand) => (
              <div key={brand.id} className="brand-item">
                <div className="brand-logo">
                  <i className={brand.icon}></i>
                  <h4>{brand.name}</h4>
                </div>
              </div>
            ))}
            {/* Duplicate for seamless loop */}
            {brands.map((brand) => (
              <div key={`duplicate-${brand.id}`} className="brand-item">
                <div className="brand-logo">
                  <i className={brand.icon}></i>
                  <h4>{brand.name}</h4>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Brands;
