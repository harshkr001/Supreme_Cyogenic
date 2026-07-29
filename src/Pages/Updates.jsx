import { useState } from "react";
import { motion } from "framer-motion";

const featuredUpdate = {
  title: "Supreme Cryogenic Launches New Logistics Hub",
  date: "June 2026",
  category: "Transportation & Logistics",
  summary:
    "Our newest distribution center expands cold chain reach across the western region, supporting faster dry ice delivery and premium cryogenic handling for industrial customers.",
  image: "/fleet.jpeg",
};

const newsArticles = [
  {
    title: "Cryogenic demand surges in food processing sector",
    category: "Cryogenic Industry",
    date: "Jun 3, 2026",
  },
  {
    title: "Dry ice inventory tightness drives innovation in packaging",
    category: "Dry Ice Market",
    date: "May 28, 2026",
  },
  {
    title: "New transport safety rules released for cryogenic shipments",
    category: "Transportation & Logistics",
    date: "May 22, 2026",
  },
  {
    title: "Industrial manufacturers adopt low-temperature storage solutions",
    category: "Industrial Manufacturing",
    date: "May 18, 2026",
  },
  {
    title: "Supply chain visibility improves with digital tracking",
    category: "Supply Chain",
    date: "May 12, 2026",
  },
  {
    title: "Compliance audit highlights best practices for CO₂ handling",
    category: "Safety & Compliance",
    date: "May 8, 2026",
  },
  {
    title: "Sustainability gains from recycled cryogenic storage systems",
    category: "Sustainability",
    date: "May 2, 2026",
  },
  {
    title: "Cold chain innovations set new industry benchmark",
    category: "Cryogenic Industry",
    date: "Apr 29, 2026",
  },
];

const marketReports = [
  {
    title: "Monthly Market Report",
    summary: "Analysis of demand, pricing trends, and inventory movement over the last 30 days.",
    highlight: "Sector growth +12%",
  },
  {
    title: "Industry Growth Report",
    summary: "A deep dive into cryogenic industry expansion, adoption curves, and manufacturing investments.",
    highlight: "Forecast through 2027",
  },
  {
    title: "Demand Forecast",
    summary: "Projected dry ice and CO₂ demand across temperature-sensitive logistics and industrial applications.",
    highlight: "Q3 demand outlook",
  },
  {
    title: "Supply Analysis",
    summary: "Supplier capacity, raw material availability, and inventory risk factors affecting delivery timelines.",
    highlight: "Supply resilience report",
  },
];

const awards = [
  {
    title: "Best Cold Chain Partner 2026",
    issuer: "Logistics Excellence Awards",
    date: "April 2026",
  },
  {
    title: "Safety Certification for Low-Temperature Handling",
    issuer: "Global Safety Council",
    date: "March 2026",
  },
  {
    title: "Innovation in Cryogenic Packaging",
    issuer: "Industrial Technology Forum",
    date: "February 2026",
  },
  {
    title: "Sustainability Leader Award",
    issuer: "Green Manufacturing Alliance",
    date: "January 2026",
  },
];

const buyerSellerUpdates = [
  {
    title: "New partnership with Pacific Cold Logistics",
    details: "Strengthening distribution in refrigerated transport corridors.",
  },
  {
    title: "Major buyer onboarded in pharmaceutical cold storage",
    details: "Supporting a new contract for vaccine and lab sample transport.",
  },
  {
    title: "Supplier announcement: expanded CO₂ sourcing",
    details: "Increased raw material availability for industrial manufacturing clients.",
  },
  {
    title: "Distribution network updates in western seaboard hubs",
    details: "Additional transit lanes for time-sensitive dry ice deliveries.",
  },
];

const companyUpdates = [
  {
    title: "New plant setup announced in Ahmedabad",
    details: "A new manufacturing line designed for high-volume dry ice production.",
  },
  {
    title: "Infrastructure expansion at Pune facility",
    details: "Additional storage capacity and updated cryogenic handling bays.",
  },
  {
    title: "Equipment installation completed for automated batching",
    details: "Faster production cycles and improved quality control.",
  },
  {
    title: "Capacity increases for CO₂ supply operations",
    details: "Greater throughput to support industrial and medical customers.",
  },
];

const sectionVariants = {
  hidden: { opacity: 0, y: 25 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const hoverCard = {
  whileHover: {
    y: -8,
    boxShadow: "0 25px 80px rgba(14, 165, 233, 0.24)",
    borderColor: "rgba(56, 189, 248, 0.48)",
  },
};

function Updates() {
  const [email, setEmail] = useState("");

  const handleSubscribe = (event) => {
    event.preventDefault();
    setEmail("");
  };

  return (
    <main style={{ background: "#030913", color: "#E2E8F0", minHeight: "100vh" }}>
      <section
        style={{
          minHeight: "420px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: "80px 24px 60px",
          background: "radial-gradient(circle at top, rgba(2, 175, 255, 0.18), transparent 30%), linear-gradient(180deg, #031126 0%, #050d1c 100%)",
          textAlign: "center",
        }}
      >
        <div style={{ maxWidth: "960px", margin: "0 auto" }}>
          <p style={{ margin: 0, color: "#7DD3FC", letterSpacing: "0.3em", textTransform: "uppercase", fontSize: "13px", fontWeight: 700 }}>
            Industry Updates & Market Insights
          </p>
          <h1 style={{ margin: "22px 0 18px", fontSize: "clamp(2.5rem, 4vw, 4.75rem)", lineHeight: 1.02, color: "#F8FAFC" }}>
            Industry Updates & Market Insights
          </h1>
          <p style={{ margin: 0, color: "#B8C2D2", fontSize: "1.05rem", lineHeight: 1.9, maxWidth: "860px", marginLeft: "auto", marginRight: "auto" }}>
            Latest news, trends, reports, awards, transportation updates, industrial developments, and cryogenic market intelligence.
          </p>
        </div>
      </section>

      <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "40px 24px 80px" }}>
        <motion.section variants={sectionVariants} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }} style={{ marginBottom: "50px" }}>
          <h2 style={{ margin: "0 0 18px", color: "#E2E8F0", fontSize: "2.15rem" }}>Featured Update</h2>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "24px",
              background: "rgba(3, 12, 26, 0.96)",
              border: "1px solid rgba(56, 189, 248, 0.15)",
              borderRadius: "28px",
              overflow: "hidden",
              boxShadow: "0 30px 90px rgba(1, 31, 59, 0.28)",
            }}
          >
            <div style={{ display: "grid", gridTemplateColumns: "1.6fr 1fr", minHeight: "380px" }}>
              <motion.img src={featuredUpdate.image} alt={featuredUpdate.title}
               style={{
                 width: "100%",
                 height: "380px",
                 objectFit: "cover",
                 objectPosition: "center",
                 borderRadius: "16px",
                 display: "block"
              
                }} 
                />
              <div style={{ padding: "32px", display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
                <div>
                  <span style={{ color: "#7DD3FC", fontWeight: 700, letterSpacing: "0.18em", textTransform: "uppercase", fontSize: "12px" }}>
                    {featuredUpdate.category}
                  </span>
                  <h3 style={{ margin: "18px 0 14px", fontSize: "2rem", lineHeight: 1.1, color: "#F8FAFC" }}>{featuredUpdate.title}</h3>
                  <p style={{ margin: 0, color: "#94A3B8", fontSize: "1rem", lineHeight: 1.85 }}>
                    {featuredUpdate.summary}
                  </p>
                </div>
                <p style={{ margin: "24px 0 0", color: "#60A5FA", fontWeight: 600 }}>{featuredUpdate.date}</p>
              </div>
            </div>
          </div>
        </motion.section>

        <motion.section variants={sectionVariants} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }} style={{ marginBottom: "50px" }}>
          <div style={{ display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: "16px", alignItems: "baseline" }}>
            <h2 style={{ margin: 0, color: "#E2E8F0", fontSize: "2rem" }}>Latest Industry News</h2>
            <span style={{ color: "#7DD3FC", fontWeight: 600 }}>8 articles</span>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "20px", marginTop: "24px" }}>
            {newsArticles.map((item) => (
              <motion.article
                key={item.title}
                className="product-card update-card"
                whileHover={{ y: -8, boxShadow: "0 18px 50px rgba(14, 165, 233, 0.2)", borderColor: "rgba(56, 189, 248, 0.45)" }}
                transition={{ type: "spring", stiffness: 210, damping: 20 }}
                style={{
                  minHeight: "190px",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  width: "100%",
                  padding: "32px",
                }}
              >
                <div>
                  <span style={{ display: "inline-flex", alignItems: "center", gap: "8px", color: "#38BDF8", fontSize: "12px", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.16em" }}>
                    {item.category}
                  </span>
                  <h3 style={{ margin: "16px 0 12px", fontSize: "1.2rem", color: "#F8FAFC" }}>{item.title}</h3>
                </div>
                <p style={{ margin: 0, color: "#94A3B8", fontSize: "0.96rem" }}>{item.date}</p>
              </motion.article>
            ))}
          </div>
        </motion.section>

        <motion.section variants={sectionVariants} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }} style={{ marginBottom: "50px" }}>
          <h2 style={{ margin: "0 0 24px", color: "#E2E8F0", fontSize: "2rem" }}>Market Reports</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "20px" }}>
            {marketReports.map((report) => (
              <motion.article
                key={report.title}
                className="product-card update-card"
                whileHover={{ y: -8, boxShadow: "0 18px 50px rgba(14, 165, 233, 0.18)", borderColor: "rgba(56, 189, 248, 0.45)" }}
                transition={{ duration: 0.25 }}
                style={{
                  minHeight: "200px",
                  padding: "32px",
                  width: "100%",
                }}
              >
                <h3 style={{ margin: "0 0 14px", fontSize: "1.25rem", color: "#F8FAFC" }}>{report.title}</h3>
                <p style={{ margin: 0, color: "#94A3B8", lineHeight: 1.8 }}>{report.summary}</p>
                <p style={{ margin: "18px 0 0", color: "#60A5FA", fontWeight: 700 }}>{report.highlight}</p>
              </motion.article>
            ))}
          </div>
        </motion.section>

        <motion.section variants={sectionVariants} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }} style={{ marginBottom: "50px" }}>
          <h2 style={{ margin: "0 0 24px", color: "#E2E8F0", fontSize: "2rem" }}>Awards & Recognition</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "20px" }}>
            {awards.map((award) => (
              <motion.article
                key={award.title}
                className="product-card update-card"
                {...hoverCard}
                style={{
                  minHeight: "180px",
                  padding: "32px",
                  width: "100%",
                }}
              >
                <span style={{ display: "inline-flex", alignItems: "center", gap: "8px", color: "#7DD3FC", fontSize: "12px", fontWeight: 700, textTransform: "uppercase" }}>
                  Award
                </span>
                <h3 style={{ margin: "14px 0 12px", fontSize: "1.3rem", color: "#F8FAFC" }}>{award.title}</h3>
                <p style={{ margin: "0 0 12px", color: "#94A3B8", lineHeight: 1.7 }}>{award.issuer}</p>
                <p style={{ margin: 0, color: "#60A5FA", fontWeight: 600 }}>{award.date}</p>
              </motion.article>
            ))}
          </div>
        </motion.section>

        <motion.section variants={sectionVariants} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }} style={{ marginBottom: "50px" }}>
          <h2 style={{ margin: "0 0 24px", color: "#E2E8F0", fontSize: "2rem" }}>Buyers & Sellers Updates</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "20px" }}>
            {buyerSellerUpdates.map((item) => (
              <motion.article
                key={item.title}
                className="product-card update-card"
                {...hoverCard}
                style={{
                  minHeight: "180px",
                  padding: "32px",
                  width: "100%",
                }}
              >
                <h3 style={{ margin: "0 0 14px", fontSize: "1.2rem", color: "#F8FAFC" }}>{item.title}</h3>
                <p style={{ margin: 0, color: "#94A3B8", lineHeight: 1.75 }}>{item.details}</p>
              </motion.article>
            ))}
          </div>
        </motion.section>

        <motion.section variants={sectionVariants} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }} style={{ marginBottom: "50px" }}>
          <h2 style={{ margin: "0 0 24px", color: "#E2E8F0", fontSize: "2rem" }}>Company Updates</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "20px" }}>
            {companyUpdates.map((item) => (
              <motion.article
                key={item.title}
                className="product-card update-card"
                {...hoverCard}
                style={{
                  minHeight: "180px",
                  padding: "32px",
                  width: "100%",
                }}
              >
                <h3 style={{ margin: "0 0 14px", fontSize: "1.2rem", color: "#F8FAFC" }}>{item.title}</h3>
                <p style={{ margin: 0, color: "#94A3B8", lineHeight: 1.75 }}>{item.details}</p>
              </motion.article>
            ))}
          </div>
        </motion.section>

        <motion.section variants={sectionVariants} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }} style={{ marginBottom: "24px" }}>
          <div
            style={{
              background: "rgba(6, 14, 30, 0.96)",
              border: "1px solid rgba(56, 189, 248, 0.16)",
              borderRadius: "26px",
              padding: "32px",
              display: "flex",
              flexDirection: "column",
              gap: "20px",
            }}
          >
            <div style={{ display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: "16px" }}>
              <div>
                <p style={{ margin: 0, color: "#7DD3FC", fontWeight: 700, letterSpacing: "0.18em", textTransform: "uppercase", fontSize: "12px" }}>
                  Newsletter
                </p>
                <h3 style={{ margin: "14px 0 0", fontSize: "1.8rem", color: "#F8FAFC" }}>Stay informed with market intelligence</h3>
              </div>
              <p style={{ margin: 0, maxWidth: "540px", color: "#94A3B8", lineHeight: 1.85 }}>
                Subscribe for weekly updates on cryogenic trends, logistics briefs, and supply chain alerts.
              </p>
            </div>

            <form onSubmit={handleSubscribe} style={{ display: "flex", flexWrap: "wrap", gap: "14px" }}>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                placeholder="Enter your email"
                style={{
                  flex: "1 1 320px",
                  minWidth: "220px",
                  padding: "16px 18px",
                  borderRadius: "14px",
                  border: "1px solid rgba(148, 163, 184, 0.26)",
                  background: "rgba(15, 23, 42, 0.9)",
                  color: "#E2E8F0",
                  fontSize: "1rem",
                  outline: "none",
                }}
              />
              <button
                type="submit"
                style={{
                  flex: "0 0 auto",
                  padding: "16px 28px",
                  borderRadius: "14px",
                  border: "none",
                  background: "linear-gradient(135deg, #22D3EE, #0EA5E9)",
                  color: "#04111e",
                  fontWeight: 700,
                  fontSize: "1rem",
                  cursor: "pointer",
                  boxShadow: "0 18px 40px rgba(34, 211, 238, 0.25)",
                  transition: "transform 0.2s ease, box-shadow 0.2s ease",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.transform = "translateY(-2px)")}
                onMouseLeave={(e) => (e.currentTarget.style.transform = "translateY(0)")}
              >
                Subscribe
              </button>
            </form>
          </div>
        </motion.section>
      </div>
    </main>
  );
}

export default Updates;
