import { useState, useEffect } from "react";

export default function Profile() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const savedUser = JSON.parse(localStorage.getItem("user"));
    setUser(savedUser);
  }, []);

  if (!user) {
    return <h1>No user found</h1>;
  }

  return (
    <div className="min-h-screen bg-slate-950 text-white p-10">
      <div className="max-w-2xl mx-auto bg-slate-900 p-8 rounded-3xl">
        <h1 className="text-3xl font-bold mb-8">
          My Profile
        </h1>

        <div className="space-y-4">
          <p><strong>Name:</strong> {user.name}</p>
          <p><strong>Email:</strong> {user.email}</p>
          <p><strong>Role:</strong> {user.role}</p>
          <p><strong>Phone:</strong> {user.phone || "Not Added"}</p>
          <p><strong>Company:</strong> {user.company || "Not Added"}</p>
          <p><strong>Address:</strong> {user.address || "Not Added"}</p>
        </div>
      </div>
    </div>
  );
}