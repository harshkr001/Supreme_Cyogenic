import { motion } from "framer-motion";

const reviews = [
  {
    name: "Rajesh Sharma",
    company: "Fresh Logistics Pvt Ltd",
    text: "Supreme Cryogenic consistently delivers high-quality dry ice on time. Their reliability and product quality have exceeded our expectations.",
  },
  {
    name: "Priya Mehta",
    company: "MedCare Laboratories",
    text: "We use their dry ice products for temperature-sensitive transport. Excellent service, professional support, and outstanding quality.",
  },
  {
    name: "Amit Verma",
    company: "Industrial Cooling Solutions",
    text: "The team is responsive, delivery is always prompt, and the dry ice quality is excellent. Highly recommended.",
  },
];

const containerVariants = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      when: "beforeChildren",
      staggerChildren: 0.14,
      duration: 0.6,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: "easeOut" } },
};

function CustomerReviews() {
  return (
    <motion.section
      id="customer-reviews"
      variants={containerVariants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
      style={{
       padding: "140px 24px 300px",

       background: `
       linear-gradient(rgba(7,17,31,0.45), rgba(7,17,31,0.45)),
       url('/customer-bg.jpeg')
       `,

       backgroundSize: "cover",
       backgroundPosition: "center center",
       backgroundRepeat: "no-repeat",

       color: "#F8FAFC",
       }}
    >
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          display: "flex",
          flexDirection: "column",
          gap: "24px",
        }}
      >
        <div style={{ textAlign: "center", maxWidth: "820px", margin: "0 auto" }}>
          <p
            style={{
              margin: 0,
              color: "#7DD3FC",
              fontWeight: 600,
              letterSpacing: "0.18em",
              textTransform: "uppercase",
              fontSize: "13px",
            }}
          >
            What Our Customers Say
          </p>
          <h2
            style={{
              margin: "14px 0 16px",
              fontSize: "clamp(2rem, 2.4vw, 3rem)",
              lineHeight: 1.05,
              color: "#EFF6FF",
            }}
          >
            Trusted by businesses across industries for premium dry ice and cryogenic solutions.
          </h2>
          <p style={{ margin: 0, color: "#CBD5E1", fontSize: "16px", lineHeight: 1.8 }}>
             Feedback from customers who rely on Supreme Cryogenic for dependable dry ice and CO₂ services.
          </p>
        </div>

        <div
          style={{
            display: "flex",
            gap: "24px",
            flexWrap: "wrap",
            justifyContent: "center",

            marginTop: "250px",
            transform: "translateY(120px)",
            position: "relative",
            zIndex: 2,
          }}
        >
          {reviews.map((review, index) => (
            <motion.article
              key={review.name}
              variants={cardVariants}
              whileHover={{ y: -10, boxShadow: "0 28px 70px rgba(0, 203, 255, 0.2)", borderColor: "#22D3EE" }}
              transition={{ type: "spring", stiffness: 220, damping: 18 }}
              style={{
                flex: "1 1 320px",
                minWidth: "280px",
                maxWidth: "360px",
                background: "rgba(5, 20, 42, 0.45)",
                border: "1px solid rgba(255, 255, 255, 0.15)",
                borderRadius: "24px",
                padding: "28px",
                display: "flex",
                flexDirection: "column",
                gap: "20px",
                boxShadow: "0 18px 40px rgba(4, 11, 22, 0.35)",
                backdropFilter: "blur(12px)",
                WebkitBackdropFilter: "blur(12px)",
                transition: "border-color 0.3s ease, transform 0.3s ease",
              }}
            >
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: "12px" }}>
                <div>
                  <p style={{ margin: 0, color: "#38BDF8", fontWeight: 600, letterSpacing: "0.06em", fontSize: "12px" }}>
                    {review.company}
                  </p>
                  <h3 style={{ margin: "10px 0 0", fontSize: "20px", color: "#E2E8F0" }}>{review.name}</h3>
                </div>
                <span style={{ color: "#FFD700", fontSize: "18px", lineHeight: 1 }}>{"★★★★★"}</span>
              </div>

              <p style={{ margin: 0, color: "#CBD5E1", lineHeight: 1.8, fontSize: "15px" }}>
                {review.text}
              </p>
            </motion.article>
          ))}
        </div>
      </div>
    </motion.section>
  );
}

export default CustomerReviews;
