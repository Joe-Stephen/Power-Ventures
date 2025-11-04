import wireImg from "../uploads/product_wire.jpeg";
import switchImg from "../uploads/product_switch.jpeg";
import ledImg from "../uploads/product_led.webp";
import toolImg from "../uploads/product_tool.avif";
import React, { useState } from "react";
import "./Products.css";

interface Product {
  id: number;
  name: string;
  description: string;
  price: string;
  image: string;
}

interface Category {
  id: string;
  name: string;
  products: Product[];
}

const Products: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const categories: Category[] = [
    {
      id: "switches",
      name: "Switches",
      products: [
        {
          id: 1,
          name: "Modular Switch 2-Gang",
          description: "Premium modular switch with 2 outlets",
          price: "₹450",
          image: switchImg,
        },
        {
          id: 2,
          name: "USB Socket",
          description: "Modern USB charging socket for devices",
          price: "₹650",
          image: switchImg,
        },
        {
          id: 3,
          name: "Fan Regulator",
          description: "Electronic fan speed regulator",
          price: "₹350",
          image: switchImg,
        },
      ],
    },
    {
      id: "led",
      name: "LED lighting",
      products: [
        {
          id: 4,
          name: "LED Bulb 9W",
          description: "Energy-efficient LED bulb with 2-year warranty",
          price: "₹180",
          image: ledImg,
        },
        {
          id: 5,
          name: "LED Panel Light",
          description: "Modern LED panel for office and home",
          price: "₹1,200",
          image: ledImg,
        },
        {
          id: 6,
          name: "LED Strip Light",
          description: "Flexible LED strip for decorative lighting",
          price: "₹85/meter",
          image: ledImg,
        },
      ],
    },
    {
      id: "wires",
      name: "Wires and cables",
      products: [
        {
          id: 7,
          name: "Copper Wire 2.5mm",
          description: "High-quality copper wire for electrical installations",
          price: "₹45/meter",
          image: wireImg,
        },
        {
          id: 8,
          name: "Aluminum Wire 4mm",
          description: "Durable aluminum wire for heavy-duty applications",
          price: "₹35/meter",
          image: wireImg,
        },
        {
          id: 9,
          name: "Coaxial Cable",
          description: "High-quality coaxial cable for TV and internet",
          price: "₹25/meter",
          image: wireImg,
        },
      ],
    },
    {
      id: "fans",
      name: "Fans",
      products: [
        {
          id: 10,
          name: "Ceiling Fan",
          description: "Energy-efficient ceiling fan with remote control",
          price: "₹2,500",
          image: toolImg,
        },
        {
          id: 11,
          name: "Table Fan",
          description: "Compact table fan for home and office",
          price: "₹1,800",
          image: toolImg,
        },
        {
          id: 12,
          name: "Exhaust Fan",
          description: "High-performance exhaust fan for ventilation",
          price: "₹1,200",
          image: toolImg,
        },
      ],
    },
    {
      id: "switchgears",
      name: "Switchgears",
      products: [
        {
          id: 13,
          name: "MCB Miniature Circuit Breaker",
          description: "Reliable MCB for electrical protection",
          price: "₹450",
          image: switchImg,
        },
        {
          id: 14,
          name: "Distribution Board",
          description: "Main distribution board for electrical systems",
          price: "₹3,500",
          image: switchImg,
        },
        {
          id: 15,
          name: "MCCB Molded Case Circuit Breaker",
          description: "Heavy-duty circuit breaker for industrial use",
          price: "₹8,500",
          image: switchImg,
        },
      ],
    },
    {
      id: "wiring-devices",
      name: "Electrical wiring devices",
      products: [
        {
          id: 16,
          name: "Socket Outlet",
          description: "Standard socket outlet for electrical connections",
          price: "₹350",
          image: switchImg,
        },
        {
          id: 17,
          name: "Plug Connector",
          description: "High-quality plug connector for appliances",
          price: "₹250",
          image: switchImg,
        },
        {
          id: 18,
          name: "Extension Board",
          description: "Multi-outlet extension board with surge protection",
          price: "₹550",
          image: switchImg,
        },
      ],
    },
    {
      id: "accessories",
      name: "Accessories",
      products: [
        {
          id: 19,
          name: "Wire Connector",
          description: "Reliable wire connector for secure connections",
          price: "₹50",
          image: toolImg,
        },
        {
          id: 20,
          name: "Cable Ties",
          description: "Durable cable ties for organizing wires",
          price: "₹25/pack",
          image: toolImg,
        },
        {
          id: 21,
          name: "Conduit Fittings",
          description: "Quality conduit fittings for electrical installations",
          price: "₹150",
          image: toolImg,
        },
      ],
    },
  ];

  const handleCategoryChange = (categoryId: string) => {
    setActiveCategory(categoryId);
  };

  const renderProducts = () => {
    const renderCategory = (category: Category) => (
      <div key={category.id} className="category-section">
        <h3 className="category-title">{category.name}</h3>
        <div className="products-grid">
          {category.products.map((product) => (
            <div key={product.id} className="product-card">
              <div className="product-image">
                <img src={product.image} alt={product.name} />
                <div className="product-overlay">
                  <button className="btn btn-small">Quick View</button>
                </div>
              </div>
              <div className="product-info">
                <h3>{product.name}</h3>
                <p className="product-description">{product.description}</p>
                {/* <div className="product-price">{product.price}</div> */}
              </div>
            </div>
          ))}
        </div>
      </div>
    );

    if (activeCategory === "all") {
      return categories.map((category) => renderCategory(category));
    } else {
      const category = categories.find((cat) => cat.id === activeCategory);
      return category ? renderCategory(category) : null;
    }
  };

  return (
    <section id="products" className="products">
      <div className="container">
        <div className="section-header">
          <h2>Our Products</h2>
          <p>Explore our comprehensive range of electrical products</p>
        </div>

        <div className="product-categories">
          <button
            className={`category-btn ${
              activeCategory === "all" ? "active" : ""
            }`}
            onClick={() => handleCategoryChange("all")}
          >
            All Products
          </button>
          {categories.map((category) => (
            <button
              key={category.id}
              className={`category-btn ${
                activeCategory === category.id ? "active" : ""
              }`}
              onClick={() => handleCategoryChange(category.id)}
            >
              {category.name}
            </button>
          ))}
        </div>

        {renderProducts()}
      </div>
    </section>
  );
};

export default Products;
