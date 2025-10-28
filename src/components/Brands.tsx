import havellsImg from "../uploads/havells.png";
import philipsImg from "../uploads/philips.png";
import bajajImg from "../uploads/bajaj.png";
import finolexImg from "../uploads/finolex.jpg";
import anchorImg from "../uploads/anchor.png";
import legrandImg from "../uploads/legrand.png";
import schneiderImg from "../uploads/schneider.png";
import React, { useEffect, useRef } from "react";
import "./Brands.css";

interface Brand {
  id: number;
  name: string;
  icon: string;
}

const Brands: React.FC = () => {
  const brandsTrackRef = useRef<HTMLDivElement>(null);

  const brands: Brand[] = [
    { id: 1, name: "Havells", icon: havellsImg },
    { id: 2, name: "Philips", icon: philipsImg },
    { id: 3, name: "Bajaj", icon: bajajImg },
    { id: 4, name: "Finolex", icon: finolexImg },
    { id: 5, name: "Anchor", icon: anchorImg },
    { id: 6, name: "Legrand", icon: legrandImg },
    { id: 7, name: "Schneider", icon: schneiderImg },
  ];

  useEffect(() => {
    const track = brandsTrackRef.current;
    if (!track) return;

    const handleMouseEnter = () => {
      track.style.animationPlayState = "paused";
    };

    const handleMouseLeave = () => {
      track.style.animationPlayState = "running";
    };

    track.addEventListener("mouseenter", handleMouseEnter);
    track.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      track.removeEventListener("mouseenter", handleMouseEnter);
      track.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <section id="brands" className="brands">
      <div className="container">
        <div className="section-header">
          <h2>Trusted Brands</h2>
          <p>
            We partner with leading manufacturers to bring you the best products
          </p>
        </div>
        <div className="brands-carousel">
          <div className="brands-track" ref={brandsTrackRef}>
            {brands.map((brand) => (
              <div key={brand.id} className="brand-item">
                <div className="brand-logo">
                  <img src={brand.icon} alt={brand.name} />
                  <h4>{brand.name}</h4>
                </div>
              </div>
            ))}
            {/* Duplicate for seamless loop */}
            {brands.map((brand) => (
              <div key={`duplicate-${brand.id}`} className="brand-item">
                <div className="brand-logo">
                  <img src={brand.icon} alt={brand.name} />
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
