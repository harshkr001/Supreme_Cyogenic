import { motion } from "framer-motion";
import { useState } from "react";
import fastDeliveryImg from "../assets/fleet1.png";
import supportImg from "../assets/24-7support.png";
import relSupplyImg from "../assets/reliable_supply.jpeg"
import premiumImg from "../assets/premium.jpeg"


const heading = "Why Choose SUPREME CRYOGENIC?";

function Features() {

    const [hoveredCard, setHoveredCard] = useState(null);
    const [mobileTooltip, setMobileTooltip] = useState(null);
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
        hidden: { opacity: 0, y: 40 },
        show: { opacity: 1, y: 0, },
    };

    const tooltipVariants = {
        hidden: { opacity: 0, y: 10 },
        show: { opacity: 1, y: 0, transition: { duration: 0.3, ease: "easeOut", }, },

    };
    const Features = [
        {
            title: "Premium Quality",
            desc: "High-purity dry ice products for industrial use",
            fullDesc: "We manufacture high-purity dry ice products using advanced production processes and strict quality standards. Every product is tested to ensure consistent performance, maximum cooling efficiency, and safe industrial usage.",
            icon: premiumImg
        },
        {
            title: "Reliable Supply",
            desc: "Consistent inventory and dependable deliveries",
            fullDesc: "Our robust inventory management and production capabilities ensure uninterrupted product availability. We are committed to meeting customer demand with dependable and timely supply throughout the year.",
            icon: relSupplyImg
        },
        {
            title: "Fast Delivery",
            desc: "Optimised logistics for prompt fulfilment",
            fullDesc: "With optimized logistics and an efficient distribution network, we ensure quick order processing and prompt delivery. Our transportation systems maintain product quality throughout transit.",
            icon: fastDeliveryImg
        },
        {
            title: "24/7 Support",
            desc: "Round-the-clock assistance for critical operations",
            fullDesc: "Our dedicated support team is available around the clock to assist with product inquiries, orders, technical guidance, and emergency requirements, ensuring complete customer satisfaction.",
            icon: supportImg
        },

    ]
    const handleCardHover = (index) => {
        console.log("hover", index);
        setHoveredCard(index);
    };

    const handleCardLeave = () => {
        setHoveredCard(null);
    };

    const handleCardClick = (index) => {
        setMobileTooltip(mobileTooltip === index ? null : index);
    };


    return (
        <section id="why" style={{
            padding: "80px 60px",
            background: "#081420",
            overflow: "visible",
            position: "relative"

        }}>

            <motion.h2 style={{ textAlign: "center", fontSize: "42px", marginBottom: "50px", color: "#FFFFFF", overflow: "hidden", }}
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
                {Features.map((f, i) => (
                    <motion.div
                        key={f.title}

                        variants={cardVariants}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true, amount: 0.2 }}
                        onMouseEnter={() => handleCardHover(i)}
                        onMouseLeave={handleCardLeave}
                        onClick={() => handleCardClick(i)}
                        transition={{ delay: i * 0.12, duration: 0.45 }}
                        style={{
                            flex: "1 1 220px",
                            minWidth: "220px",
                            background: "linear-gradient(135deg, rgba(255,255,255,0.02), rgba(255,255,255,0.01))",
                            borderRadius: "14px",
                            padding: "28px",
                            border: hoveredCard === i || mobileTooltip === i
                                ? "1px solid rgba(0, 191, 255, 0.4)"
                                : "1px solid rgba(255,255,255,0.04)",

                            boxShadow: hoveredCard === i || mobileTooltip === i
                                ? "0 20px 50px rgba(0, 191, 255, 0.3), 0 0 30px rgba(0, 191, 255, 0.2)"
                                : "0 8px 30px rgba(0,0,0,0.6)",
                            position: "relative",
                            cursor: "pointer",
                            transition: "all 0.3s ease",
                            transform: hoveredCard === i || mobileTooltip === i ? "translateY(-10px)" : "translateY(0)"

                        }}>
                        <div style={{ fontSize: "34px", marginBottom: "12px" }}>
                            {f.title === "Fast Delivery" || 
                            f.title == "Premium Quality" ||
                            f.title == "Reliable Supply" ||
                            f.title == "24/7 Support" ? (
                                <img
                                    src={f.icon}
                                    alt={f.title}
                                    style={{
                                        width: "100%",
                                        height: "180px",
                                        objectFit: "contain",
                                        objectPosition: "center",
                                        borderRadius: "10px",
                                        display: "block",
                                        background: "#081420",
                                        padding: "8px"
                                    }}
                                />
                            ) : (
                                f.icon
                            )}
                        </div>
    
                        <h3 style={{ fontSize: "20px", marginBottom: "8px" }}>{f.title}</h3>

                        {/* Tooltip */}
                        {(hoveredCard === i || mobileTooltip === i) && (
                            <motion.div
                                className="feature-tooltip"
                                variants={tooltipVariants}
                                initial="hidden"
                                animate="show"
                                exit="hidden"
                                style={{
                                    position: "absolute",
                                    bottom: "100%",
                                    left: "50%",
                                    transform: "translateX(-50%)",
                                    marginBottom: "16px",
                                    background: "rgba(6, 17, 31, 0.95)",
                                    border: "1px solid rgba(0, 191, 255, 0.5)",
                                    borderRadius: "12px",
                                    padding: "16px",
                                    width: "280px",
                                    zIndex: 1000,
                                    backdropFilter: "blur(8px)",
                                    boxShadow: "0 15px 50px rgba(0, 191, 255, 0.3), 0 0 30px rgba(0, 191, 255, 0.1)",
                                }}
                            >
                                {/* Arrow pointer */}
                                <div className="tooltip-arrow" style={{
                                    position: "absolute",
                                    bottom: "-8px",
                                    left: "50%",
                                    transform: "translateX(-50%)",
                                    width: "0",
                                    height: "0",
                                    borderLeft: "8px solid transparent",
                                    borderRight: "8px solid transparent",
                                    borderTop: "8px solid rgba(0, 191, 255, 0.5)"
                                }}></div>

                                <h4 style={{
                                    fontSize: "16px",
                                    fontWeight: "600",
                                    marginBottom: "8px",
                                    color: "#00BFFF"
                                }}>
                                    {f.title}
                                </h4>
                                <p style={{
                                    fontSize: "13px",
                                    lineHeight: "1.6",
                                    color: "#C8D6E5"
                                }}>
                                    {f.fullDesc}
                                </p>
                            </motion.div>
                        )}
                        <p style={{ color: "#BBD7EE", lineHeight: 1.6 }}>{f.desc}</p>
                    </motion.div>
                ))}
            </div>

        </section>
    )
}

export default Features;