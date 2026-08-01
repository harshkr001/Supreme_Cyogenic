function CompanyTimeline() {
  const timeline = [
    {
      year: "2014",
      title: "Company Founded",
      desc: "Started operations with industrial gas and cryogenic solutions."
    },
    {
      year: "2017",
      title: "Expanded Production",
      desc: "Increased manufacturing capacity and cold-chain infrastructure."
    },
    {
      year: "2021",
      title: "Nationwide Supply",
      desc: "Serving customers across multiple industries with reliable logistics."
    },
    {
      year: "Today",
      title: "Trusted Industry Partner",
      desc: "Delivering Dry Ice, CO₂ and Industrial Gases with quality and safety."
    }
  ];

  return (
    <section
      style={{
        padding: "100px 70px",
        background: "#081420",
      }}
    >
      <h2
        style={{
          textAlign: "center",
          fontSize: "48px",
          marginBottom: "70px",
          color: "white",
        }}
      >
        Our Journey
      </h2>

      {timeline.map((item, index) => (
        <div
          key={index}
          style={{
            display: "flex",
            gap: "35px",
            marginBottom: "45px",
            alignItems: "flex-start",
          }}
        >
          <div
            style={{
              width: "90px",
              color: "#00BFFF",
              fontWeight: "bold",
              fontSize: "24px",
            }}
          >
            {item.year}
          </div>

          <div
            style={{
              borderLeft: "3px solid #00BFFF",
              paddingLeft: "30px",
            }}
          >
            <h3
              style={{
                color: "white",
                marginBottom: "10px",
                fontSize: "28px",
              }}
            >
              {item.title}
            </h3>

            <p
              style={{
                color: "#C8D6E5",
                lineHeight: "1.8",
              }}
            >
              {item.desc}
            </p>
          </div>
        </div>
      ))}
    </section>
  );
}

export default CompanyTimeline;