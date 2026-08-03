import { Link } from "react-router-dom";
import { useState } from "react"

const isMobile = window.innerWidth <= 900

function Footer() {
  const [hoveredLink, setHoveredLink] = useState("");
  return (
    <footer
      style={{
        background:
          "linear-gradient(180deg,#07101c,#0b1727)",
        color: "white",
        padding: isMobile ? "50px 20px 25px" : "70px 60px 30px",
        marginTop: "0px",

        borderTop: "1px solid rgba(255,255,255,0.08)"
      }}
    >

      <div
        style={{
          display: "grid",
          gridTemplateColumns:
            isMobile ? "1fr" : "2fr 1fr 1fr",
          gap: isMobile ? "40px" : "60px",
          textAlign: isMobile ? "center" : "left",
          alignItems: "start"
        }}
      >

        {/* Brand */}

        <div>

          <h1
            style={{
              margin: 0,
              color: "#00AEEF",
              fontSize: isMobile ? "30px" : "34px"
            }}
          >
            SUPREME
          </h1>

          <p
            style={{
              color: "#cbd5e1",
              lineHeight: "30px",
              maxWidth: isMobile ? "100%" : "420px",
              margin: isMobile ? "0 auto" : "0",
              fontSize: isMobile ? "15px" : "16px"
            }}
          >
            Premium cryogenic products,
            dry ice solutions and CO₂
            supply systems designed for
            industrial applications.
          </p>

        </div>

        {/* Links */}

        <div>

          <h3 style={{ marginBottom: "25px" }}>
            Quick Links
          </h3>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "15px"
            }}
          >

            <Link
              to="/"
              onClick={() => window.scrollTo(0, 0)}
              onMouseEnter={() => setHoveredLink("home")}
              onMouseLeave={() => setHoveredLink("")}
              style={{
                ...linkStyle,
                color: hoveredLink === "home" ? "#00BFFF" : "#dbeafe",
                transform: hoveredLink === "home" ? "translateX(8px)" : "translateX(0)",
                transition: "all 0.3s ease",
              }}
            >
              Home
            </Link>

            <Link
              to="/dry-ice"
              onClick={() => window.scrollTo(0, 0)}
              onMouseEnter={() => setHoveredLink("dry")}
              onMouseLeave={() => setHoveredLink("")}
              style={{
                ...linkStyle,
                color: hoveredLink === "dry" ? "#00BFFF" : "#dbeafe",
                transform: hoveredLink === "dry" ? "translateX(8px)" : "translateX(0)",
                transition: "all 0.3s ease",
              }}
            >
              Dry Ice Products
            </Link>

            <Link
              to="/industrial-gases"
              onClick={() => window.scrollTo(0, 0)}
              onMouseEnter={() => setHoveredLink("gas")}
              onMouseLeave={() => setHoveredLink("")}
              style={{
                ...linkStyle,
                color: hoveredLink === "gas" ? "#00BFFF" : "#dbeafe",
                transform: hoveredLink === "gas" ? "translateX(8px)" : "translateX(0)",
                transition: "all 0.3s ease",
              }}
            >
              Industrial Gases
            </Link>

            <Link
              to="/contact"
              onClick={() => window.scrollTo(0, 0)}
              onMouseEnter={() => setHoveredLink("about")}
              onMouseLeave={() => setHoveredLink("")}
              style={{
                ...linkStyle,
                color: hoveredLink === "about" ? "#00BFFF" : "#dbeafe",
                transform: hoveredLink === "about" ? "translateX(8px)" : "translateX(0)",
                transition: "all 0.3s ease",
              }}
            >
              About us
            </Link>

            <Link
              to="/updates"
              onClick={() => window.scrollTo(0, 0)}
              onMouseEnter={() => setHoveredLink("updates")}
              onMouseLeave={() => setHoveredLink("")}
              style={{
                ...linkStyle,
                color: hoveredLink === "updates" ? "#00BFFF" : "#dbeafe",
                transform: hoveredLink === "updates" ? "translateX(8px)" : "translateX(0)",
                transition: "all 0.3s ease",
              }}
            >
              Updates
            </Link>

          </div>

        </div>

        {/* Contact */}

        <div>

          <h3 style={{ marginBottom: "25px" }}>
            Contact
          </h3>

          <p style={{ lineHeight: "28px" }}>
            📧 info@supremecryogenic.com</p>

          <p style={{ lineHeight: "28px" }}>
            📞 +94 XX XXX XXXX</p>

          <p style={{ lineHeight: "28px" }}>
            📍 Noida, India</p>

        </div>

      </div>

      <hr
        style={{
          marginTop: "45px",
          border:
            "1px solid rgba(255,255,255,0.08)"
        }}
      />

      <div
        style={{
          display: "flex",
          flexDirection: isMobile ? "column" : "row",
          justifyContent:
            "space-between",
          alignItems: "center",
          gap: isMobile ? "10px" : "0",
          marginTop: "20px",
          color: "#94a3b8",
          textAlign: "center"
        }}
      >

        <p>
          © 2025 Supreme Cryogenic
        </p>

        <p>
          Designed with React + Vite
        </p>

      </div>

    </footer>
  );
}

const linkStyle = {
  color: "#dbeafe",
  textDecoration: "none"
};

export default Footer;