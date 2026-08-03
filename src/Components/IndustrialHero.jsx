import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import industrialVideo from "../assets/gases.mp4";

const IndustrialHero = () => {
  const navigate = useNavigate();

  return (
    <section
      style={{
        position: "relative",
        height: "100vh",
        overflow: "hidden",
      }}
    >
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        style={{
          position: "absolute",
          width: "100%",
          height: "100%",
          objectFit: "cover",
        }}
      >
        <source src={industrialVideo} type="video/mp4" />
      </video>

      {/* Dark Overlay */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: "rgba(0,0,0,0.55)",
        }}
      />

      {/* Hero Content */}
      <div
        style={{
          position: "relative",
          zIndex: 2,
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
          color: "white",
          padding: "0 20px",
        }}
      >
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          style={{
            fontSize: "64px",
            fontWeight: "700",
            marginBottom: "20px",
          }}
        >
          Premium Industrial Gas Solutions
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          style={{
            maxWidth: "900px",
            fontSize: "22px",
            lineHeight: "1.7",
            color: "#E3F2FD",
          }}
        >
          Delivering high-purity industrial gases for manufacturing,
          healthcare, food processing, laboratories, welding, and cryogenic
          applications with unmatched quality, safety, and reliability.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          style={{
            marginTop: "40px",
            display: "flex",
            gap: "20px",
            flexWrap: "wrap",
            justifyContent: "center",
          }}
        >
          {/* Explore Products */}
          <button
            onClick={() =>
              document.getElementById("gas-products")?.scrollIntoView({
                behavior: "smooth",
              })
            }
            style={{
              padding: "15px 35px",
              background: "#00BFFF",
              color: "white",
              border: "none",
              borderRadius: "8px",
              fontSize: "17px",
              cursor: "pointer",
              fontWeight: "600",
            }}
          >
            Explore Products
          </button>

          {/* Request Quote */}
          <button
            onClick={() => navigate("/contact")}
            style={{
              padding: "15px 35px",
              background: "transparent",
              color: "white",
              border: "2px solid white",
              borderRadius: "8px",
              fontSize: "17px",
              cursor: "pointer",
              fontWeight: "600",
            }}
          >
            Request a Quote
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default IndustrialHero;