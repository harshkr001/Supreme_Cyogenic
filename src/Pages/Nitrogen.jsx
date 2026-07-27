import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCart } from "../Context/CartContext";

const products = [
    {

        id: "nitrogen-0",
        image: "/nitrogen1.jpeg",
        title: "Premium Liquid Nitrogen (LIN)",
        price: "Custom Pricing",
        productCode: "LIN-01",
        availability: "In Stock",
        deliveryTime: "3-5 Days",
        rating: "4.9/5",
        reviews: "98 Reviews",
        quoteOnly: false,
        desc: "High-purity Liquid Nitrogen (LIN) designed for cryogenic cooling, food preservation, pharmaceutical production, and industrial manufacturing with reliable quality and uninterrupted supply.",

        specifications: [
            "Purity: 99.99% Nitrogen",
            "Storage Temperature: -196°C",
            "Cryogenic Storage Tank",
            "Industrial Grade",
            "Bulk Supply Available"
        ],

        applications: [
            "Cryogenic Cooling",
            "Food Freezing & Packaging",
            "Pharmaceutical Manufacturing",
            "Research Laboratories"
        ],

        industriesServed: [
            "Food Industry",
            "Pharmaceuticals",
            "Research Laboratories",
            "Industrial Manufacturing"
        ]


    },
    {

        id: "nitrogen-1",
        image: "/nitrogen2.jpeg",
        title: "Industrial Liquid Nitrogen",
        price: "Custom Pricing",
        productCode: "LIN-02",
        availability: "In Stock",
        deliveryTime: "2-4 Days",
        rating: "4.8/5",
        reviews: "76 Reviews",
        quoteOnly: false,
        desc: "Reliable industrial Liquid Nitrogen for electronics manufacturing, chemical processing, inert atmosphere applications, and precision industrial operations.",

        specifications: [
            "Purity: 99.99%",
            "Cryogenic Storage",
            "Bulk Tank Supply",
            "Industrial Grade",
            "Quality Certified"
        ],

        applications: [
            "Electronics Manufacturing",
            "Chemical Processing",
            "Metal Processing",
            "Inert Gas Blanketing"
        ],

        industriesServed: [
            "Electronics",
            "Chemical Plants",
            "Manufacturing",
            "Industrial Processing"
        ]

    },
    {
        id: "nitrogen-2",
        image: "/nitrogen3.jpeg",
        title: "Bulk Liquid Nitrogen Supply",
        price: "Bulk Orders Available",
        productCode: "LIN-03",
        availability: "Custom Orders",
        deliveryTime: "1 Week",
        rating: "5.0/5",
        reviews: "48 Reviews",
        quoteOnly: true,
        desc: "Large-scale bulk Liquid Nitrogen supply for industrial facilities, laboratories, healthcare, and manufacturing operations with dependable nationwide delivery.",

        specifications: [
            "Bulk Cryogenic Tank",
            "99.99% Purity",
            "Large Volume Supply",
            "24/7 Distribution",
            "Industrial Standard"
        ],

        applications: [
            "Large Manufacturing Plants",
            "Food Storage Facilities",
            "Medical & Research Centers",
            "Cryogenic Applications"
        ],

        industriesServed: [
            "Healthcare",
            "Food Processing",
            "Research Institutes",
            "Heavy Industry"
        ]
    }
];

function Nitrogen() {
    const navigate = useNavigate();
    const { addToCart } = useCart();
    const [notification, setNotification] = useState('');

    const showNotification = (message) => {
        setNotification(message);
        setTimeout(() => setNotification(''), 3000);
    };

    const handleAddToCart = (product, quantity) => {
        addToCart(product, quantity);
        showNotification(`${product.title} added to cart!`);
        const inputEl = document.getElementById(`qty-nitrogen-${products.findIndex(p => p.id === product.id)}`);
        if (inputEl) inputEl.value = '1';
    };

    const handleBuyNow = (product, quantity) => {
        addToCart(product, quantity);
        navigate('/cart');
    };

    return (
        <div
            style={{
                background: "#061224",
                minHeight: "100vh",
                padding: "120px 60px",
                color: "white"
            }}
        >

            {notification && (
                <div style={{
                    position: 'fixed',
                    top: '100px',
                    right: '20px',
                    background: '#00C864',
                    color: '#07111d',
                    padding: '12px 20px',
                    borderRadius: '8px',
                    fontWeight: '600',
                    zIndex: 1000,
                    animation: 'slideIn 0.3s ease',
                }}>
                    {notification}
                </div>
            )}

            <h1
                style={{
                    textAlign: "center",
                    fontSize: "48px",
                    marginBottom: "60px"
                }}
            >
                Premium Liquid Nitrogen
            </h1>

            <div
                style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(3, 1fr)",
                    gap: "30px"
                }}
            >
                {products.map((product, index) => (
                    <div
                        key={index}
                        style={{
                            background: "#0d1b2a",
                            borderRadius: "20px",
                            overflow: "hidden",
                            padding: "20px",
                            boxShadow: "0 10px 30px rgba(0,0,0,0.3)"
                        }}
                    >
                        <div className="product-image-container">
                            <img
                                className="product-image"
                                src={product.image}
                                alt={product.title}
                            />
                        </div>

                        <h2 style={{ marginTop: "20px" }}>
                            {product.title}
                        </h2>

                        <p>Code: {product.productCode}</p>

                        <h3 style={{ color: "#00e5ff" }}>
                            {product.price}
                        </h3>


                        <p
                            style={{
                                color: product.availability === "In Stock" ? "#22c55e" : "#f59e0b",
                                fontWeight: "bold",
                                marginBottom: "8px"
                            }}
                        >
                            ● {product.availability}
                        </p>

                        <p
                            style={{
                                color: "#94a3b8",
                                fontSize: "14px",
                                marginTop: "4px",
                                marginBottom: "12px"
                            }}
                        >
                            🚚 Delivery: {product.deliveryTime}
                        </p>

                        <p
                            style={{
                                color: "#FFD700",
                                fontSize: "16px",
                                fontWeight: "600",
                                marginTop: "8px"
                            }}
                        >
                            ⭐ {product.rating}
                        </p>

                        <p
                            style={{
                                color: "#CBD6E5",
                                fontSize: "14px",
                                marginBottom: "15px"
                            }}
                        >
                            {product.reviews}
                        </p>

                        <p style={{ color: "#cbd5e1" }}>
                            {product.desc}
                        </p>

                        <h4 style={{ color: "#00BFFF", marginTop: "15px" }}>
                            Specifications
                        </h4>

                        <ul>
                            {product.specifications?.map((spec, i) => (
                                <li key={i}>{spec}</li>
                            ))}
                        </ul>

                        <h4 style={{ color: "#00BFFF", marginTop: "15px" }}>
                            Applications
                        </h4>

                        <ul>
                            {product.applications?.map((app, i) => (
                                <li key={i}>{app}</li>
                            ))}
                        </ul>

                        <h4 style={{ color: "#00BFFF", marginTop: "15px" }}>
                            Industries Served
                        </h4>

                        <ul>
                            {product.industriesServed?.map((industry, i) => (
                                <li key={i}>{industry}</li>
                            ))}
                        </ul>

                        <div style={{ display: "flex", gap: "12px", marginTop: "20px", alignItems: "center" }}>
                            <input
                                id={`qty-nitrogen-${index}`}
                                type="number"
                                min={1}
                                defaultValue={1}
                                style={{ width: 90, padding: "10px", borderRadius: 8, border: "1px solid #1b2b37", background: "#07121a", color: "white" }}
                            />

                            {product.quoteOnly && (
                                <button
                                    onClick={() => {
                                        const el = document.getElementById(`qty-nitrogen-${index}`);
                                        const qty = Math.max(1, parseInt(el?.value || "1", 10));
                                        handleAddToCart(item, qty);
                                    }}
                                    style={{
                                        flex: 1,
                                        padding: "12px",
                                        background: "#00BFFF",
                                        border: "none",
                                        borderRadius: "10px",
                                        color: "white",
                                        fontWeight: "bold",
                                        cursor: "pointer",
                                        transition: "opacity 0.2s ease"
                                    }}
                                    onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.9")}
                                    onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
                                >
                                    Add to Cart
                                </button>
                            )}

                            {!product.quoteOnly && (
                                <button
                                    style={{
                                        flex: 1,
                                        padding: "12px",
                                        background: "transparent",
                                        border: "2px solid #00BFFF",
                                        borderRadius: "10px",
                                        color: "#00BFFF",
                                        fontWeight: "bold",
                                        cursor: "pointer",
                                        transition: "all 0.2s ease"
                                    }}
                                    onMouseEnter={(e) => {
                                        e.currentTarget.style.background = "rgba(0, 191, 255, 0.1)";
                                    }}
                                    onMouseLeave={(e) => {
                                        e.currentTarget.style.background = "transparent";
                                    }}
                                    onClick={() => {
                                        const el = document.getElementById(`qty-nitrogen-${index}`);
                                        const qty = Math.max(1, parseInt(el?.value || "1", 10));
                                        handleBuyNow(item, qty);
                                    }}
                                >
                                    Buy Now
                                </button>
                            )}

                            {product.quoteOnly && (
                                <button
                                    style={{
                                        background: "transparent",
                                        border: "1px solid #00BFFF",
                                        color: "#00BFFF",
                                        padding: "10px 20px",
                                        borderRadius: "10px",
                                        cursor: "pointer"
                                    }}
                                >
                                    📄 Request Quote

                                </button>
                            )}


                        </div>
                    </div>
                ))}
            </div>

            <style>{`
        @keyframes slideIn {
          from {
            transform: translateX(400px);
            opacity: 0;
          }
          to {
            transform: translateX(0);
            opacity: 1;
          }
        }
      `}</style>

        </div>
    );
}

export default Nitrogen;

