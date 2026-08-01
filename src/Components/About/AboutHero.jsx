import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const isMobile = window.innerWidth <= 768;

function AboutHero() {
  return (
    <div
      style={{
        background: "#061224",
        color: "white",
        minHeight: "100vh",
        paddingTop: "120px"
      }}
    >

      {/* HERO SECTION */}
      <section

        style={{
          minHeight: "100vh",
          display: "flex",
          flexDirection: isMobile ? "column" : "row",
          alignItems: "center",
          justifyContent: "space-between",
          flexWrap: "nowrap",      // Add this
          gap: "70px",
          padding: isMobile ? "100px 25px" : "120px 80px",
        }}
      >

        {isMobile ? (
          <>
            {/* MOBILE LAYOUT */}

            <motion.div
              initial={{ opacity: 0, y: -40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              style={{ width: "100%", textAlign: "center" }}
            >
              <p
                style={{
                  color: "#00D4FF",
                  letterSpacing: "4px",
                  textTransform: "uppercase",
                  fontWeight: "700",
                  marginBottom: "20px",
                }}
              >
                About Supreme Cryogenic
              </p>

              <h1
                style={{
                  fontSize: "48px",
                  lineHeight: "1.2",
                  fontWeight: "800",
                  marginBottom: "40px",
                }}
              >
                Delivering Reliable
                <br />
                <span style={{ color: "#00D4FF" }}>Cryogenic Solutions</span>
                <br />
                Across India
              </h1>

              <img
                src="/1x.jpeg"
                alt="Supreme Cryogenic"
                style={{
                  width: "100%",
                  maxWidth: "700px",
                  borderRadius: "24px",
                  marginBottom: "40px",
                  boxShadow: "0 30px 80px rgba(0,191,255,0.35)",
                }}
              />

              <p
                style={{
                  color: "#C7D5E5",
                  fontSize: "18px",
                  lineHeight: "1.8",
                  marginBottom: "40px",
                  maxWidth: "900px",
                  marginInline: "auto",
                }}
              >
                Supreme Cryogenic is a trusted manufacturer and supplier of premium Dry
                Ice Products and Industrial Gases, delivering safe, high-quality
                cryogenic solutions for food processing, pharmaceuticals, healthcare,
                laboratories, logistics and industrial applications.
              </p>

              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  gap: "20px",
                  flexWrap: "wrap",
                }}
              >
                <Link to="/dry-ice">
                  <button
                    style={{
                      padding: "16px 34px",
                      background: "#00BFFF",
                      color: "white",
                      border: "none",
                      borderRadius: "10px",
                      fontSize: "17px",
                      fontWeight: "600",
                      cursor: "pointer",
                    }}
                  >
                    Explore Products
                  </button>
                </Link>

                <Link to="/contact">
                  <button
                    style={{
                      padding: "16px 34px",
                      background: "transparent",
                      border: "2px solid #00BFFF",
                      color: "#00D4FF",
                      borderRadius: "10px",
                      fontSize: "17px",
                      fontWeight: "600",
                      cursor: "pointer",
                    }}
                  >
                    Contact Us
                  </button>
                </Link>
              </div>
            </motion.div>
          </>
        ) : (
          <>
            {/* DESKTOP LAYOUT */}

            <motion.div
              initial={{ opacity: 0, x: -60 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              style={{
                flex: "0 0 48%",
                maxWidth: "48%",
              }}
            >
              <p
                style={{
                  color: "#00D4FF",
                  letterSpacing: "4px",
                  textTransform: "uppercase",
                  fontWeight: "700",
                  marginBottom: "20px",
                }}
              >
                About Supreme Cryogenic
              </p>

              <h1
                style={{
                  fontSize: "64px",
                  lineHeight: "1.1",
                  marginBottom: "25px",
                  fontWeight: "800",
                }}
              >
                Delivering Reliable
                <br />
                <span style={{ color: "#00D4FF" }}>
                  Cryogenic Solutions
                </span>
                <br />
                Across India
              </h1>

              <p
                style={{
                  color: "#C7D5E5",
                  fontSize: "20px",
                  lineHeight: "1.9",
                  marginBottom: "40px",
                }}
              >
                Supreme Cryogenic is a trusted manufacturer and supplier of
                premium Dry Ice Products and Industrial Gases, delivering
                safe, high-quality cryogenic solutions for food processing,
                pharmaceuticals, healthcare, laboratories, logistics and
                industrial applications.
              </p>

              <div
                style={{
                  display: "flex",
                  gap: "20px",
                }}
              >
                <Link to="/dry-ice">
                  <button
                    style={{
                      padding: "16px 34px",
                      background: "#00BFFF",
                      color: "white",
                      border: "none",
                      borderRadius: "10px",
                      fontSize: "17px",
                      fontWeight: "600",
                      cursor: "pointer",
                    }}
                  >
                    Explore Products
                  </button>
                </Link>

                <Link to="/contact">
                  <button
                    style={{
                      padding: "16px 34px",
                      background: "transparent",
                      border: "2px solid #00BFFF",
                      color: "#00D4FF",
                      borderRadius: "10px",
                      fontSize: "17px",
                      fontWeight: "600",
                      cursor: "pointer",
                    }}
                  >
                    Contact Us
                  </button>
                </Link>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 60 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              style={{
                flex: "0 0 48%",
                maxWidth: "48%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <img
                src="/1x.jpeg"
                alt="Supreme Cryogenic"
                style={{
                  width: "100%",
                  height: "500px",
                  objectFit: "cover",
                  borderRadius: "24px",
                  boxShadow: "0 30px 80px rgba(0,191,255,0.35)",
                }}
              />
            </motion.div>
          </>
        )}
      </section>
    </div>
  )
}
export default AboutHero;