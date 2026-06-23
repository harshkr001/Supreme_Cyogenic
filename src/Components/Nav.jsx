import { Link, useLocation, useNavigate } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import { useCart } from "../Context/CartContext";

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

  const [showLogoutModal, setShowLogoutModal] = useState(false);
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("user"));
  const [userMenuOpen, setUserMenuOpen] = useState(false);
  const location = useLocation();
  const { getTotalItems } = useCart();
  const cartCount = getTotalItems();
  const [productsMenuOpen, setProductsMenuOpen] = useState(false);
  const [updatesTooltipOpen, setUpdatesTooltipOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const productsDropdownRef = useRef(null);
  const productsTriggerRef = useRef(null);
  const productsHideTimeout = useRef(null);

  const updatesTriggerRef = useRef(null);


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
        productsDropdownRef.current &&
        !productsDropdownRef.current.contains(event.target) &&
        productsTriggerRef.current &&
        !productsTriggerRef.current.contains(event.target)
      ) {
        setProductsMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const openProductsDropdown = () => {
    if (!isMobile) {
      window.clearTimeout(productsHideTimeout.current);
      setProductsMenuOpen(true);
    }
  };

  const closeProductsDropdown = () => {
    if (!isMobile) {
      productsHideTimeout.current = window.setTimeout(() => setProductsMenuOpen(false), 150);
    }
  };

  const toggleProductsDropdown = () => {
    if (isMobile) {
      setProductsMenuOpen((current) => !current);
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
      <button
        type="button"
        onClick={() => {
          if (location.pathname === "/") {
            window.location.reload();
          } else {
            navigate("/");
          }
        }}
        style={{
          display: "flex",
          alignItems: "center",
          gap: "12px",
          textDecoration: "none",
          border: "none",
          background: "transparent",
          padding: 0,
          cursor: "pointer",
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
          <h1
            style={{
              margin: "0",
              color: "#0B2447",
              fontSize: "34px",
              fontFamily: "'Montserrat', sans-serif",
              fontWeight: "800",
              letterSpacing: "1px",
            }}
          >
            SUPREME
          </h1>
          <p
            style={{
              margin: "0",
              color: "#90AEEF",
              letterSpacing: "8px",
              fontFamily: "'Montserrat', sans-serif",
              fontWeight: "500",
              fontSize: "16px",
            }}
          >
            CRYOGENIC
          </p>
        </div>
      </button>

      <nav style={{ display: "flex", gap: "30px", alignItems: "center" }}>
        <div
          ref={productsDropdownRef}
          style={{ position: "relative" }}
          onMouseEnter={openProductsDropdown}
          onMouseLeave={closeProductsDropdown}
        >
          <button
            ref={productsTriggerRef}
            type="button"
            onClick={toggleProductsDropdown}
            aria-haspopup="menu"
            aria-expanded={productsMenuOpen}
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
                transform: productsMenuOpen ? "rotate(180deg)" : "rotate(0deg)",
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
              opacity: productsMenuOpen ? 1 : 0,
              visibility: productsMenuOpen ? "visible" : "hidden",
              transform: productsMenuOpen ? "translateY(0)" : "translateY(-10px)",
              transition:
                "opacity 220ms ease, transform 220ms ease, visibility 220ms ease",
              pointerEvents: productsMenuOpen ? "auto" : "none",
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
                    onClick={() => setProductsMenuOpen(false)}
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
        <div
          ref={updatesTriggerRef}
          style={{ position: "relative" }}
          onMouseEnter={() => setUpdatesTooltipOpen(true)}
          onMouseLeave={() => setUpdatesTooltipOpen(false)}
        >
          <Link
            to="/updates"
            className="nav-link"
            style={{
              color: "#0B2447",
              textDecoration: "none",
              fontSize: "18px",
              fontWeight: "500",
              display: "flex",
              alignItems: "center",
              gap: "6px",
            }}
          >
            Updates
            <span style={{ fontSize: "14px", lineHeight: 1 }}>▼</span>
          </Link>
          {updatesTooltipOpen && (
            <div
              style={{
                position: "absolute",
                top: "calc(100% + 12px)",
                left: "50%",
                transform: "translateX(-50%)",
                Width: "500px",
                minWidth: "450px",
                padding: "30px",
                background: "#FFFFFF",

                borderRadius: "24px",
                boxShadow: "0 15px 40px rgba(0, 0, 0, 0.15)",
                color: "#111827",


                zIndex: 1002,
                textAlign: "left",
              }}
            >
              <div>
                <h3
                  style={{
                    margin: "0 0 15px 0",
                    fontSize: "24px",
                    fontWeight: "700",
                    color: "#111827",
                  }}
                >
                  Updates
                </h3>
                <p

                  style={{
                    margin: 0,

                    color: "#6B7280",
                    lineHeight: "1.8",
                    fontSize: "16px",
                  }}
                >
                  Latest updates, market intelligence, and industry news from Supreme Cryogenic.
                </p>
              </div>
            </div>
          )}
        </div>
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
          onClick={() => navigate('/cart')}
          style={{
            position: 'relative',
            borderRadius: "8px",
            border: "1px solid rgba(0, 174, 239, 0.35)",
            background: "rgba(7, 17, 31, 0.5)",
            color: "#D8F8FF",
            fontSize: "18px",
            fontWeight: "600",
            padding: "10px 16px",
            cursor: "pointer",
            transition: "transform 0.2s ease, background 0.2s ease",
            display: "flex",
            alignItems: "center",
            gap: "8px",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = "translateY(-1px)";
            e.currentTarget.style.background = "rgba(7, 17, 31, 0.8)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = "translateY(0)";
            e.currentTarget.style.background = "rgba(7, 17, 31, 0.5)";
          }}
        >
          🛒
          {cartCount > 0 && (
            <span style={{
              position: 'absolute',
              top: '-8px',
              right: '-8px',
              background: '#00C864',
              color: '#07111d',
              width: '22px',
              height: '22px',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '12px',
              fontWeight: '700',
            }}>
              {cartCount}
            </span>
          )}
        </button>
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
          {user ? (
            <div style={{ position: "relative" }}>
              <span
                onClick={() => setUserMenuOpen(!userMenuOpen)}
                style={{ cursor: "pointer" }}
              >
                {user.name} ▼
              </span>

              {userMenuOpen && (
                <div
                  style={{
                    position: "absolute",
                    top: "40px",
                    right: "0",
                    background: "#07111F",
                    border: "1px solid rgba(0,174,239,0.25)",
                    borderRadius: "12px",
                    minWidth: "180px",
                    padding: "8px",
                    zIndex: 1000,
                  }}
                >
                  <Link
                    to="/profile"
                    style={{ padding: "10px", display: "block", color: "white", textDecoration: "none" }}
                  >
                    Profile
                  </Link>
                  <Link
                    to="/orders"
                    style={{
                      padding: "10px",
                      display: "block",
                      color: "white",
                      textDecoration: "none",
                    }}
                  >
                    Orders
                  </Link>
                  <div style={{ padding: "10px" }}>Cart</div>

                  <div
                    style={{ padding: "10px", color: "red", cursor: "pointer" }}
                    onClick={() => setShowLogoutModal(true)}
                  >
                    Logout
                  </div>
                </div>
              )}
            </div>
          ) : (
            "Login / Sign Up"
          )}
        </button>
        {showLogoutModal && (
          <div
            style={{
              position: "fixed",
              top: "0",
              left: "0",
              right: "0",
              bottom: "0",
              width: "100vw",
              height: "100vh",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              zIndex: 99999,
              background: "rgba(0,0,0,0.7)",
              boreder: "2px solid red"
            }}
          >
            <div
              style={{
                background: "#07182d",
                padding: "30px",
                borderRadius: "15px",
                minWidth: "350px",
                textAlign: "center",
                border: "1px solid #00d4ff",
              }}
            >

              <p style={{ color: "#ccc" }}>
                Are you sure you want to logout?
              </p>

              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  gap: "15px",
                  marginTop: "20px",
                }}
              >
                <button
                  onClick={() => setShowLogoutModal(false)}
                  style={{
                    padding: "10px 20px",
                    background: "#00d4ff",
                    border: "none",
                    borderRadius: "8px",
                    cursor: "pointer",
                  }}
                >
                  Stay Logged In
                </button>

                <button
                  onClick={() => {
                    localStorage.removeItem("user");
                    window.location.reload();
                  }}
                  style={{
                    padding: "10px 20px",
                    background: "red",
                    color: "white",
                    border: "none",
                    borderRadius: "8px",
                    cursor: "pointer",
                  }}
                >
                  Logout
                </button>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}

export default Nav;

