import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCart } from "../Context/CartContext";

function DryIcePellets() {
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const [notification, setNotification] = useState('');

  const products = [
    {
      id: "pellet-0",
      image: "/pellet1.jpeg",
      title: "Dry Ice Pellets – Industrial Grade",
      price: "LKR 850 / kg",
      desc: "High purity dry ice pellets for industrial cleaning and cooling."
    },
    {
      id: "pellet-1",
      image: "/pellet2.jpeg",
      title: "Premium Dry Ice Pellets",
      price: "LKR 950 / kg",
      desc: "Suitable for cryogenic applications and food transport."
    },
    {
      id: "pellet-2",
      image: "/pellet3.jpeg",
      title: "Bulk Dry Ice Pellets",
      price: "Custom Quote",
      desc: "Large quantity supply for industrial operations."
    }
  ];

  const showNotification = (message) => {
    setNotification(message);
    setTimeout(() => setNotification(''), 3000);
  };

  const handleAddToCart = (product, quantity) => {
    addToCart(product, quantity);
    showNotification(`${product.title} added to cart!`);
    const inputEl = document.getElementById(`qty-pellet-${products.findIndex(p => p.id === product.id)}`);
    if (inputEl) inputEl.value = '1';
  };

  const handleBuyNow = (product, quantity) => {
    addToCart(product, quantity);
    navigate('/cart');
  };

  return (
    <div
      style={{
        padding: "120px 50px",
        minHeight: "100vh",
        background: "#07111d",
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
          fontSize: "50px",
          marginBottom: "60px",
          color: "#00BFFF"
        }}
      >
        Dry Ice Pellets
      </h1>

      <div
        style={{
          display: "grid",
          gridTemplateColumns:
            "repeat(auto-fit,minmax(320px,1fr))",
          gap: "30px"
        }}
      >
        {products.map((item, index) => (

          <div
            key={index}
            style={{
              background: "#111a25",
              borderRadius: "20px",
              overflow: "hidden",
              padding: "20px"
            }}
          >

            <img
              src={item.image}
              alt={item.title}
              style={{
                width: "100%",
                height: "250px",
                objectFit: "cover",
                borderRadius: "15px"
              }}
            />

            <h2>{item.title}</h2>

            <h3 style={{ color: "#00BFFF" }}>
              {item.price}
            </h3>

            <p>{item.desc}</p>
            
            <div style={{ display: "flex", gap: "10px", marginTop: "20px", alignItems: "center" }}>
              <input 
                id={`qty-pellet-${index}`} 
                type="number" 
                min={1} 
                defaultValue={1} 
                style={{ width: 90, padding: "10px", borderRadius: 8, border: "1px solid #243644", background: "#07121a", color: "white" }} 
              />
              
              <button
                onClick={() => {
                  const el = document.getElementById(`qty-pellet-${index}`);
                  const qty = Math.max(1, parseInt(el?.value || "1", 10));
                  handleAddToCart(item, qty);
                }}
                style={{ 
                  flex: 1, 
                  padding: "12px", 
                  background: "#00BFFF", 
                  border: "none", 
                  borderRadius: "10px", 
                  color: "white",
                  fontWeight: "bold",
                  cursor: "pointer",
                  transition: "opacity 0.2s ease"
                }}
                onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.9")}
                onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
              >
                Add to Cart
              </button>
              
              <button 
                style={{ 
                  flex: 1, 
                  padding: "12px", 
                  background: "transparent", 
                  border: "2px solid #00BFFF", 
                  borderRadius: "10px", 
                  color: "#00BFFF",
                  fontWeight: "bold",
                  cursor: "pointer",
                  transition: "all 0.2s ease"
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = "rgba(0, 191, 255, 0.1)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = "transparent";
                }}
                onClick={() => {
                  const el = document.getElementById(`qty-pellet-${index}`);
                  const qty = Math.max(1, parseInt(el?.value || "1", 10));
                  handleBuyNow(item, qty);
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

export default DryIcePellets;

