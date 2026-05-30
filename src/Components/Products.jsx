import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const container = {
    hidden: {},
    show: { transition: { staggerChildren: 0.15 } }
};

const card = {
    hidden: { opacity: 0, x: (index) => index % 2 === 0 ? -80 : 80 },
    show: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

function Products(){
    const items = [
        { to: "/dry-ice/blocks", icon: "❄️", title: "Dry Ice Blocks", desc: "High-performance dry ice blocks for industrial cooling, storage and transportation needs." },
        { to: "/dry-ice/pellets", icon: "🧊", title: "Dry Ice Pellets", desc: "High purity pellets suitable for industrial cleaning and cryogenic applications." },
        { to: "/co2", icon: "🌫", title: "CO₂ Solutions", desc: "Reliable cryogenic gas supply solutions for industrial operations." }
    ];

    return(
        <section
            id="products"
            style={{
            padding:"100px 60px",
            background:"#06111F",
            color:"white",
            overflow: "hidden"
            }}
            >
            
            <h2
            style={{
            textAlign:"center",
            fontSize:"46px",
            marginBottom:"20px",
            fontWeight:"bold"
            }}
            >
            Our Products
            </h2>
            
            <p
            style={{
            textAlign:"center",
            color:"#B0C4DE",
            marginBottom:"70px",
            fontSize:"18px"
            }}
            >
            Premium cryogenic products designed for industrial applications
            </p>
            
            <motion.div variants={container} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }}
            style={{
            display:"flex",
            justifyContent:"center",
            gap:"35px",
            flexWrap:"wrap"
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
                        flex: "1 1 260px",
                        minWidth: "260px",
                        background: "linear-gradient(180deg, rgba(255,255,255,0.02), rgba(255,255,255,0.01))",
                        borderRadius: "14px",
                        padding: "28px",
                        backdropFilter: "blur(8px)",
                        border: "1px solid rgba(255,255,255,0.04)",
                        color: "#E8F6FF",
                        boxShadow: "0 12px 40px rgba(0,0,0,0.6)",
                        transition: "transform 0.25s ease",
                    }} whileHover={{ translateY: -6 }}>

                        <div style={{ fontSize:"52px", marginBottom:"20px" }}>{it.icon}</div>
                        <h3 style={{ fontSize:"28px", marginBottom:"15px" }}>{it.title}</h3>
                        <p style={{ color:"#C8D6E5", lineHeight:"1.8" }}>{it.desc}</p>

                    </motion.div>
                </Link>
            ))}
            </motion.div>
        </section>
    )
}
export default Products;