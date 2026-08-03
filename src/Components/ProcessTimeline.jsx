import { motion } from "framer-motion";

import {
    FaPhoneAlt,
    FaClipboardCheck,
    FaIndustry,
    FaCheckCircle,
    FaBoxOpen,
    FaTruck,
} from "react-icons/fa";

const steps = [
  {
    number: "01",
    icon: <FaPhoneAlt />,
    title: "Customer Inquiry",
    description: "Customers contact us with their dry ice or CO₂ requirements.",
  },
  {
    number: "02",
    icon: <FaClipboardCheck />,
    title: "Order Confirmation",
    description: "We confirm specifications, quantity, and delivery schedule.",
  },
  {
    number: "03",
    icon: <FaIndustry />,
    title: "Dry Ice Production",
    description: "Premium-quality dry ice pellets or blocks are manufactured.",
  },
  {
    number: "04",
    icon: <FaCheckCircle />,
    title: "Quality Inspection",
    description: "Every batch is checked to ensure purity and performance.",
  },
  {
    number: "05",
    icon: <FaBoxOpen />,
    title: "Secure Packaging",
    description: "Products are packed to minimize sublimation during transport.",
  },
  {
    number: "06",
    icon: <FaTruck />,
    title: "Fast Delivery",
    description: "Orders are delivered safely and on time to your location.",
  },
];

export default function ProcessTimeline() {
  return (
    <section
      style={{
        padding: "140px 24px",
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
            gap: "32px",
          }}
        >
          {steps.map((step, index) => (
            <motion.div
              whileHover={{
                y: -12,
                scale: 1.04,
                boxShadow: "0 25px 60px rgba(0,200,255,0.3)",
              }}
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              viewport={{ once: true }}
              style={{
                flex: "1 1 300px",
                maxWidth: "350px",
                background: "rgba(5,20,42,0.75)",
                backdropFilter: "blur(15px)",
                WebkitBackdropFilter: "blur(15px)",
                border: "1px solid rgba(255,255,255,0.12)",
                borderRadius: "20px",
                position: "relative",
                padding: "30px",
                color: "#fff",
                boxShadow: "0 15px 40px rgba(0,0,0,0.35)",
                overflow: "hidden",
              }}
            >
                
              <div
                style={{
                  position: "absolute",
                  top: "15px",
                  right: "20px",
                  
                  fontSize: "36px",
                  fontWeight: 700,
                  color: "rgba(255,255,255,0.12)",
                  userSelect: "none",
                }}
              >
                {step.number}
              </div>

              <div
                style={{
                    fontSize: "40px",
                    color: "#00D8FF",
                    display: "flex",
                    justifyContent: "center",
                    marginBottom: "20px",
                }}
              >
                {step.icon}
            

              </div>

              <h3
                style={{
                  fontSize: "24px",  
                  fontWeight: 700,
                  color: "#ffffff",
                  textAlign: "center",
                  marginBottom: "14px",
                }}
              >
                {step.title}
              </h3>

              <p 
                style={{
                    color: "#cbd5e1",
                    fontSize: "16px",

                    lineHeight: "1.8",
                    textAlign: "center",
                    margin: 0,
                 }}
                >
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}