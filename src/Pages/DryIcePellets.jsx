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
      image: "/Pellets.jpeg",
      title: "Dry Ice Pellets – Industrial Grade",
      price: "$ 8.5 / kg",
      productCode: "DIP-01",
      availability: "In Stock",
      deliveryTime: "1-2 Days",
      rating: "4.8/5",
      reviews: "157 Reviews",
      quoteOnly: false,
      desc: "High purity dry ice pellets for industrial cleaning and cooling.",

      specifications: [
        "Diameter: 3mm",
        "Purity: 99.9% CO₂",
        "Industrial Grade",
        "Fast Sublimation"
      ],

      applications: [
        "Dry Ice Blasting",
        "Machine Cleaning",
        "Industrial Cooling",
        "Surface Preparation"
      ],

      industries: [
        "Food & Beverage",
        "Industrial Cleaning",
        "Cold Chain Logistics",
        "Manufacturing"
      ]
    },
    {
      id: "pellet-1",
      image: "/premium_pellets.jpeg",
      title: "Premium Dry Ice Pellets",
      price: "$ 9.5 / kg",
      productCode: "PDP-02",
      availability: "In Stock",
      deliveryTime: "2-3 Days",
      rating: "4.9/5",
      reviews: "110 Reviews",
      quoteOnly: false,
      desc: "Suitable for cryogenic applications and food transport.",

      specifications: [
        "Diameter: 6mm",
        "Purity: 99.9% CO₂",
        "Premium Grade",
        "Long Cooling Time"
      ],

      applications: [
        "Food Transport",
        "Pharmaceutical Storage",
        "Cryogenic Processing",
        "Cold Rooms"
      ],
      industries: [
        "Pharmaceuticals",
        "Biotech",
        "Cryogenic Processing",
        "Food Transport"
      ]
    },
    {
      id: "pellet-2",
      image: "/bulk_pellets.jpeg",
      title: "Bulk Dry Ice Pellets",
      price: "Custom Quote",
      productCode: "BDP-03",
      availability: "Custom Order",
      deliveryTime: "5-7 Days",
      rating: "4.7/5",
      reviews: "120 Reviews",
      quoteOnly: true,
      desc: "Large quantity supply for industrial operations.",

      specifications: [
        "Bulk Quantity",
        "Custom Sizes",
        "Industrial Grade",
        "Export Ready"
      ],

      applications: [
        "Large Scale Logistics",
        "Manufacturing Plants",
        "Export Shipments",
        "Bulk Distribution"
      ],

      industries: [
        "Large Warehouses",
        "Export Companies",
        "Industrial Plants",
        "Logistics Hubs"
      ]
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

            <div className="product-image-container">
              <img
                className="product-image"
                src={item.image}
                alt={item.title}
              />
            </div>

            <h2>{item.title}</h2>

            <p>Code: {item.productCode}</p>

            <h3 style={{ color: "#00BFFF" }}>
              {item.price}
            </h3>

            <p style={{ color: item.quoteOnly ? "orange" : "limegreen" }}>
              ● {item.availability}
            </p>

            <p style={{ color: "#CBD6E5" }}>
              🚚 Delivery: {item.deliveryTime}
            </p>

            <p style={{ color: "#FFD700" }}>
              ⭐ {item.rating}
            </p>

            <p
              style={{
                color: "#CBD6E5",
                fontSize: "14px",
                marginBottom: "15px"
              }}
            >
              {item.reviews}
            </p>

            <p>{item.desc}</p>

            <h4 style={{ color: "#00BFFF", marginTop: "15px" }}>
              Specifications
            </h4>

            <ul style={{ color: "#CBD6E5", lineHeight: "26px" }}>
              {item.specifications?.map((spec, i) => (
                <li key={i}>{spec}</li>
              ))}
            </ul>

            <h4 style={{ color: "#00BFFF", marginTop: "15px" }}>
              Applications
            </h4>

            <ul style={{ color: "#CBD6E5", lineHeight: "26px" }}>
              {item.applications?.map((app, i) => (
                <li key={i}>{app}</li>
              ))}
            </ul>

            <h4 style={{ color: "#00BFFF", marginTop: "15px" }}>
              Industries Served
            </h4>

            <ul style={{ color: "#CBD6E5", lineHeight: "26px" }}>
              {item.industries?.map((industry, i) => (
                <li key={i}>{industry}</li>
              ))}
            </ul>

            <div style={{ display: "flex", gap: "10px", marginTop: "20px", alignItems: "center" }}>
              <input
                id={`qty-pellet-${index}`}
                type="number"
                min={1}
                defaultValue={1}
                style={{ width: 90, padding: "10px", borderRadius: 8, border: "1px solid #243644", background: "#07121a", color: "white" }}
              />

              {item.quoteOnly && (
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
              )}

              {!item.quoteOnly && (
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
              )}

              {item.quoteOnly && (
                <button
                  style={{
                    background: "transparent",
                    border: "1px solid #00BFFF",
                    color: "#00BFFF",
                    padding: "10px 20px",
                    borderRadius: "10px",
                    cursor: "pointer"
                  }}
                >
                  📄 Request Quote

                </button>
              )}
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

