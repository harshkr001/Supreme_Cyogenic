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
    const updateStatus = async (id, status) => {
        try {
            await fetch(
                `http://localhost:5000/api/inquiries/${id}`,
                {
                    method: "PUT",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({ status }),
                }
            );

            setInquiries((prev) =>
                prev.map((item) =>
                    item._id === id
                        ? { ...item, status }
                        : item
                )
            );
        } catch (error) {
            console.error(error);
        }
    };
    const deleteInquiry = async (id) => {
        try {
            await fetch(
                `http://localhost:5000/api/inquiries/${id}`,
                {
                    method: "DELETE",
                }
            );

            setInquiries((prev) =>
                prev.filter((item) => item._id !== id)
            );
        } catch (error) {
            console.error(error);
        }
    };
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
                    <p>Nationality: {item.nationality}</p>
                    <p>Email: {item.email}</p>
                    <p>Phone: {item.phone}</p>
                    <p>Product: {item.product}</p>
                    <p>Message: {item.message}</p>
                    <p>
                        Date: {new Date(item.createdAt).toLocaleString()}
                    </p>
                    <div
                        style={{
                            display: "flex",
                            justifyContent: "space-between",
                            alignItems: "center",
                            marginTop: "15px",
                        }}
                    >
                        <div>
                            <span>Status: </span>  

                            <select
                            value={item.status}
                            onChange={(e) =>
                                updateStatus(item._id, e.target.value)
                            }
                        >
                            <option value="Pending">Pending</option>
                            <option value="In Progress">In Progress</option>
                            <option value="Resolved">Resolved</option>
                        </select>

                        </div>
                    
                        <button
                            onClick={() => deleteInquiry(item._id)}
                            style={{
                                backgroundColor: "red",
                                color: "white",
                                border: "none",
                                borderRadius: "5px",
                                fontWeight: "bold",
                                padding: "8px 16px",
                                cursor: "pointer",
                            }}
                        >
                            Delete
                        </button>
                    </div>
                </div>
            ))}
        </div>
    );
}



export default AdminDashboard;