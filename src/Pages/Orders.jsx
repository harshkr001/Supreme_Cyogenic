import { Link } from "react-router-dom";

export default function Orders() {
  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#05142a",
        color: "white",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "20px",
      }}
    >
      <div
        style={{
          textAlign: "center",
          maxWidth: "500px",
        }}
      >
        <div style={{ fontSize: "80px" }}>📦</div>

        <h1
          style={{
            color: "#00d4ff",
            marginBottom: "15px",
          }}
        >
          No Orders Yet
        </h1>

        <p
          style={{
            color: "#cccccc",
            lineHeight: "1.8",
            marginBottom: "25px",
          }}
        >
          You haven't placed any orders yet.
          <br />
          Explore our premium Dry Ice Blocks, Dry Ice Pellets,
          and CO₂ Solutions.
        </p>

        <a href="/#products">
          <button
            style={{
              padding: "12px 30px",
              background: "#00d4ff",
              color: "#05142a",
              border: "none",
              borderRadius: "10px",
              fontWeight: "bold",
              cursor: "pointer",
            }}
          >
            Browse Products
          </button>
        </a>
      </div>
    </div>
  );
}