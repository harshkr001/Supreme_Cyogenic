import { motion } from "framer-motion";

const steps = [
  {
    icon: "📞",
    title: "Customer Inquiry",
    description: "Customers contact us with their dry ice or CO₂ requirements.",
  },
  {
    icon: "📝",
    title: "Order Confirmation",
    description: "We confirm specifications, quantity, and delivery schedule.",
  },
  {
    icon: "🏭",
    title: "Dry Ice Production",
    description: "Premium-quality dry ice pellets or blocks are manufactured.",
  },
  {
    icon: "✅",
    title: "Quality Inspection",
    description: "Every batch is checked to ensure purity and performance.",
  },
  {
    icon: "📦",
    title: "Secure Packaging",
    description: "Products are packed to minimize sublimation during transport.",
  },
  {
    icon: "🚚",
    title: "Fast Delivery",
    description: "Orders are delivered safely and on time to your location.",
  },
];

export default function ProcessTimeline() {
  return (
    <section
      style={{
        padding: "100px 24px",
        background: "#08121f",
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          textAlign: "center",
        }}
      >
        <p
          style={{
            color: "#4FC3F7",
            fontWeight: 600,
            letterSpacing: "2px",
            textTransform: "uppercase",
          }}
        >
          How We Work
        </p>

        <h2
          style={{
            color: "#fff",
            fontSize: "42px",
            marginBottom: "60px",
          }}
        >
          Our Process
        </h2>

        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            gap: "24px",
          }}
        >
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              viewport={{ once: true }}
              style={{
                flex: "1 1 280px",
                maxWidth: "320px",
                background: "#0d1f33",
                borderRadius: "20px",
                padding: "30px",
                color: "#fff",
                boxShadow: "0 10px 30px rgba(0,0,0,0.3)",
              }}
            >
              <div
                style={{
                  fontSize: "40px",
                  marginBottom: "20px",
                }}
              >
                {step.icon}
              </div>

              <h3>{step.title}</h3>

              <p style={{ color: "#cbd5e1", lineHeight: "1.7" }}>
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}