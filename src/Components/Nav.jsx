import { Link, useLocation, useNavigate } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import { useCart } from "../Context/CartContext";
import { FaBars, FaTimes } from "react-icons/fa"


const dryIceProducts = [
  {
    title: "Dry Ice Blocks",
    description:
      "High-density dry ice blocks for industrial cooling, cold chain logistics, and food preservation.",
    path: "/dry-ice-blocks",
  },
  {
    title: "Dry Ice Pellets",
    description:
      "Premium dry ice pellets for dry ice blasting, industrial cleaning, and precision cooling.",
    path: "/dry-ice-pellets",
  },
];

const gasProducts = [
  {
    title: "Carbon Dioxide (CO₂)",
    path: "/co2",
  },
  {
    title: "Liquid Oxygen (LOX)",
    path: "/oxygen",
  },
  {
    title: "Liquid Nitrogen (LIN)",
    path: "/nitrogen",
  },
  {
    title: "Liquid Argon (LAR)",
    path: "/argon",
  },
  {
    title: "Mixed Argon Shielding Gas",
    path: "/mixargon",
  },
];

function Nav({ onAuthClick }) {

  const [menuOpen, setMenuOpen] = useState(false)

  const [showLogoutModal, setShowLogoutModal] = useState(false);
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("user"));
  const mobileLinkStyle = {
    display: "block",
    padding: "16px 20px",
    color: "#0B2447",
    textDecoration: "none",
    fontWeight: "600",
    borderBottom: "1px solid #E5E7EB",
    borderRadius: "10px",
    transition: "all 0.25s ease",
    cursor: "pointer"
  }
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
    const mediaQuery = window.matchMedia("(max-width: 992px)");
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

  if (isMobile) {
    return (
      <header
        style={{
          background: "#fff",
          padding: "12px 20px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          position: "sticky",
          top: 0,
          zIndex: 1000,
          boxShadow: "0 2px 10px rgba(0,0,0,0.08)",
        }}
      >
        {/* Logo */}
        <button
          onClick={() => navigate("/")}
          style={{
            display: "flex",
            alignItems: "center",
            gap: "10px",
            border: "none",
            background: "transparent",
            cursor: "pointer",
          }}
        >
          <img
            src="/logo.png.jpeg"
            alt="Logo"
            style={{ width: "45px", height: "45px" }}
          />

          <h2
            style={{
              margin: 0,
              color: "#0B2447",
              fontSize: "22px",
              fontWeight: "800",
            }}
          >
            SUPREME
          </h2>
        </button>

        {/* Hamburger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          style={{
            fontSize: "30px",
            background: "transparent",
            border: "none",
            cursor: "pointer",
          }}
        >
          ☰
        </button>
        {menuOpen && (
          <div
            style={{
              position: "absolute",
              top: "75px",
              right: "20px",
              width: "280px",
              background: "#ffffff",
              borderRadius: "16px",
              boxShadow: "0 12px 35px rgba(0,0,0,0.15)",
              overflow: "hidden",
              zIndex: 9999,
            }}
          >
            <Link
              to="/"
              onClick={() => setMenuOpen(false)}
              className="mobile-menu-link"
              style={mobileLinkStyle}
            >
              Home
            </Link>

            <Link
              to="/about"
              onClick={() => setMenuOpen(false)}
              className="mobile-menu-link"
              style={mobileLinkStyle}
            >
              About Us
            </Link>

            <Link
              to="/updates"
              onClick={() => setMenuOpen(false)}
              className="mobile-menu-link"
              style={mobileLinkStyle}
            >
              Updates
            </Link>

            <Link
              to="/contact"
              onClick={() => setMenuOpen(false)}
              className="mobile-menu-link"
              style={mobileLinkStyle}
            >
              Contact Us
            </Link>

            <Link
              to="/cart"
              onClick={() => setMenuOpen(false)}
              className="mobile-menu-link"
              style={mobileLinkStyle}
            >
              Cart
            </Link>

            <button
              onClick={() => {
                setMenuOpen(false);
                onAuthClick();
              }}
              style={{
                width: "100%",
                padding: "16px",
                border: "none",
                background: "#00AEEF",
                color: "white",
                fontWeight: "600",
                cursor: "pointer",
                fontSize: "16px",
              }}
            >
              {user ? "Profile" : "Login / Sign Up"}
            </button>
          </div>
        )}
      </header>
    )
  }

  return (
    <header
      style={{
        background: "rgba(255,255,255,0.8)",
        backdropFilter: "blur(10px)",
        WebkitBackdropFilter: "blur(12px)",
        padding: "15px 20px",
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
            width: "55px",
            height: "55px",
            objectFit: "contain",
          }}
        />
        <div>
          <h1
            style={{
              margin: "0",
              color: "#0B2447",
              fontSize: "28px",
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
              letterSpacing: "3px",
              fontFamily: "'Montserrat', sans-serif",
              fontWeight: "500",
              fontSize: "11px",
            }}
          >
            CRYOGENIC
          </p>
        </div>
      </button>

      <nav style={{ display: "flex", gap: "35px", alignItems: "center", flexWrap: "nowrap", }}>
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
              fontSize: "16px",
              whiteSpace: "nowrap",
              fontWeight: "500",
              cursor: "pointer",
              background: "transparent",
              border: "none",
              padding: "8px 12px",
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
              right: "-320px",
              top: "calc(100% + 12px)",
              width: "720px",
              maxWidth: "80vw",
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
                gridTemplateColumns: "320px 1px 1fr",
                gap: "25px",
                alignItems: "start",
              }}
            >
              {/* Dry Ice */}
              <div>
                <h2
                  style={{
                    color: "#0B2447",
                    marginBottom: "20px",
                    borderBottom: "2px solid #00AEEF",
                    paddingBottom: "10px",
                  }}
                >
                  ❄️ Dry Ice
                </h2>

                {dryIceProducts.map((product) => (
                  <article
                    key={product.title}
                    style={{
                      marginBottom: "20px",
                      padding: "18px",
                      borderRadius: "16px",
                      background: "#F8FAFC",
                    }}
                  >
                    <h3>{product.title}</h3>

                    <p
                      style={{
                        color: "#475569",
                        fontSize: "14px",
                        lineHeight: "1.6",
                      }}
                    >
                      {product.description}
                    </p>

                    <Link
                      to={product.path}
                      onClick={() => setProductsMenuOpen(false)}
                      style={{
                        background: "#00AEEF",
                        color: "#fff",
                        textDecoration: "none",
                        padding: "10px 18px",
                        borderRadius: "30px",
                        display: "inline-block",
                        marginTop: "10px",
                      }}
                    >
                      View Product
                    </Link>
                  </article>
                ))}
              </div>
              <div
                style={{
                  background: "#E2E8F0",
                  width: "1px",
                  height: "100%",
                }}
              />

              {/* Industrial Gases */}
              <div>
                <h2
                  style={{
                    color: "#0B2447",
                    marginBottom: "20px",
                    borderBottom: "2px solid #00AEEF",
                    paddingBottom: "10px",
                  }}
                >
                  🧪 Industrial Gases
                </h2>

                {gasProducts.map((product) => (
                  <article
                    key={product.title}
                    style={{
                      marginBottom: "20px",
                      padding: "18px",
                      borderRadius: "16px",
                      background: "#F8FAFC",
                    }}
                  >
                    <h3>{product.title}</h3>

                    <p
                      style={{
                        color: "#475569",
                        fontSize: "14px",
                        lineHeight: "1.6",
                      }}
                    >
                      {product.description}
                    </p>

                    <Link
                      to={product.path}
                      onClick={() => setProductsMenuOpen(false)}
                      style={{
                        background: "#00AEEF",
                        color: "#fff",
                        textDecoration: "none",
                        padding: "10px 18px",
                        borderRadius: "30px",
                        display: "inline-block",
                        marginTop: "10px",
                      }}
                    >
                      View Product
                    </Link>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </div>
        <Link
          to="/about"
          className="nav-link"
          style={{
            color: "#0B2447",
            textDecoration: "none",
            fontSize: "16px",
            whiteSpace: "nowrap",
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
              fontSize: "16px",
              whiteSpace: "nowrap",
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
            fontSize: "16px",
            whiteSpace: "nowrap",
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

