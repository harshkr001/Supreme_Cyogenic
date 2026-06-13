import { useState } from "react";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    nationality: "",
    email: "",
    phone: "",
    product: "",
    message: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
  e.preventDefault();

  try {
    const response = await fetch("http://localhost:5000/api/inquiry", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    const data = await response.json();

    if (response.ok) {
      alert("Inquiry submitted successfully!");

      setFormData({
        name: "",
        nationality: "",
        email: "",
        phone: "",
        product: "",
        message: "",
      });
    } else {
      alert(data.message || "Something went wrong");
    }
  } catch (error) {
    console.error(error);
    alert("Server error");
   }
};

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
              Noida, India
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
              +91 77 123 4567
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
            onSubmit={handleSubmit}
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "20px"
            }}
          >

            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your Name"
              style={inputStyle}
            />

            <select
              name="nationality"
              value={formData.nationality}
              onChange={handleChange}
              style={inputStyle}
            >
             <option value="">Select Nationality</option>
             <option value="Indian">Indian</option>
             <option value="Sri Lankan">Sri Lankan</option>
             <option value="American">American</option>
             <option value="British">British</option>
             <option value="Canadian">Canadian</option>
             <option value="Australian">Australian</option>
             <option value="Other">Other</option>
            </select>

            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Your Email"
              style={inputStyle}
            />

            <input
              type="tel"
              name="phone"
              placeholder="Phone Number"
              value={formData.phone}
              onChange={(e) => {
              const value = e.target.value.replace(/\D/g, "");
              if (value.length <= 10) {
                setFormData({ ...formData, phone: value });
              }
              }}
              maxLength={10}
              pattern="[0-9]{10}"
              required
              style={inputStyle}
            />


            <input
              type="text"
              name="product"
              value={formData.product}
              onChange={handleChange}
              placeholder="Product Interested In"
              style={inputStyle}
            />

            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Your Message"
              rows="6"
              style={{
                ...inputStyle,
                resize: "none"
              }}
            />

            <button
              type="submit"
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