import { motion } from "framer-motion";
import heroVideo from "../assets/herovideo.mp4";

const isMobile = window.innerWidth <= 900

function HeroSection() {
  return (
    <section
      className="hero-section"
      style={{
        position: "relative",
        minHeight: "100vh",
        display: "flex",
        flexDirection: isMobile ? "column" : "row",
        alignItems: "center",
        justifyContent: "flex-start",
        gap: isMobile ? "50px" : "180px",
        padding: isMobile ? "100px 25px 60px" : "70px",
        overflow: "hidden",
      }}
    >
      <video
        autoPlay
        muted
        loop
        playsInline
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
          zIndex: 0,
        }}
      >
        <source src={heroVideo} type="video/mp4" />
      </video>

      <div
        style={{
          position: "absolute",
          inset: 0,
          background: "rgba(0, 10, 30, 0.45)",
          zIndex: 1,
        }}
      />

      <motion.div
        initial={{ x: -150, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1, ease: "easeOut", delay: 8 }}
        style={{
          color: "white",
          maxWidth: isMobile ? "100%" : "550px",
          position: "relative",
          zIndex: 2,

          marginLeft: isMobile ? "0" : "80px",
          marginRight: "auto",

          textAlign: isMobile ? "center" : "left",
        }}>
        <h1 style={{
          fontSize: isMobile ? "48px" : "70px",
          marginBottom: "10px",
          lineHeight: "1.1",
          fontWeight: "800"
        }}>
          Dry Ice Solutions
        </h1>
        <h2 style={{
          fontSize: isMobile ? "30px" : "40px",
          color: "#00BFFF",
          marginBottom: "35px",
          fontWeight: "600"
        }}>
          For Every Need
        </h2>
        <p className="hero-text"
          style={{
            fontSize: isMobile ? "18px" : "24px",
            lineHeight: "1.8",
            marginBottom: "50px",
            opacity: 0.9
          }}
        >
          Supreme Cryogenic delivers high-quality dry ice products with reliability and exceptional service since 2022.

        </p>

        <div
          style={{
            display: "flex",
            gap: "20px",
            justifyContent: isMobile ? "center" : "flex-start",
            flexWrap: "wrap",
            marginTop: "40px",
            marginBottom: "50px"
          }}
        >

          <a href="#products">
            <button style={{
              padding: "18px 35px",
              background: "#00BFFF",
              color: "white",
              border: "none",
              borderRadius: "12px",
              fontSize: "20px",
              fontWeight: "bold",
              cursor: "pointer",
              boxShadow: "0 10px 25px rgba(0,229,255,0.2)"
            }}>
              Explore Products →
            </button>
          </a>

          <a href="/login">
            <button style={{
              padding: "18px 35px",
              background: "white",
              color: "black",
              border: "2px solid #ddd",
              borderRadius: "12px",
              fontSize: "18px",
              fontWeight: "bold",
              cursor: "pointer"
            }}>
              Login / Sign Up
            </button>
          </a>



        </div>

        <div
          style={{
            display: "flex",
            gap: "70px",
            marginTop: "10px",
            justifyContent: isMobile ? "center" : "flex-start",
            flexWrap: "wrap"
            
          }}
        >

          <div>
            <h2 style={{ color: "#00AEEF" }}>2022+</h2>
            <p>Serving Since</p>
          </div>

          <div>
            <h2 style={{ color: "#00AEEF" }}>100%</h2>
            <p>Premium Quality</p>
          </div>

          <div>
            <h2 style={{ color: "#00AEEF" }}>24/7</h2>
            <p>Supply Support</p>
          </div>

        </div>


      </motion.div>




    </section>

  )
}
export default HeroSection;