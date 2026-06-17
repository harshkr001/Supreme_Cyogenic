import { useEffect, useState } from "react";
function AdminDashboard() {
  const [inquiries, setInquiries] = useState([]);

    useEffect(() => {
     fetch("http://localhost:5000/api/inquiries")
     .then((res) => res.json())
     .then((data) => {
        console.log(data);
        setInquiries(data);
        })
    }, []);
  return (
  <div style={{ padding: "20px" }}>
    <h1>Admin Dashboard</h1>

    {inquiries.map((item) => (
      <div
        key={item._id}
        style={{
          border: "1px solid #ccc",
          margin: "10px 0",
          padding: "10px",
        }}
      >
        <p>Name: {item.name}</p>
        <p>Email: {item.email}</p>
        <p>Phone: {item.phone}</p>
        <p>Product: {item.product}</p>
        <p>Message: {item.message}</p>
        <p>Status: {item.status}</p>
      </div>
    ))}
  </div>
 );
}



export default AdminDashboard;