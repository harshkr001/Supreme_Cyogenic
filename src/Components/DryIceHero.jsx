import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import dryIceHero from "../assets/dryiceHero.mp4";


const DryIceHero = () => {
  const navigate = useNavigate();
  return (
    <section
      style={{
        position: "relative",
        height: "100vh",
        width: "100%",
        overflow: "hidden",
      }}
    >
      {/* Background Video */}
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
        }}
      >
        <source src={dryIceHero} type="video/mp4" />
      </video>

      {/* Dark Overlay */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: "rgba(5,20,42,0.65)",
        }}
      />

      {/* Hero Content */}
      <div
        style={{
          position: "relative",
          zIndex: 2,
          height: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          textAlign: "center",
          padding: "20px",
        }}
      >
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          style={{
            fontSize: "58px",
            color: "#fff",
            fontWeight: "700",
            marginBottom: "20px",
          }}
        >
          Premium Dry Ice Products
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          style={{
            color: "#DDEEFF",
            fontSize: "20px",
            maxWidth: "900px",
            lineHeight: "34px",
          }}
        >
          High-purity Dry Ice Blocks and Dry Ice Pellets for industrial
          cooling, pharmaceutical logistics, food preservation, and dry ice
          blasting.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          style={{
            marginTop: "40px",
            display: "flex",
            gap: "20px",
          }}
        >
          <button
            onClick={() => {
              document.getElementById("products")?.scrollIntoView({
                behavior: "smooth",
                block: "start",
              });
            }}
            style={{
              padding: "15px 35px",
              background: "#00BFFF",
              color: "white",
              border: "none",
              borderRadius: "8px",
              fontSize: "17px",
              cursor: "pointer",
            }}
          >
            Explore Products
          </button>

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
            }}
          >
            Request a Quote
          </button>

        </motion.div>
      </div>
    </section>
  );
};

export default DryIceHero;