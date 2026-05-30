import Footer from "../Components/Footer"
import { addToCart } from "../lib/cart";
import { useState } from "react";

const products = [
  {
    image: "/co2a.jpeg",
    title: "Industrial CO₂ Cylinders",
    price: "Custom Pricing",
    desc: "High purity industrial CO₂ gas for commercial and manufacturing applications."
  },

  {
    image: "/co2b.jpeg",
    title: "Beverage Grade CO₂",
    price: "LKR 4500 / Cylinder",
    desc: "Premium beverage-grade CO₂ solutions for restaurants and food industries."
  },

  {
    image: "/co2c.jpeg",
    title: "Bulk CO₂ Supply",
    price: "Bulk Orders Available",
    desc: "Reliable large-scale CO₂ supply solutions for industrial operations."
  }
]

function CO2() {
  const [added, setAdded] = useState({});
  return (
    <div
      style={{
        background: "#061224",
        minHeight: "100vh",
        padding: "120px 60px",
        color: "white"
      }}
    >
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
              <input id={`qty-co2-${index}`} type="number" min={1} defaultValue={1} style={{ width: 90, padding: "10px", borderRadius: 8, border: "1px solid #1b2b37", background: "#07121a", color: "white" }} />
              {added[index] ? (
                <button onClick={() => { window.location.href = "/cart"; }} style={{ flex: 1, padding: "14px", background: "#00e5ff", border: "none", borderRadius: "10px", fontWeight: "bold", cursor: "pointer" }}>
                  Proceed to Buy
                </button>
              ) : (
                <button
                  onClick={() => {
                    const el = document.getElementById(`qty-co2-${index}`);
                    const qty = Math.max(1, parseInt(el?.value || "1", 10));
                    addToCart({ id: `co2-${index}`, title: product.title, price: product.price, image: product.image }, qty);
                    el.value = "1";
                    setAdded((p) => ({ ...p, [index]: true }));
                  }}
                  style={{
                    flex: 1,
                    padding: "14px",
                    background: "#00e5ff",
                    border: "none",
                    borderRadius: "10px",
                    fontWeight: "bold",
                    cursor: "pointer"
                  }}
                >
                  Add To Cart
                </button>
              )}

              <button
                style={{
                  flex: 1,
                  padding: "14px",
                  background: "transparent",
                  color: "#00e5ff",
                  border: "2px solid #00e5ff",
                  borderRadius: "10px",
                  fontWeight: "bold",
                  cursor: "pointer"
                }}
                onClick={() => {
                  const el = document.getElementById(`qty-co2-${index}`);
                  const qty = Math.max(1, parseInt(el?.value || "1", 10));
                  addToCart({ id: `co2-${index}`, title: product.title, price: product.price, image: product.image }, qty);
                  window.location.href = "/login";
                }}
              >
                Buy Now
              </button>
            </div>
          </div>
        ))}
      </div>

      
    </div>
  )
}

export default CO2