import React, { useState } from 'react';
import './Products.css';

interface Product {
  id: number;
  name: string;
  description: string;
  price: string;
  icon: string;
}

interface Category {
  id: string;
  name: string;
  products: Product[];
}

const Products: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const categories: Category[] = [
    {
      id: 'wires',
      name: 'Wires & Cables',
      products: [
        {
          id: 1,
          name: 'Copper Wire 2.5mm',
          description: 'High-quality copper wire for electrical installations',
          price: '₹45/meter',
          icon: 'fas fa-bolt'
        },
        {
          id: 2,
          name: 'Aluminum Wire 4mm',
          description: 'Durable aluminum wire for heavy-duty applications',
          price: '₹35/meter',
          icon: 'fas fa-bolt'
        },
        {
          id: 3,
          name: 'Coaxial Cable',
          description: 'High-quality coaxial cable for TV and internet',
          price: '₹25/meter',
          icon: 'fas fa-bolt'
        }
      ]
    },
    {
      id: 'switches',
      name: 'Switches & Sockets',
      products: [
        {
          id: 4,
          name: 'Modular Switch 2-Gang',
          description: 'Premium modular switch with 2 outlets',
          price: '₹450',
          icon: 'fas fa-plug'
        },
        {
          id: 5,
          name: 'USB Socket',
          description: 'Modern USB charging socket for devices',
          price: '₹650',
          icon: 'fas fa-plug'
        },
        {
          id: 6,
          name: 'Fan Regulator',
          description: 'Electronic fan speed regulator',
          price: '₹350',
          icon: 'fas fa-plug'
        }
      ]
    },
    {
      id: 'led',
      name: 'LED Lighting',
      products: [
        {
          id: 7,
          name: 'LED Bulb 9W',
          description: 'Energy-efficient LED bulb with 2-year warranty',
          price: '₹180',
          icon: 'fas fa-lightbulb'
        },
        {
          id: 8,
          name: 'LED Panel Light',
          description: 'Modern LED panel for office and home',
          price: '₹1,200',
          icon: 'fas fa-lightbulb'
        },
        {
          id: 9,
          name: 'LED Strip Light',
          description: 'Flexible LED strip for decorative lighting',
          price: '₹85/meter',
          icon: 'fas fa-lightbulb'
        }
      ]
    },
    {
      id: 'tools',
      name: 'Tools & Equipment',
      products: [
        {
          id: 10,
          name: 'Multimeter',
          description: 'Digital multimeter for electrical testing',
          price: '₹2,500',
          icon: 'fas fa-tools'
        },
        {
          id: 11,
          name: 'Wire Stripper',
          description: 'Professional wire stripping tool',
          price: '₹450',
          icon: 'fas fa-tools'
        },
        {
          id: 12,
          name: 'Insulation Tester',
          description: 'Portable insulation resistance tester',
          price: '₹3,200',
          icon: 'fas fa-tools'
        }
      ]
    }
  ];

  const handleCategoryChange = (categoryId: string) => {
    setActiveCategory(categoryId);
  };

  const renderProducts = () => {
    if (activeCategory === 'all') {
      return categories.map(category => (
        <div key={category.id} className="category-section">
          <h3 className="category-title">{category.name}</h3>
          <div className="products-grid">
            {category.products.map(product => (
              <div key={product.id} className="product-card">
                <div className="product-image">
                  <div className="product-placeholder">
                    <i className={product.icon}></i>
                  </div>
                  <div className="product-overlay">
                    <button className="btn btn-small">Quick View</button>
                  </div>
                </div>
                <div className="product-info">
                  <h3>{product.name}</h3>
                  <p className="product-description">{product.description}</p>
                  <div className="product-price">{product.price}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      ));
    } else {
      const category = categories.find(cat => cat.id === activeCategory);
      if (!category) return null;
      
      return (
        <div className="category-section">
          <h3 className="category-title">{category.name}</h3>
          <div className="products-grid">
            {category.products.map(product => (
              <div key={product.id} className="product-card">
                <div className="product-image">
                  <div className="product-placeholder">
                    <i className={product.icon}></i>
                  </div>
                  <div className="product-overlay">
                    <button className="btn btn-small">Quick View</button>
                  </div>
                </div>
                <div className="product-info">
                  <h3>{product.name}</h3>
                  <p className="product-description">{product.description}</p>
                  <div className="product-price">{product.price}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      );
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
            className={`category-btn ${activeCategory === 'all' ? 'active' : ''}`}
            onClick={() => handleCategoryChange('all')}
          >
            All Products
          </button>
          {categories.map(category => (
            <button
              key={category.id}
              className={`category-btn ${activeCategory === category.id ? 'active' : ''}`}
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
