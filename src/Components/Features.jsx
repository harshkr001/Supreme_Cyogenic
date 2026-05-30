import { motion } from "framer-motion";

const heading = "Why Choose SUPREME CRYOGENIC?";

function Features(){
    const letters = heading.split("");

    const container = {
        hidden: { opacity: 0 },
        show: { opacity: 1, transition: { staggerChildren: 0.03, delayChildren: 0.15 } }
    };

    const letter = {
        hidden: { opacity: 0, y: 50 },
        show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 300, damping: 24 } }
    };

    const cardVariants = {
        hidden: { opacity: 0, y: 30 },
        show: { opacity: 1, y: 0 }
    };

    const features = [
        { title: "Premium Quality", desc: "High-purity dry ice products for industrial use", icon: "❄️" },
        { title: "Reliable Supply", desc: "Consistent inventory and dependable deliveries", icon: "📦" },
        { title: "Fast Delivery", desc: "Optimised logistics for prompt fulfilment", icon: "🚚" },
        { title: "24/7 Support", desc: "Round-the-clock assistance for critical operations", icon: "📞" }
    ];

    return(
        <section id="why" style={{
            padding:"80px 60px",
            background:"#081420",
            color:"white",
            overflow: "hidden"
            }}>

            <motion.h2 style={{ textAlign: "center", fontSize: "42px", marginBottom: "50px", overflow: "hidden" }}
                variants={container}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.2 }}
            >
                {letters.map((char, i) => (
                    <motion.span key={i} variants={letter} style={{ display: "inline-block", whiteSpace: "pre" }}>{char}</motion.span>
                ))}
            </motion.h2>

            <div style={{ display: "flex", justifyContent: "space-between", marginTop: "70px", gap: "24px", flexWrap: "wrap" }}>
                {features.map((f, i) => (
                    <motion.div key={f.title}
                        variants={cardVariants}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true, amount: 0.2 }}
                        transition={{ delay: i * 0.12, duration: 0.45 }}
                        style={{
                            flex: "1 1 220px",
                            minWidth: "220px",
                            background: "linear-gradient(135deg, rgba(255,255,255,0.02), rgba(255,255,255,0.01))",
                            borderRadius: "14px",
                            padding: "28px",
                            backdropFilter: "blur(8px)",
                            border: "1px solid rgba(255,255,255,0.04)",
                            color: "#E8F6FF",
                            boxShadow: "0 8px 30px rgba(0,0,0,0.6)"
                        }}>
                        <div style={{ fontSize: "34px", marginBottom: "12px" }}>{f.icon}</div>
                        <h3 style={{ fontSize: "20px", marginBottom: "8px" }}>{f.title}</h3>
                        <p style={{ color: "#BBD7EE", lineHeight: 1.6 }}>{f.desc}</p>
                    </motion.div>
                ))}
            </div>

        </section>
    )
}

export default Features;