import React from "react";
import "./WhyUs.css";

interface Reason {
  id: number;
  icon: string;
  title: string;
  description: string;
}

const WhyUs: React.FC = () => {
  const reasons: Reason[] = [
    {
      id: 1,
      icon: "fas fa-certificate",
      title: "100% Genuine Brands",
      description:
        "We stock only trusted, certified products from top manufacturers.",
    },
    {
      id: 2,
      icon: "fas fa-user-shield",
      title: "Expert Guidance",
      description:
        "Get the right solution with help from seasoned industry professionals.",
    },
    {
      id: 3,
      icon: "fas fa-tags",
      title: "Competitive Pricing",
      description:
        "Transparent prices and great value on every order—bulk or retail.",
    },
    {
      id: 4,
      icon: "fas fa-shipping-fast",
      title: "Fast, Reliable Delivery",
      description:
        "Pan-city delivery with careful handling and on-time fulfillment.",
    },
    {
      id: 5,
      icon: "fas fa-shield-alt",
      title: "Warranty & Support",
      description:
        "Hassle-free claims assistance and dedicated after-sales support.",
    },
    {
      id: 6,
      icon: "fas fa-handshake",
      title: "Trusted by Professionals",
      description:
        "Preferred partner for contractors, businesses, and homeowners alike.",
    },
  ];

  return (
    <section id="why-us" className="why-us">
      <div className="container">
        <div className="section-header">
          <h2>Why Us?</h2>
          <p>Here’s why our customers choose us — with confidence</p>
        </div>

        <div className="reasons-grid">
          {reasons.map((reason) => (
            <div key={reason.id} className="reason-card">
              <div className="reason-icon">
                <i className={reason.icon}></i>
              </div>
              <h4>{reason.title}</h4>
              <p>{reason.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
