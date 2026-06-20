import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer
      style={{
        background:
          "linear-gradient(180deg,#07101c,#0b1727)",
        color: "white",
        padding: "70px 60px 30px",
        marginTop: "0px",
        
        borderTop: "1px solid rgba(255,255,255,0.08)"
      }}
    >

      <div
        style={{
          display: "grid",
          gridTemplateColumns:
            "2fr 1fr 1fr",
          gap: "60px",
          alignItems: "start"
        }}
      >

        {/* Brand */}

        <div>

          <h1
            style={{
              margin: 0,
              color: "#00AEEF",
              fontSize: "34px"
            }}
          >
            SUPREME
          </h1>

          <p
            style={{
              color: "#cbd5e1",
              lineHeight: "30px",
              maxWidth: "420px"
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
            style={linkStyle} 
            to="/"
            onClick={() => window.scrollTo(0, 0)}
            >
              Home
            </Link>

            <Link
              style={linkStyle}
              to="/dry-ice-blocks"
              onClick={() => window.scrollTo(0, 0)}
            >
              Dry Ice Blocks
            </Link>

            <Link
              style={linkStyle}
              to="/dry-ice-pellets"
              onClick={() => window.scrollTo(0, 0)}
            >
              Dry Ice Pellets
            </Link>

            <Link
              style={linkStyle}
              to="/co2"
              onClick={() => window.scrollTo(0, 0)}
            >
              CO₂
            </Link>

            <Link
              style={linkStyle}
              to="/contact"
              onClick={() => window.scrollTo(0, 0)}
            >
              Contact
            </Link>

          </div>

        </div>

        {/* Contact */}

        <div>

          <h3 style={{ marginBottom: "25px" }}>
            Contact
          </h3>

          <p>📧 info@supremecryogenic.com</p>

          <p>📞 +94 XX XXX XXXX</p>

          <p>📍 Noida, India</p>

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
          justifyContent:
            "space-between",
          marginTop: "20px",
          color: "#94a3b8"
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