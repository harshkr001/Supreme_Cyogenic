import Footer from "../Components/Footer"

function About() {
  return (
    <div
      style={{
        background: "#061224",
        color: "white",
        minHeight: "100vh",
        paddingTop: "120px"
      }}
    >

      {/* HERO SECTION */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "60px",
          gap: "50px",
          flexWrap: "wrap"
        }}
      >

        {/* LEFT */}
        <div style={{ flex: 1 }}>
          <h1
            style={{
              fontSize: "64px",
              fontWeight: "bold",
              marginBottom: "20px",
              lineHeight: "1.1"
            }}
          >
            About <span style={{ color: "#00e5ff" }}>Supreme Cryogenic</span>
          </h1>

          <p
            style={{
              fontSize: "22px",
              color: "#cbd5e1",
              lineHeight: "1.8",
              maxWidth: "700px"
            }}
          >
            Supreme Cryogenic is a trusted supplier of premium dry ice,
            industrial CO₂ solutions, and cryogenic products designed for
            industries requiring reliable cooling and transportation systems.
          </p>

          <div
            style={{
              display: "flex",
              gap: "30px",
              marginTop: "40px",
              flexWrap: "wrap"
            }}
          >
            <div>
              <h2 style={{ color: "#00e5ff", fontSize: "40px" }}>10+</h2>
              <p>Years Experience</p>
            </div>

            <div>
              <h2 style={{ color: "#00e5ff", fontSize: "40px" }}>500+</h2>
              <p>Clients Served</p>
            </div>

            <div>
              <h2 style={{ color: "#00e5ff", fontSize: "40px" }}>24/7</h2>
              <p>Supply Support</p>
            </div>
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div style={{ flex: 1, textAlign: "center" }}>
          <img
            src="/about.jpeg"
            alt="About Supreme Cryogenic"
            style={{
              width: "100%",
              maxWidth: "600px",
              borderRadius: "30px",
              objectFit: "cover",
              boxShadow: "0 20px 60px rgba(0,0,0,0.4)"
            }}
          />
        </div>
      </div>

      {/* MISSION SECTION */}
      <div
        style={{
          padding: "80px 60px",
          textAlign: "center"
        }}
      >
        <h2
          style={{
            fontSize: "48px",
            marginBottom: "30px"
          }}
        >
          Our Mission
        </h2>

        <p
          style={{
            maxWidth: "900px",
            margin: "0 auto",
            fontSize: "22px",
            lineHeight: "1.8",
            color: "#cbd5e1"
          }}
        >
          Our mission is to provide innovative and reliable cryogenic
          solutions with exceptional service quality, helping industries
          maintain safe transportation, cooling efficiency, and operational
          excellence.
        </p>
      </div>

      {/* FEATURES */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: "30px",
          padding: "60px",
          flexWrap: "wrap"
        }}
      >

        <div
          style={{
            background: "#0d1b2a",
            padding: "40px",
            borderRadius: "24px",
            textAlign: "center"
          }}
        >
          <h2 style={{ color: "#00e5ff" }}>Premium Quality</h2>
          <p style={{ color: "#cbd5e1", marginTop: "15px" }}>
            High-grade dry ice and CO₂ products for industrial excellence.
          </p>
        </div>

        <div
          style={{
            background: "#0d1b2a",
            padding: "40px",
            borderRadius: "24px",
            textAlign: "center"
          }}
        >
          <h2 style={{ color: "#00e5ff" }}>Fast Delivery</h2>
          <p style={{ color: "#cbd5e1", marginTop: "15px" }}>
            Reliable and fast transportation solutions across Sri Lanka.
          </p>
        </div>

        <div
          style={{
            background: "#0d1b2a",
            padding: "40px",
            borderRadius: "24px",
            textAlign: "center"
          }}
        >
          <h2 style={{ color: "#00e5ff" }}>24/7 Support</h2>
          <p style={{ color: "#cbd5e1", marginTop: "15px" }}>
            Dedicated support team available anytime for urgent supply needs.
          </p>
        </div>

      </div>

      
    </div>
  )
}

export default About