import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCart } from "../Context/CartContext";

function DryIceBlocks() {
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const [notification, setNotification] = useState('');

  const products = [
    {
      id: "block-0",
      image: "/Blocks.jpeg",
      title: "Industrial Dry Ice Blocks",
      price: "$ 12 / 5kg",
      productCode: "DIB-05",
      availability: "In Stock",
      deliveryTime: "1-2 days",
      rating: "4.7/5",
      reviews: "150 Reviews",
      quoteOnly: false,
      desc: "High quality dry ice blocks for industrial cooling and transport.",

      specifications: [
        "Temperature: -78.5°C",
        "Purity: 99.9% CO₂",
        "Weight: 5kg",
        "Industrial Grade"
      ],

      applications: [
        "Cold Chain Logistics",
        "Food Transportation",
        "Industrial Cooling",
        "Event Effects"
      ],

      industries: [
        "Food & Beverage",
        "Pharmaceuticals",
        "Cold Chain Logistics",
        "Manufacturing"
      ]
    },
    {
      id: "block-1",
      image: "/premium_block.jpeg",
      title: "Premium Cooling Blocks",
      price: "$ 22 / 10kg",
      productCode: "PCB-10",
      availability: "In Stock",
      deliveryTime: "2-3 days",
      rating: "4.8/5",
      reviews: "120 Reviews",
      quoteOnly: false,
      desc: "Long-lasting cooling blocks suitable for storage applications.",

      specifications: [
        "Temperature: -78.5°C",
        "Purity: 99.9% CO₂",
        "Weight: 10kg",
        "Extended Cooling Time"
      ],

      applications: [
        "Pharmaceutical Storage",
        "Medical Transport",
        "Laboratories",
        "Cold Rooms"
      ],
      industries: [
        "Medical",
        "Laboratories",
        "Biotech",
        "Food Processing"
      ],
    },
    {
      id: "block-2",
      image: "/bulk_block.jpeg",
      title: "Bulk Dry Ice Blocks",
      price: "Custom Pricing",
      productCode: "BDB-01",
      availability: "Custom Order",
      deliveryTime: "5-7 days",
      rating: "4.6/5",
      reviews: "95 Reviews",
      quoteOnly: true,
      desc: "Bulk supply solutions for industrial and commercial operations.",

      specifications: [
        "Temperature: -78.5°C",
        "Bulk Quantity",
        "Custom Sizes",
        "Industrial Grade"
      ],

      applications: [
        "Large Scale Logistics",
        "Food Processing Plants",
        "Manufacturing Units",
        "Export Shipments"
      ],
      industries: [
        "Large Warehouses",
        "Export Companies",
        "Industrial Plants",
        "Logistics Hubs"
      ],
    },
  ];

  const showNotification = (message) => {
    setNotification(message);
    setTimeout(() => setNotification(''), 3000);
  };

  const handleAddToCart = (product, quantity) => {
    addToCart(product, quantity);
    showNotification(`${product.title} added to cart!`);
    const inputEl = document.getElementById(`qty-block-${products.findIndex(p => p.id === product.id)}`);
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
          fontSize: "55px",
          marginBottom: "20px",
          color: "#00BFFF"
        }}
      >
        Dry Ice Blocks
      </h1>

      <p
        style={{
          textAlign: "center",
          color: "#C8D6E5",
          marginBottom: "60px",
          fontSize: "18px"
        }}
      >
        Premium industrial cooling solutions for storage and transportation.
      </p>

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
              borderRadius: "22px",
              overflow: "hidden",
              padding: "20px",
              transition: "0.3s",
              minHeight: "700px",
            }}
          >

            <div className="product-image-container">
              <img
                className="product-image"
                src={item.image}
                alt={item.title}
              />
            </div>

            <h2 style={{ marginTop: "20px" }}>
              {item.title}
            </h2>

            <p style={{
              color: "#94a3b8",
              fontSize: "14px",
              marginBottom: "10px"
            }}
            >
              Code: {item.productCode}
            </p>
            <h3 style={{ color: "#00BFFF" }}>
              {item.price}
            </h3>

            <p
              style={{
                color: item.availability === "In Stock" ? "#22c55e" : "#f59e0b",
                fontWeight: "bold",
                marginBottom: "8px"
              }}
            >
              ● {item.availability}
            </p>

            <p
              style={{
                color: "#94a3b8",
                fontSize: "14px",
                marginTop: "4px",
                marginBottom: "12px"
              }}
            >
              🚚 Delivery: {item.deliveryTime}
            </p>

            <p
              style={{
                color: "#FFD700",
                fontSize: "16px",
                fontWeight: "600",
                marginTop: "8px"
              }}
            >
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

            <p style={{ color: "#CBD6E5" }}>
              {item.desc}
            </p>

            <h4 style={{ color: "#00BFFF", marginTop: "20px" }}>
              Specifications
            </h4>

            <ul style={{ color: "#CBD6E5", lineHeight: "28px" }}>
              {item.specifications.map((spec, i) => (
                <li key={i}>{spec}</li>
              ))}
            </ul>

            <h4 style={{ color: "#00BFFF", marginTop: "20px" }}>
              Applications
            </h4>

            <ul style={{ color: "#CBD6E5", lineHeight: "28px" }}>
              {item.applications.map((app, i) => (
                <li key={i}>{app}</li>
              ))}
            </ul>

            <h4 style={{ color: "#00BFFF", marginTop: "20px" }}>
              Industries Served
            </h4>

            <ul style={{ color: "#CBD6E5", lineHeight: "28px" }}>
              {item.industries.map((industry, i) => (
                <li key={i}>{industry}</li>
              ))}
            </ul>

            <div style={{ display: "flex", gap: "12px", marginTop: "20px", alignItems: "center" }}>


              <input
                type="number"
                min={1}
                defaultValue={1}
                id={`qty-block-${index}`}
                style={{ width: 90, padding: "10px", borderRadius: 8, border: "1px solid #243644", background: "#07121a", color: "white" }}
              />

              {item.quoteOnly && (
                <button
                  onClick={() => {
                    const el = document.getElementById(`qty-block-${index}`);
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
                    const el = document.getElementById(`qty-block-${index}`);
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

export default DryIceBlocks;

