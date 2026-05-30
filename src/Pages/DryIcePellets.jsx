import { addToCart } from "../lib/cart";
import { useState } from "react";

function DryIcePellets() {
  const [added, setAdded] = useState({});
  const products = [
    {
      image: "/pellet1.jpeg",
      title: "Dry Ice Pellets – Industrial Grade",
      price: "LKR 850 / kg",
      desc: "High purity dry ice pellets for industrial cleaning and cooling."
    },

    {
      image: "/pellet2.jpeg",
      title: "Premium Dry Ice Pellets",
      price: "LKR 950 / kg",
      desc: "Suitable for cryogenic applications and food transport."
    },

    {
      image: "/pellet3.jpeg",
      title: "Bulk Dry Ice Pellets",
      price: "Custom Quote",
      desc: "Large quantity supply for industrial operations."
    }
  ];

  return (
    <div
      style={{
        padding: "120px 50px",
        minHeight: "100vh",
        background: "#07111d",
        color: "white"
      }}
    >
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
              alt=""
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
              <input id={`qty-pellet-${index}`} type="number" min={1} defaultValue={1} style={{ width: 90, padding: "10px", borderRadius: 8, border: "1px solid #243644", background: "#07121a", color: "white" }} />
              {added[index] ? (
                <button onClick={() => { window.location.href = "/cart"; }} style={{ flex:1, padding:"12px", background:"#00BFFF", border:"none", borderRadius:"10px", color:"white" }}>
                  Proceed to Buy
                </button>
              ) : (
                <>
                <button
                  onClick={() => {
                    const el = document.getElementById(`qty-pellet-${index}`);
                    const qty = Math.max(1, parseInt(el?.value || "1", 10));
                    addToCart({ id: `pellet-${index}`, title: item.title, price: item.price, image: item.image }, qty);
                    el.value = "1";
                    setAdded((p) => ({ ...p, [index]: true }));
                  }}
                  style={{ flex:1, padding:"12px", background:"#00BFFF", border:"none", borderRadius:"10px", color:"white" }}>
                  Add to Cart
                </button>
                <button style={{ flex:1, padding:"12px", background:"transparent", border:"2px solid #00BFFF", borderRadius:"10px", color:"#00BFFF" }} onClick={() => {
                    const el = document.getElementById(`qty-pellet-${index}`);
                    const qty = Math.max(1, parseInt(el?.value || "1", 10));
                    addToCart({ id: `pellet-${index}`, title: item.title, price: item.price, image: item.image }, qty);
                    window.location.href = "/login";
                  }}>
                  Buy Now
                </button>
                </>
              )}
            </div>
          </div>
        ))}
      </div>

    </div>
  );
}

export default DryIcePellets;