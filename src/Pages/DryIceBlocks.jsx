import { useState } from "react";
import { addToCart } from "../lib/cart";

function DryIceBlocks() {
  const [added, setAdded] = useState({});

  const products = [
    {
      image: "/block1.jpeg",
      title: "Industrial Dry Ice Blocks",
      price: "LKR 1200 / 5kg",
      desc: "High quality dry ice blocks for industrial cooling and transport."
    },

    {
      image: "/block2.jpeg",
      title: "Premium Cooling Blocks",
      price: "LKR 2200 / 10kg",
      desc: "Long-lasting cooling blocks suitable for storage applications."
    },

    {
      image: "/block3.jpeg",
      title: "Bulk Dry Ice Blocks",
      price: "Custom Pricing",
      desc: "Bulk supply solutions for industrial and commercial operations."
    }
  ];

  return (
    <div
      style={{
        padding:"120px 50px",
        minHeight:"100vh",
        background:"#07111d",
        color:"white"
      }}
    >

      <h1
        style={{
          textAlign:"center",
          fontSize:"55px",
          marginBottom:"20px",
          color:"#00BFFF"
        }}
      >
        Dry Ice Blocks
      </h1>

      <p
        style={{
          textAlign:"center",
          color:"#C8D6E5",
          marginBottom:"60px",
          fontSize:"18px"
        }}
      >
        Premium industrial cooling solutions for storage and transportation.
      </p>

      <div
        style={{
          display:"grid",
          gridTemplateColumns:
          "repeat(auto-fit,minmax(320px,1fr))",
          gap:"30px"
        }}
      >

        {products.map((item,index)=>(

          <div
            key={index}
            style={{
              background:"#111a25",
              borderRadius:"22px",
              overflow:"hidden",
              padding:"20px",
              transition:"0.3s"
            }}
          >

            <img
              src={item.image}
              alt=""
              style={{
                width:"100%",
                height:"250px",
                objectFit:"cover",
                borderRadius:"16px"
              }}
            />

            <h2 style={{marginTop:"20px"}}>
              {item.title}
            </h2>

            <h3 style={{color:"#00BFFF"}}>
              {item.price}
            </h3>

            <p style={{color:"#C8D6E5"}}>
              {item.desc}
            </p>

            <div style={{ display: "flex", gap: "12px", marginTop: "20px", alignItems: "center" }}>
              <input
                type="number"
                min={1}
                defaultValue={1}
                id={`qty-block-${index}`}
                style={{ width: 90, padding: "10px", borderRadius: 8, border: "1px solid #243644", background: "#07121a", color: "white" }}
              />

              {added[index] ? (
                <button
                  onClick={() => { window.location.href = "/cart"; }}
                  style={{
                    flex:1,
                    padding:"12px",
                    background:"#00BFFF",
                    border:"none",
                    borderRadius:"10px",
                    color:"white",
                    fontWeight:"bold",
                    cursor:"pointer"
                  }}
                >
                  Go to Cart
                </button>
              ) : (
                <button
                  onClick={() => {
                    const el = document.getElementById(`qty-block-${index}`);
                    const qty = Math.max(1, parseInt(el?.value || "1", 10));
                    addToCart({ id: `block-${index}`, title: item.title, price: item.price, image: item.image }, qty);
                    el.value = "1";
                    setAdded((p) => ({ ...p, [index]: true }));
                    alert(`${qty} x ${item.title} added to cart`);
                  }}
                  style={{
                    flex:1,
                    padding:"12px",
                    background:"#00BFFF",
                    border:"none",
                    borderRadius:"10px",
                    color:"white",
                    fontWeight:"bold",
                    cursor:"pointer"
                  }}
                >
                  Add to Cart
                </button>
              )}

              <button
                style={{
                  flex:1,
                  padding:"12px",
                  background:"transparent",
                  border:"2px solid #00BFFF",
                  borderRadius:"10px",
                  color:"#00BFFF",
                  fontWeight:"bold",
                  cursor:"pointer"
                }}
                onClick={() => {
                  const el = document.getElementById(`qty-block-${index}`);
                  const qty = Math.max(1, parseInt(el?.value || "1", 10));
                  addToCart({ id: `block-${index}`, title: item.title, price: item.price, image: item.image }, qty);
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
  );
}

export default DryIceBlocks;