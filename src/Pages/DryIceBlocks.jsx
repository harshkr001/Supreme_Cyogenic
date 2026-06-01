import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCart } from "../Context/CartContext";

function DryIceBlocks() {
  const navigate = useNavigate();
  const { setCheckout } = useCart();
  const [added, setAdded] = useState({});

  const products = [
    {
      id: "block-0",
      image: "/block1.jpeg",
      title: "Industrial Dry Ice Blocks",
      price: "LKR 1200 / 5kg",
      desc: "High quality dry ice blocks for industrial cooling and transport."
    },
    {
      id: "block-1",
      image: "/block2.jpeg",
      title: "Premium Cooling Blocks",
      price: "LKR 2200 / 10kg",
      desc: "Long-lasting cooling blocks suitable for storage applications."
    },
    {
      id: "block-2",
      image: "/block3.jpeg",
      title: "Bulk Dry Ice Blocks",
      price: "Custom Pricing",
      desc: "Bulk supply solutions for industrial and commercial operations."
    }
  ];

  const handleProceedToCheckout = (product, quantity) => {
    const checkoutItems = [{ ...product, quantity }];
    const subtotal = parseFloat(product.price.split(" ")[1] || "0") * quantity;
    const total = subtotal * 1.18;

    setCheckout({ items: checkoutItems, total });
    navigate("/checkout");
  };

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

        {products.map((item, index)=>(

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
              alt={item.title}
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
                  onClick={() => {
                    const el = document.getElementById(`qty-block-${index}`);
                    const qty = Math.max(1, parseInt(el?.value || "1", 10));
                    handleProceedToCheckout(item, qty);
                  }}
                  style={{
                    flex:1,
                    padding:"12px",
                    background:"#00BFFF",
                    border:"none",
                    borderRadius:"10px",
                    color:"white",
                    fontWeight:"bold",
                    cursor:"pointer",
                    transition: "opacity 0.2s ease"
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.9")}
                  onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
                >
                  Proceed to Buy
                </button>
              ) : (
                <button
                  onClick={() => {
                    const el = document.getElementById(`qty-block-${index}`);
                    const qty = Math.max(1, parseInt(el?.value || "1", 10));
                    el.value = "1";
                    setAdded((p) => ({ ...p, [index]: true }));
                  }}
                  style={{
                    flex:1,
                    padding:"12px",
                    background:"#00BFFF",
                    border:"none",
                    borderRadius:"10px",
                    color:"white",
                    fontWeight:"bold",
                    cursor:"pointer",
                    transition: "opacity 0.2s ease"
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.9")}
                  onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
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
                  cursor:"pointer",
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
                  handleProceedToCheckout(item, qty);
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
