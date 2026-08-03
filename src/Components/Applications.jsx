import { motion } from "framer-motion";

import foodImg from "../assets/Coldstorage.jpeg";
import pharmaImg from "../assets/Scientists.jpeg";
import logisticsImg from "../assets/Warehouse.jpeg";
import manufacturingImg from "../assets/Cooling.jpeg";
import blastingImg from "../assets/Tech_cleaning.jpeg";
import eventsImg from "../assets/Wedding.jpeg";


const applications = [
  {
    title: "Food & Beverage",
    image: foodImg,
    desc: "Keeps frozen foods, seafood, dairy products, and beverages fresh during storage and transportation."
  },
  {
    title: "Pharmaceutical",
    image: pharmaImg,
    desc: "Ensures safe transportation of vaccines, medicines, biological samples, and temperature-sensitive healthcare products."
  },
  {
    title: "Cold Chain Logistics",
    image: logisticsImg,
    desc: "Maintains consistent low temperatures for safe delivery of perishable goods across long distances."
  },
  {
    title: "Industrial Manufacturing",
    image: manufacturingImg,
    desc: "Used for industrial cooling, shrink fitting, and production processes requiring precise temperature control."
  },
  {
    title: "Dry Ice Blasting",
    image: blastingImg,
    desc: "Provides eco-friendly, non-abrasive cleaning for machinery and industrial equipment without water or chemical residue."
  },
  {
    title: "Events & Entertainment",
    image: eventsImg,
    desc: "Creates stunning low-lying fog effects for weddings, concerts, stage performances, and special events."
  }
];

function Applications() {
  return (
    <section
      style={{
        background: "#05142A",
        padding: "90px 8%",
      }}
    >
      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        style={{
          color: "#fff",
          textAlign: "center",
          fontSize: "42px",
          marginBottom: "15px",
        }}
      >
        Applications of Dry Ice
      </motion.h2>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        viewport={{ once: true }}
        style={{
          color: "#cfd8dc",
          textAlign: "center",
          maxWidth: "850px",
          margin: "0 auto 60px",
          lineHeight: "1.8",
          fontSize: "17px",
        }}
      >
        Discover how our premium dry ice solutions support industries with
        reliable cooling, preservation, industrial cleaning, and stunning
        special effects.
      </motion.p>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit,minmax(320px,1fr))",
          gap: "30px",
        }}
      >
        {applications.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{
              y: -10,
              scale: 1.03,
              boxShadow: "0 20px 40px rgba(0,191,255,0.35)",
            }}
            transition={{ duration: 0.4 }}
            viewport={{ once: true }}
            style={{
              background: "rgba(255,255,255,0.05)",
              backdropFilter: "blur(12px)",
              borderRadius: "18px",
              overflow: "hidden",
              border: "1px solid rgba(255,255,255,0.08)",
            }}
          >
            <img
              src={item.image}
              alt={item.title}
              style={{
                width: "100%",
                height: "220px",
                objectFit: "cover",
              }}
            />

            <div style={{ padding: "25px" }}>
              <h3
                style={{
                  color: "#00BFFF",
                  marginBottom: "15px",
                  fontSize: "24px",
                }}
              >
                {item.title}
              </h3>

              <p
                style={{
                  color: "#d9d9d9",
                  lineHeight: "1.7",
                  marginBottom: "25px",
                }}
              >
                {item.desc}
              </p>

              <button
                style={{
                  background: "#00BFFF",
                  color: "#fff",
                  border: "none",
                  padding: "12px 24px",
                  borderRadius: "8px",
                  cursor: "pointer",
                  fontWeight: "600",
                  fontSize: "15px",
                }}
              >
                Learn More
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Applications;