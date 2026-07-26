import dryIceBlock from "../assets/Blocks.jpeg";
import dryIcePellet from "../assets/Pellets.jpeg";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const products = [
  {
    title: "Dry Ice Blocks",
    image: dryIceBlock,
    description:
      "High-density dry ice blocks designed for long-lasting cooling during transportation, storage, and industrial applications.",
    applications: [
      "Food Preservation",
      "Cold Chain Logistics",
      "Pharmaceutical Transport",
      "Industrial Cooling",
    ],
    link: "/dry-ice/blocks",
  },
  {
    title: "Dry Ice Pellets",
    image: dryIcePellet,
    description:
      "Premium dry ice pellets suitable for dry ice blasting, precision cleaning, and industrial manufacturing processes.",
    applications: [
      "Dry Ice Blasting",
      "Surface Cleaning",
      "Manufacturing",
      "Pharmaceutical Industry",
    ],
    link: "/dry-ice/pellets",
  },
];

const DryIceProducts = () => {
  return (
    <section
      id="products"
      style={{
        background: "#081B2E",
        padding: "100px 8%",
        color: "white",
      }}
    >
      <h2
        style={{
          textAlign: "center",
          fontSize: "46px",
          marginBottom: "20px",
        }}
      >
        Our Dry Ice Products
      </h2>

      <p
        style={{
          textAlign: "center",
          maxWidth: "750px",
          margin: "0 auto 60px",
          color: "#BFD2E5",
        }}
      >
        Discover our premium range of dry ice solutions engineered for
        industrial, commercial, medical, and food-grade applications.
      </p>

      <div
        style={{
          display: "flex",
          gap: "35px",
          flexWrap: "wrap",
          justifyContent: "center",
        }}
      >
        {products.map((product, index) => (
          <motion.div
            key={index}
            whileHover={{ y: -8 }}
            style={{
              background: "#102840",
              borderRadius: "18px",
              overflow: "hidden",
              maxWidth: "520px",
              flex: "1 1 450px",
            }}
          >
            <img
              src={product.image}
              alt={product.title}
              style={{
                width: "100%",
                height: "260px",
                objectFit: "cover",
              }}
            />

            <div style={{ padding: "28px" }}>
              <h3 style={{ fontSize: "30px" }}>
                {product.title}
              </h3>

              <p
                style={{
                  color: "#C8D5E3",
                  lineHeight: "1.8",
                  marginTop: "15px",
                }}
              >
                {product.description}
              </p>

              <h4 style={{ marginTop: "25px" }}>
                Applications
              </h4>

              <ul style={{ lineHeight: "2" }}>
                {product.applications.map((item) => (
                  <li key={item}>✓ {item}</li>
                ))}
              </ul>

              <Link to={product.link}>
                <button
                  style={{
                    marginTop: "25px",
                    padding: "14px 28px",
                    background: "#00BFFF",
                    color: "white",
                    border: "none",
                    borderRadius: "8px",
                    cursor: "pointer",
                  }}
                >
                  Learn More →
                </button>
              </Link>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default DryIceProducts;