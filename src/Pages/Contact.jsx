

function Contact() {
  return (
    <div
      style={{
        background: "#061224",
        color: "white",
        minHeight: "100vh",
        paddingTop: "120px"
      }}
    >

      {/* HERO */}
      <div
        style={{
          textAlign: "center",
          padding: "40px 20px"
        }}
      >
        <h1
          style={{
            fontSize: "64px",
            marginBottom: "20px"
          }}
        >
          Contact <span style={{ color: "#00e5ff" }}>Us</span>
        </h1>

        <p
          style={{
            fontSize: "22px",
            color: "#cbd5e1",
            maxWidth: "800px",
            margin: "0 auto"
          }}
        >
          Get in touch with Supreme Cryogenic for dry ice solutions,
          industrial CO₂ supply, and premium cooling services.
        </p>
      </div>

      {/* CONTACT SECTION */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: "50px",
          padding: "60px",
          flexWrap: "wrap"
        }}
      >

        {/* LEFT INFO */}
        <div
          style={{
            flex: 1,
            minWidth: "320px"
          }}
        >
          <div
            style={{
              background: "#0d1b2a",
              padding: "40px",
              borderRadius: "24px",
              marginBottom: "25px"
            }}
          >
            <h2 style={{ color: "#00e5ff" }}>📍 Address</h2>
            <p style={{ color: "#cbd5e1", marginTop: "10px" }}>
              Supreme Cryogenic Pvt Ltd,
              Colombo, Sri Lanka
            </p>
          </div>

          <div
            style={{
              background: "#0d1b2a",
              padding: "40px",
              borderRadius: "24px",
              marginBottom: "25px"
            }}
          >
            <h2 style={{ color: "#00e5ff" }}>📞 Phone</h2>
            <p style={{ color: "#cbd5e1", marginTop: "10px" }}>
              +94 77 123 4567
            </p>
          </div>

          <div
            style={{
              background: "#0d1b2a",
              padding: "40px",
              borderRadius: "24px"
            }}
          >
            <h2 style={{ color: "#00e5ff" }}>✉️ Email</h2>
            <p style={{ color: "#cbd5e1", marginTop: "10px" }}>
              support@supremecryogenic.com
            </p>
          </div>
        </div>

        {/* RIGHT FORM */}
        <div
          style={{
            flex: 1,
            minWidth: "350px",
            background: "#0d1b2a",
            padding: "50px",
            borderRadius: "30px",
            boxShadow: "0 20px 50px rgba(0,0,0,0.3)"
          }}
        >

          <h2
            style={{
              fontSize: "36px",
              marginBottom: "30px"
            }}
          >
            Send a Message
          </h2>

          <form
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "20px"
            }}
          >

            <input
              type="text"
              placeholder="Your Name"
              style={inputStyle}
            />

            <input
              type="email"
              placeholder="Your Email"
              style={inputStyle}
            />

            <textarea
              placeholder="Your Message"
              rows="6"
              style={{
                ...inputStyle,
                resize: "none"
              }}
            />

            <button
              style={{
                padding: "18px",
                background: "#00e5ff",
                border: "none",
                borderRadius: "14px",
                fontSize: "18px",
                fontWeight: "bold",
                cursor: "pointer"
              }}
            >
              Send Message
            </button>

          </form>
        </div>

      </div>

     
    </div>
  )
}

const inputStyle = {
  padding: "18px",
  borderRadius: "14px",
  border: "none",
  background: "#132238",
  color: "white",
  fontSize: "16px",
  outline: "none"
}

export default Contact