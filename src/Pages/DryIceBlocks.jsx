function DryIceBlocks() {

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

            <div
              style={{
                display:"flex",
                gap:"12px",
                marginTop:"20px"
              }}
            >

              <button
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