import { motion } from "framer-motion";
import aboutImg from "../assets/about.png";

const AboutDryIce = () => {
  return (
    <section
      style={{
        background: "#07182B",
        color: "white",
        padding: "100px 8%",
      }}
    >
      <div
        style={{
          display: "flex",
          gap: "60px",
          alignItems: "center",
          flexWrap: "wrap",
        }}
      >
        {/* Image */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          style={{ flex: 1 }}
        >
          <img
            src={aboutImg}
            alt="Dry Ice"
            style={{
              width: "100%",
              borderRadius: "18px",
            }}
          />
        </motion.div>

        {/* Content */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          style={{ flex: 1 }}
        >
          <h2
            style={{
              fontSize: "42px",
              marginBottom: "25px",
            }}
          >
            What is Dry Ice?
          </h2>

          <p
            style={{
              lineHeight: "1.9",
              color: "#D0D8E5",
              fontSize: "18px",
            }}
          >
            Dry ice is the solid form of carbon dioxide (CO₂) with a
            temperature of -78.5°C. Unlike ordinary ice, it changes directly
            into carbon dioxide gas without leaving water behind. This makes it
            an ideal cooling solution for industrial applications, food
            preservation, pharmaceutical transportation, dry ice blasting, and
            cold chain logistics.
          </p>

          <div
            style={{
              marginTop: "30px",
              display: "grid",
              gridTemplateColumns: "repeat(2,1fr)",
              gap: "18px",
            }}
          >
            <div>✅ Temperature: -78.5°C</div>
            <div>✅ No Water Residue</div>
            <div>✅ Food Safe</div>
            <div>✅ Eco-Friendly Cooling</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutDryIce;