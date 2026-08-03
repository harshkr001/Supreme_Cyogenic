import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import co2Img from "../assets/co2.jpeg";
import oxygenImg from "../assets/oxygen.jpeg";
import nitrogenImg from "../assets/nitrogen.jpeg";
import argonImg from "../assets/argon.jpeg";
import mixArgonImg from "../assets/mixargon.jpeg";


const products = [
    
  {
    title: "Carbon Dioxide (CO₂)",
    image: co2Img,
    route: "/co2",
    description:
      "High-purity carbon dioxide designed for food processing, beverage carbonation, dry ice production, pharmaceutical applications, and industrial manufacturing.",
    applications: [
      "Food & Beverage",
      "Dry Ice Production",
      "Pharmaceutical Industry",
      "Industrial Manufacturing",
    ],
  },
  {
    title: "Oxygen (O₂)",
    image: oxygenImg,
    route: "/oxygen",
    description:
      "Premium industrial oxygen suitable for healthcare support, metal fabrication, chemical processing, and heavy industrial operations.",
    applications: [
      "Medical Support",
      "Metal Cutting",
      "Steel Industry",
      "Chemical Processing",
    ],
  },
  {
    title: "Nitrogen (N₂)",
    image: nitrogenImg,
    route: "/nitrogen",
    description:
      "High-purity nitrogen for food packaging, electronics manufacturing, laboratories, cryogenic cooling, and industrial applications.",
    applications: [
      "Food Packaging",
      "Cryogenic Cooling",
      "Laboratories",
      "Electronics",
    ],
  },
  {
    title: "Argon (Ar)",
    image: argonImg,
    route: "/argon",
    description:
      "High-quality argon gas providing excellent shielding for welding, metallurgy, fabrication, and industrial manufacturing.",
    applications: [
      "TIG Welding",
      "MIG Welding",
      "Metal Fabrication",
      "Metallurgy",
    ],
  },
  {
    title: "Mixed Argon Gas",
    image: mixArgonImg,
    route: "/mixargon",
    description:
      "Specially formulated argon gas mixtures delivering stable arcs, cleaner welds, and improved productivity for industrial welding.",
    applications: [
      "MIG Welding",
      "Automotive Industry",
      "Heavy Engineering",
      "Industrial Fabrication",
    ],
  },
];

const GasProducts = () => {
    const navigate = useNavigate();
  return (
    <section
      id="gas-products"
      style={{
        background: "#081B2E",
        padding: "100px 8%",
        color: "white",
        scrollMarginTop: "100px",
      }}
    >
      <h2
        style={{
          textAlign: "center",
          fontSize: "46px",
          marginBottom: "20px",
        }}
      >
        Our Industrial Gas Products
      </h2>

      <p
        style={{
          textAlign: "center",
          maxWidth: "800px",
          margin: "0 auto 60px",
          color: "#BFD2E5",
          lineHeight: "1.8",
          fontSize: "17px",
        }}
      >
        We supply premium-quality industrial gases that meet the highest
        standards of purity, safety, and reliability for a wide range of
        industrial and commercial applications.
      </p>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit,minmax(340px,1fr))",
          gap: "35px",
        }}
      >
        {products.map((product, index) => (
          <motion.div
            key={index}
            whileHover={{
              y: -10,
              scale: 1.02,
              boxShadow: "0 20px 45px rgba(0,191,255,0.3)",
            }}
            transition={{ duration: 0.3 }}
            style={{
              background: "rgba(255,255,255,0.05)",
              borderRadius: "20px",
              overflow: "hidden",
              border: "1px solid rgba(255,255,255,0.08)",
              backdropFilter: "blur(10px)",
            }}
          >
            <img
              src={product.image}
              alt={product.title}
              style={{
                width: "100%",
                height: "250px",
                objectFit: "cover",
              }}
            />

            <div style={{ padding: "25px" }}>
              <h3
                style={{
                  color: "#00BFFF",
                  marginBottom: "15px",
                  fontSize: "28px",
                }}
              >
                {product.title}
              </h3>

              <p
                style={{
                  color: "#D8E7F2",
                  lineHeight: "1.8",
                  marginBottom: "20px",
                }}
              >
                {product.description}
              </p>

              <h4
                style={{
                  marginBottom: "10px",
                  color: "white",
                }}
              >
                Applications
              </h4>

              <ul
                style={{
                  color: "#BFD2E5",
                  lineHeight: "1.8",
                  paddingLeft: "20px",
                }}
              >
                {product.applications.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>

              <button
                onClick={() =>
                    navigate(product.route)
                }
                style={{
                  marginTop: "25px",
                  padding: "12px 28px",
                  background: "#00BFFF",
                  color: "white",
                  border: "none",
                  borderRadius: "8px",
                  cursor: "pointer",
                  fontWeight: "600",
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
};

export default GasProducts;