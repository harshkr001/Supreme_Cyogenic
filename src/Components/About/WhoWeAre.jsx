function WhoWeAre() {
  return (
    <section
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        gap: "60px",
        padding: "90px 70px",
        flexWrap: "wrap",
      }}
    >
      {/* Left Image */}

      <div style={{ flex: 1, minWidth: "350px" }}>
        <img
          src="/toto.jpeg"
          alt="Supreme Cryogenic"
          style={{
            width: "100%",
            height: "500px",
            objectFit: "cover",
            borderRadius: "18px",
            boxShadow: "0 20px 60px rgba(0,191,255,.25)",
          }}
        />
      </div>

      {/* Right Content */}

      <div style={{ flex: 1, minWidth: "350px" }}>
        <p
          style={{
            color: "#00BFFF",
            letterSpacing: "3px",
            fontWeight: "600",
          }}
        >
          WHO WE ARE
        </p>

        <h2
          style={{
            fontSize: "46px",
            marginTop: "10px",
            marginBottom: "25px",
            lineHeight: "1.2",
          }}
        >
          Delivering Reliable Cryogenic Solutions
        </h2>

        <p
          style={{
            color: "#C8D6E5",
            fontSize: "18px",
            lineHeight: "1.9",
          }}
        >
          Supreme Cryogenic is a trusted supplier of premium Dry Ice,
          Liquid Carbon Dioxide (CO₂), Liquid Oxygen (LOX), Liquid
          Nitrogen (LIN), Liquid Argon (LAR), Cryogenic Cylinders,
          and industrial gas solutions across India.
        </p>

        <p
          style={{
            color: "#C8D6E5",
            fontSize: "18px",
            lineHeight: "1.9",
            marginTop: "20px",
          }}
        >
          We provide dependable cryogenic products and logistics
          services to food processing, healthcare,
          pharmaceuticals, manufacturing,
          welding, research laboratories,
          and cold-chain transportation industries.
        </p>
      </div>
    </section>
  );
}

export default WhoWeAre;