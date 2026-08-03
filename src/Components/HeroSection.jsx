import { motion } from "framer-motion";
import heroVideo from "../assets/hero2.mp4";

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
          background: "rgba(0, 10, 30, 0.30)",
          zIndex: 1,
        }}
      />

      <motion.div
        initial={{ x: -150, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1, ease: "easeOut", delay: 5 }}
        style={{
          color: "white",
          maxWidth: isMobile ? "100%" : "700px",
          position: "relative",
          zIndex: 2,

          marginLeft: isMobile ? "0" : "80px",
          marginRight: "auto",

          textAlign: isMobile ? "center" : "left",
        }}>
        <h1 style={{
          fontSize: isMobile ? "42px" : "72px",
          marginBottom: "15px",
          lineHeight: "1.05",
          fontWeight: "800",
          letterSpacing: "-1px",
          textShadow: "0 4px 20px rgba(0,0,0,0.45)",
        }}>
          Reliable Industrial
          <br />
          Gas Solutions
        </h1>
        <h2 style={{
          fontSize: isMobile ? "24px" : "34px",
          color: "#00D4FF",
          marginBottom: "25px",
          fontWeight: "700",
          textShadow: "0 2px 12px rgba(0,0,0,0.4)",
        }}>
          For Every Industry
        </h2>
        <p className="hero-text"
          style={{
            fontSize: isMobile ? "17px" : "22px",
            lineHeight: "1.9",
            maxWidth: "620px",
            marginBottom: "45px",
            color: "#EAF6FF",
            textShadow: "0 2px 12px rgba(0,0,0,0.4)"
          }}
        >
          Delivering premium Industrial Gases, Liquid CO₂, Oxygen, Nitrogen, Argon, and Dry Ice products
          with uncompromising quality, safety, and dependable nationwide supply.

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
              padding: "18px 42px",
              background: "#00BFFF",
              color: "white",
              border: "none",
              borderRadius: "14px",
              fontSize: "20px",
              fontWeight: "bold",
              cursor: "pointer",
              boxShadow: "0 10px 25px rgba(0,229,255,0.2)",
              transition: "0.3s"
            }}>
              Explore Products →
            </button>
          </a>

          <a href="/contact">
            <button style={{
              padding: "18px 42px",
              background: "white",
              color: "black",
              border: "2px solid #ddd",
              borderRadius: "14px",
              fontSize: "18px",
              fontWeight: "bold",
              cursor: "pointer",
              transition: "0.3s"
            }}>
              Get in Touch
            </button>
          </a>



        </div>

        <div
          style={{
            display: "flex",
            justifyContent: isMobile ? "center" : "flex-start",
            gap: isMobile ? "30px" : "80px",
            marginTop: "20px",
            flexWrap: "wrap"

          }}
        >

          <div>
            <h2 style={{
               color: "#00D4FF",
               fontSize: isMobile ? "28px" : "38px",
               marginBottom: "6px"
              }}>
              500+</h2>
            <p style={{
              color: "#E5E7EB",
              fontSize: "16px"
            }}
            >Industrial Clients</p>
          </div>

          <div>
            <h2 style={{ 
              color: "#00AEEF",
              fontSize: isMobile ? "28px" : "38px",
              marginBottom: "6px"
            }}>
              99.9%</h2>
            <p style={{
              color: "#E5E7EB",
              fontSize: "16px"
            }}
            >Supply Reliability</p>
          </div>

          <div>
            <h2 style={{ 
              color: "#00AEEF",
              fontSize: isMobile ? "28px" : "38px",
              marginBottom: "6px"
            }}>
                24/7</h2>
            <p style={{
              color: "#E5E7EB",
              fontSize: "16px"
            }}
            >Supply Support</p>
          </div>

        </div>


      </motion.div>




    </section>

  )
}
export default HeroSection;