function OurMission() {
  return (
    <section
      style={{
        padding: "100px 70px",
        background: "#061224",
      }}
    >
      <h2
        style={{
          textAlign: "center",
          fontSize: "48px",
          color: "white",
          marginBottom: "60px",
        }}
      >
        Mission & Vision
      </h2>

      <div
        style={{
          display: "flex",
          gap: "40px",
          flexWrap: "wrap",
          justifyContent: "center",
        }}
      >
        {/* Mission */}
        <div
          style={{
            flex: "1",
            minWidth: "320px",
            background: "rgba(255,255,255,0.03)",
            padding: "40px",
            borderRadius: "20px",
            border: "1px solid rgba(0,191,255,0.2)",
          }}
        >
          <h3
            style={{
              color: "#00BFFF",
              fontSize: "30px",
              marginBottom: "20px",
            }}
          >
            Our Mission
          </h3>

          <p
            style={{
              color: "#C8D6E5",
              lineHeight: "1.9",
              fontSize: "17px",
            }}
          >
            To provide high-quality Dry Ice, Industrial Gases, and
            Cryogenic Solutions with uncompromising safety,
            innovation, and customer satisfaction while supporting
            industries through reliable cold-chain logistics.
          </p>
        </div>

        {/* Vision */}
        <div
          style={{
            flex: "1",
            minWidth: "320px",
            background: "rgba(255,255,255,0.03)",
            padding: "40px",
            borderRadius: "20px",
            border: "1px solid rgba(0,191,255,0.2)",
          }}
        >
          <h3
            style={{
              color: "#00BFFF",
              fontSize: "30px",
              marginBottom: "20px",
            }}
          >
            Our Vision
          </h3>

          <p
            style={{
              color: "#C8D6E5",
              lineHeight: "1.9",
              fontSize: "17px",
            }}
          >
            To become India's most trusted cryogenic solutions
            provider by continuously expanding our infrastructure,
            embracing advanced technologies, and delivering
            sustainable industrial gas solutions nationwide.
          </p>
        </div>
      </div>
    </section>
  );
}

export default OurMission;