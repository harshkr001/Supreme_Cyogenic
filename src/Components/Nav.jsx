import { Link } from "react-router-dom";
import { useEffect, useRef, useState } from "react";

const products = [
  {
    title: "Dry Ice Blocks",
    description:
      "High-quality dry ice blocks for industrial cooling, storage, transportation, and temperature-sensitive applications.",
    path: "/dry-ice-blocks",
  },
  {
    title: "Dry Ice Pellets",
    description:
      "Premium dry ice pellets suitable for dry ice blasting, cleaning applications, and industrial processing.",
    path: "/dry-ice-pellets",
  },
  {
    title: "Liquid CO2",
    description:
      "Food-grade and industrial-grade liquid CO2 solutions for manufacturing, beverage, and industrial applications.",
    path: "/co2",
  },
];

function Nav({ onAuthClick }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const dropdownRef = useRef(null);
  const triggerRef = useRef(null);
  const hideTimeout = useRef(null);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 880px)");
    const handleResize = () => setIsMobile(mediaQuery.matches);

    handleResize();
    mediaQuery.addEventListener("change", handleResize);
    return () => mediaQuery.removeEventListener("change", handleResize);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target) &&
        triggerRef.current &&
        !triggerRef.current.contains(event.target)
      ) {
        setMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const openDropdown = () => {
    if (!isMobile) {
      window.clearTimeout(hideTimeout.current);
      setMenuOpen(true);
    }
  };

  const closeDropdown = () => {
    if (!isMobile) {
      hideTimeout.current = window.setTimeout(() => setMenuOpen(false), 150);
    }
  };

  const toggleDropdown = () => {
    if (isMobile) {
      setMenuOpen((current) => !current);
    }
  };

  return (
    <header
      style={{
        background: "rgba(255,255,255,0.8)",
        backdropFilter: "blur(10px)",
        WebkitBackdropFilter: "blur(12px)",
        padding: "15px 40px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        position: "sticky",
        top: "0",
        zIndex: 1000,
        borderBottom: "1px solid rgba(0, 0, 0, 0.05)",
        boxShadow: "0 4px 30px rgba(0,0,0,0.1)",
      }}
    >
      <Link
        to="/"
        style={{
          display: "flex",
          alignItems: "center",
          gap: "12px",
          textDecoration: "none",
        }}
      >
        <img
          src="/logo.png.jpeg"
          alt="Supreme Cryogenic"
          style={{
            width: "70px",
            height: "70px",
            objectFit: "contain",
          }}
        />
        <div>
          <h1 style={{ margin: "0", color: "#0B2447", fontSize: "32px" }}>SUPREME</h1>
          <p style={{ margin: "0", color: "#00AEEF", letterSpacing: "6px" }}>CRYOGENIC</p>
        </div>
      </Link>

      <nav style={{ display: "flex", gap: "30px", alignItems: "center" }}>
        <div
          ref={dropdownRef}
          style={{ position: "relative" }}
          onMouseEnter={openDropdown}
          onMouseLeave={closeDropdown}
        >
          <button
            ref={triggerRef}
            type="button"
            onClick={toggleDropdown}
            aria-haspopup="menu"
            aria-expanded={menuOpen}
            style={{
              color: "#0B2447",
              fontSize: "18px",
              fontWeight: "500",
              cursor: "pointer",
              background: "transparent",
              border: "none",
              padding: 0,
              display: "flex",
              alignItems: "center",
              gap: "8px",
            }}
          >
            Products
            <span
              style={{
                display: "inline-block",
                transition: "transform 0.2s ease",
                transform: menuOpen ? "rotate(180deg)" : "rotate(0deg)",
              }}
            >
              ▼
            </span>
          </button>

          <div
            style={{
              position: "absolute",
              right: 0,
              top: "calc(100% + 12px)",
              width: "min(420px, 100vw - 40px)",
              padding: "20px",
              borderRadius: "22px",
              background: "rgba(255,255,255,0.98)",
              boxShadow: "0 24px 60px rgba(11, 36, 71, 0.16)",
              border: "1px solid rgba(11, 36, 71, 0.08)",
              opacity: menuOpen ? 1 : 0,
              visibility: menuOpen ? "visible" : "hidden",
              transform: menuOpen ? "translateY(0)" : "translateY(-10px)",
              transition:
                "opacity 220ms ease, transform 220ms ease, visibility 220ms ease",
              pointerEvents: menuOpen ? "auto" : "none",
              zIndex: 1001,
            }}
            role="menu"
          >
            <div
              style={{
                display: "grid",
                gap: "14px",
              }}
            >
              {products.map((product) => (
                <article
                  key={product.title}
                  style={{
                    display: "grid",
                    gap: "18px",
                    padding: "20px",
                    borderRadius: "18px",
                    background: "rgba(7, 17, 31, 0.03)",
                    transition: "background 0.2s ease, transform 0.2s ease",
                  }}
                  onMouseEnter={(event) => {
                    event.currentTarget.style.transform = "translateY(-2px)";
                    event.currentTarget.style.background = "rgba(0, 174, 239, 0.08)";
                  }}
                  onMouseLeave={(event) => {
                    event.currentTarget.style.transform = "translateY(0)";
                    event.currentTarget.style.background = "rgba(7, 17, 31, 0.03)";
                  }}
                >
                  <div>
                    <h3 style={{ margin: 0, fontSize: "18px", fontWeight: 700 }}>{product.title}</h3>
                    <p
                      style={{
                        margin: "10px 0 0",
                        lineHeight: "1.6",
                        color: "#334155",
                        fontSize: "14px",
                        maxWidth: "100%",
                      }}
                    >
                      {product.description}
                    </p>
                  </div>
                  <Link
                    to={product.path}
                    className="nav-link"
                    onClick={() => setMenuOpen(false)}
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      justifyContent: "center",
                      borderRadius: "999px",
                      padding: "10px 16px",
                      width: "fit-content",
                      background: "#00AEEF",
                      color: "#fff",
                      fontWeight: 600,
                      fontSize: "14px",
                      textDecoration: "none",
                    }}
                  >
                    View Product
                  </Link>
                </article>
              ))}
            </div>
          </div>
        </div>

        <Link
          to="/about"
          className="nav-link"
          style={{
            color: "#0B2447",
            textDecoration: "none",
            fontSize: "18px",
            fontWeight: "500",
          }}
        >
          About us
        </Link>
        <Link
          to="/contact"
          className="nav-link"
          style={{
            color: "#0B2447",
            textDecoration: "none",
            fontSize: "18px",
            fontWeight: "500",
          }}
        >
          Contact us
        </Link>
        <button
          type="button"
          onClick={onAuthClick}
          className="cta-button"
          style={{
            borderRadius: "999px",
            border: "1px solid rgba(0, 174, 239, 0.35)",
            background: "rgba(7, 17, 31, 0.96)",
            color: "#D8F8FF",
            fontSize: "16px",
            fontWeight: "600",
            padding: "10px 18px",
            cursor: "pointer",
            transition: "transform 0.2s ease, background 0.2s ease",
          }}
          onMouseEnter={(e) => (e.currentTarget.style.transform = "translateY(-1px)")}
          onMouseLeave={(e) => (e.currentTarget.style.transform = "translateY(0)")}
        >
          Login / Sign Up
        </button>
      </nav>
    </header>
  );
}

export default Nav;
