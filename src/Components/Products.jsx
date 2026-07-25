import { Link } from "react-router-dom";
import { motion } from "framer-motion";

import dryIceImg from "../assets/dryIcecateg.jpeg";
import gasImg from "../assets/Industrialgases.jpeg";

const container = {
    hidden: {},
    show: { transition: { staggerChildren: 0.15 } }
};

const card = {
    hidden: { opacity: 0, x: (index) => index % 2 === 0 ? -80 : 80 },
    show: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

function Products() {
    const items = [
        {
            to: "/dry-ice",
            image: dryIceImg,
            title: "Dry Ice Products",
            desc: "Premium Dry Ice Blocks and Dry Ice Pellets designed for industrial cooling, food preservation, pharmaceutical transport and dry ice blasting."
        },

        {
            to: "/industrial-gases",
            image: gasImg,
            title: "Industrial Gases",
            desc: "High-purity Liquid CO₂, Liquid Oxygen, Liquid Nitrogen and Liquid Argon for industrial, medical and commercial applications."
        }
    ];

    return (
        <section
            id="products"
            style={{
                padding: "100px 60px",
                background: "#06111F",
                color: "white",
                overflow: "hidden"
            }}
        >

            <h2
                style={{
                    textAlign: "center",
                    fontSize: "46px",
                    marginBottom: "20px",
                    fontWeight: "bold"
                }}
            >
                Our Product Portfolio
            </h2>

            <p
                style={{
                    textAlign: "center",
                    color: "#B0C4DE",
                    marginBottom: "70px",
                    fontSize: "18px"
                }}
            >
                Explore our complete range of Dry Ice Products and Industrial Gases for industrial,
                medical and commercial applications.
            </p>

            <motion.div variants={container} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }}
                style={{
                    display: "flex",
                    justifyContent: "center",
                    gap: "35px",
                    flexWrap: "wrap"
                }}
            >
                {items.map((it, idx) => (
                    <Link key={it.title} to={it.to} style={{ textDecoration: "none", color: "inherit" }}>
                        <motion.div className="product-card"
                            variants={{
                                hidden: { opacity: 0, x: idx % 2 === 0 ? -80 : 80 },
                                show: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" } }
                            }}
                            style={{
                                flex: "1 1 480px",
                                minWidth: "420px",
                                maxWidth: "550px",
                                background: "linear-gradient(180deg, rgba(255,255,255,0.02), rgba(255,255,255,0.01))",
                                borderRadius: "14px",
                                padding: "28px",
                                backdropFilter: "blur(8px)",
                                border: "1px solid rgba(255,255,255,0.04)",
                                color: "#E8F6FF",
                                boxShadow: "0 12px 40px rgba(0,0,0,0.6)",
                                transition: "transform 0.25s ease",
                            }} whileHover={{
                                translateY: -10,
                                scale: 1.03,
                                boxShadow: "0 20px 50px rgba(0,191,255,0.35)"
                            }}
                            >

                            <img
                            src={it.image}
                            alt={it.title}
                            style={{
                                width: "100%",
                                height: "230px",
                                objectFit: "cover",
                                borderRadius: "12px",
                                marginBottom: "20px"
                            }}
                        />
                        <h3 style={{ fontSize: "28px", marginBottom: "15px" }}>{it.title}</h3>
                        <p style={{ color: "#C8D6E5", lineHeight: "1.8" }}>{it.desc}</p>

                        <button
                            style={{
                                marginTop: "22px",
                                padding: "12px 22px",
                                background: "#00BFFF",
                                color: "white",
                                border: "none",
                                borderRadius: "8px",
                                fontWeight: "600",
                                cursor: "pointer",
                                fontSize: "15px"
                            }}
                        >
                            Explore Products →
                        </button>

                    </motion.div>
                    </Link>
                ))}
        </motion.div>
        </section >
    )
}
export default Products;