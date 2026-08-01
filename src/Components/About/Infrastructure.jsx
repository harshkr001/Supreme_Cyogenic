import container from "../../assets/container.jpeg";
import cryocyl from "../../assets/cryocyl.jpeg";
import filling from "../../assets/gasfilling.jpeg";
import storage from "../../assets/storage.jpeg";

function Infrastructure() {
  const items = [
    {
      title: "Cryogenic Storage Tanks",
      image: storage,
      desc: "Modern storage tanks designed for safe and efficient handling of industrial gases."
    },
    {
      title: "Gas Filling Station",
      image: filling,
      desc: "Advanced filling facility ensuring purity, precision, and reliable gas supply."
    },
    {
      title: "Cryocyl Containers",
      image: cryocyl,
      desc: "High-quality cryogenic cylinders for secure transportation and storage."
    },
    {
      title: "Industrial Containers",
      image: container,
      desc: "Heavy-duty cryogenic containers built for bulk industrial applications."
    }
  ];

  return (
    <section
      style={{
        background: "#081420",
        padding: "100px 70px",
      }}
    >
      <h2
        style={{
          textAlign: "center",
          color: "white",
          fontSize: "46px",
          marginBottom: "20px",
        }}
      >
        Infrastructure & Facilities
      </h2>

      <p
        style={{
          textAlign: "center",
          color: "#BBD7EE",
          maxWidth: "900px",
          margin: "0 auto 60px",
          lineHeight: "1.8",
        }}
      >
        Our modern infrastructure enables us to manufacture, store,
        transport, and deliver premium cryogenic products while
        maintaining the highest safety standards.
      </p>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit,minmax(280px,1fr))",
          gap: "30px",
        }}
      >
        {items.map((item) => (
          <div
            key={item.title}
            style={{
              background: "#0B1B2B",
              borderRadius: "18px",
              overflow: "hidden",
              transition: "0.3s",
              border: "1px solid rgba(0,191,255,.15)",
            }}
          >
            <img
              src={item.image}
              alt={item.title}
              style={{
                width: "100%",
                height: "240px",
                objectFit: "cover",
              }}
            />

            <div style={{ padding: "25px" }}>
              <h3
                style={{
                  color: "#00BFFF",
                  marginBottom: "15px",
                }}
              >
                {item.title}
              </h3>

              <p
                style={{
                  color: "#C8D6E5",
                  lineHeight: "1.7",
                }}
              >
                {item.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Infrastructure;