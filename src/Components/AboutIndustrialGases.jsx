import { motion } from "framer-motion";
import aboutIndustrial from "../assets/Industrialgases.jpeg";

const AboutIndustrialGases = () => {
  return (
    <section
      style={{
        background: "#081B2E",
        color: "white",
        padding: "100px 8%",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: "60px",
          flexWrap: "wrap",
        }}
      >
        {/* Left Image */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          style={{ flex: "1" }}
        >
          <img
            src={aboutIndustrial}
            alt="Industrial Gases"
            style={{
              width: "100%",
              borderRadius: "20px",
              boxShadow: "0 15px 40px rgba(0,0,0,0.4)",
            }}
          />
        </motion.div>

        {/* Right Content */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          style={{ flex: "1" }}
        >
          <h2
            style={{
              fontSize: "44px",
              marginBottom: "20px",
            }}
          >
            About Industrial Gases
          </h2>

          <p
            style={{
              color: "#D8E7F2",
              lineHeight: "1.9",
              fontSize: "18px",
              marginBottom: "20px",
            }}
          >
            Supreme Cryogenic supplies premium industrial gases for
            manufacturing, healthcare, food processing, laboratories, welding,
            and cryogenic applications. Our products meet strict quality
            standards to ensure reliable performance and safety.
          </p>

          <p
            style={{
              color: "#D8E7F2",
              lineHeight: "1.9",
              fontSize: "18px",
              marginBottom: "35px",
            }}
          >
            With modern storage facilities, efficient logistics, and dedicated
            technical support, we provide dependable gas solutions tailored to
            meet diverse industrial requirements.
          </p>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(2,1fr)",
              gap: "18px",
            }}
          >
            <div>✔ High Purity Gases</div>
            <div>✔ Reliable Supply</div>
            <div>✔ Certified Safety</div>
            <div>✔ Bulk & Cylinder Supply</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutIndustrialGases;