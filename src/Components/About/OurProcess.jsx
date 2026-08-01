import { motion } from "framer-motion";

const steps = [
  {
    number: "01",
    title: "Gas Procurement",
    description:
      "High-quality industrial gases are sourced from trusted production facilities and stored under strict quality standards.",
  },
  {
    number: "02",
    title: "Cryogenic Storage",
    description:
      "Products are safely stored in insulated cryogenic tanks and storage systems to maintain purity and temperature.",
  },
  {
    number: "03",
    title: "Quality Inspection",
    description:
      "Every batch undergoes quality checks before dispatch to ensure safety, purity, and industry compliance.",
  },
  {
    number: "04",
    title: "Delivery & Support",
    description:
      "Products are delivered safely using insulated transportation with continuous customer support.",
  },
];

function OurProcess() {
  return (
    <section
      style={{
        background: "#061224",
        padding: "100px 80px",
        color: "white",
      }}
    >
      <h2
        style={{
          textAlign: "center",
          fontSize: "42px",
          marginBottom: "70px",
        }}
      >
        Our Process
      </h2>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit,minmax(250px,1fr))",
          gap: "30px",
        }}
      >
        {steps.map((step, index) => (
          <motion.div
            key={index}
            whileHover={{ y: -10 }}
            transition={{ duration: 0.3 }}
            style={{
              background: "#0E1B2A",
              padding: "35px",
              borderRadius: "18px",
              border: "1px solid rgba(0,191,255,0.15)",
            }}
          >
            <div
              style={{
                fontSize: "52px",
                color: "#00BFFF",
                fontWeight: "bold",
                marginBottom: "18px",
              }}
            >
              {step.number}
            </div>

            <h3 style={{ marginBottom: "15px" }}>
              {step.title}
            </h3>

            <p
              style={{
                color: "#C8D6E5",
                lineHeight: "1.7",
              }}
            >
              {step.description}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default OurProcess;