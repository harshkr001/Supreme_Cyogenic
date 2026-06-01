import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCart } from "../Context/CartContext";

const products = [
  {
    id: "co2-0",
    image: "/co2a.jpeg",
    title: "Industrial CO₂ Cylinders",
    price: "Custom Pricing",
    desc: "High purity industrial CO₂ gas for commercial and manufacturing applications."
  },
  {
    id: "co2-1",
    image: "/co2b.jpeg",
    title: "Beverage Grade CO₂",
    price: "LKR 4500 / Cylinder",
    desc: "Premium beverage-grade CO₂ solutions for restaurants and food industries."
  },
  {
    id: "co2-2",
    image: "/co2c.jpeg",
    title: "Bulk CO₂ Supply",
    price: "Bulk Orders Available",
    desc: "Reliable large-scale CO₂ supply solutions for industrial operations."
  }
];

function CO2() {
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const [notification, setNotification] = useState('');

  const showNotification = (message) => {
    setNotification(message);
    setTimeout(() => setNotification(''), 3000);
  };

  const handleAddToCart = (product, quantity) => {
    addToCart(product, quantity);
    showNotification(`${product.title} added to cart!`);
    const inputEl = document.getElementById(`qty-co2-${products.findIndex(p => p.id === product.id)}`);
    if (inputEl) inputEl.value = '1';
  };

  const handleBuyNow = (product, quantity) => {
    addToCart(product, quantity);
    navigate('/cart');
  };

  return (
    <div
      style={{
        background: "#061224",
        minHeight: "100vh",
        padding: "120px 60px",
        color: "white"
      }}
    >

      {notification && (
        <div style={{
          position: 'fixed',
          top: '100px',
          right: '20px',
          background: '#00C864',
          color: '#07111d',
          padding: '12px 20px',
          borderRadius: '8px',
          fontWeight: '600',
          zIndex: 1000,
          animation: 'slideIn 0.3s ease',
        }}>
          {notification}
        </div>
      )}

      <h1
        style={{
          textAlign: "center",
          fontSize: "48px",
          marginBottom: "60px"
        }}
      >
        CO₂ Products
      </h1>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: "30px"
        }}
      >
        {products.map((product, index) => (
          <div
            key={index}
            style={{
              background: "#0d1b2a",
              borderRadius: "20px",
              overflow: "hidden",
              padding: "20px",
              boxShadow: "0 10px 30px rgba(0,0,0,0.3)"
            }}
          >
            <img
              src={product.image}
              alt={product.title}
              style={{
                width: "100%",
                height: "250px",
                objectFit: "cover",
                borderRadius: "14px"
              }}
            />

            <h2 style={{ marginTop: "20px" }}>
              {product.title}
            </h2>

            <h3 style={{ color: "#00e5ff" }}>
              {product.price}
            </h3>

            <p style={{ color: "#cbd5e1" }}>
              {product.desc}
            </p>

            <div style={{ display: "flex", gap: "12px", marginTop: "20px", alignItems: "center" }}>
              <input 
                id={`qty-co2-${index}`} 
                type="number" 
                min={1} 
                defaultValue={1} 
                style={{ width: 90, padding: "10px", borderRadius: 8, border: "1px solid #1b2b37", background: "#07121a", color: "white" }} 
              />
              
              <button
                onClick={() => {
                  const el = document.getElementById(`qty-co2-${index}`);
                  const qty = Math.max(1, parseInt(el?.value || "1", 10));
                  handleAddToCart(product, qty);
                }}
                style={{
                  flex: 1,
                  padding: "14px",
                  background: "#00e5ff",
                  border: "none",
                  borderRadius: "10px",
                  fontWeight: "bold",
                  cursor: "pointer",
                  transition: "opacity 0.2s ease"
                }}
                onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.9")}
                onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
              >
                Add To Cart
              </button>

              <button
                style={{
                  flex: 1,
                  padding: "14px",
                  background: "transparent",
                  color: "#00e5ff",
                  border: "2px solid #00e5ff",
                  borderRadius: "10px",
                  fontWeight: "bold",
                  cursor: "pointer",
                  transition: "all 0.2s ease"
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = "rgba(0, 229, 255, 0.1)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = "transparent";
                }}
                onClick={() => {
                  const el = document.getElementById(`qty-co2-${index}`);
                  const qty = Math.max(1, parseInt(el?.value || "1", 10));
                  handleBuyNow(product, qty);
                }}
              >
                Buy Now
              </button>
            </div>
          </div>
        ))}
      </div>

      <style>{`
        @keyframes slideIn {
          from {
            transform: translateX(400px);
            opacity: 0;
          }
          to {
            transform: translateX(0);
            opacity: 1;
          }
        }
      `}</style>

    </div>
  );
}

export default CO2;

