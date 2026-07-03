import { useState, useEffect } from "react";

export default function Profile() {
  const [user, setUser] = useState(null);

  const [editing, setEditing] = useState(false);

  useEffect(() => {
    const savedUser = JSON.parse(localStorage.getItem("user"));
    setUser(savedUser);
  }, []);

  if (!user) {
    return <h1>No user found</h1>;
  }

  return (
    <div className="min-h-screen bg-slate-950 flex items-center justify-center text-white p-10">
      <div className=" w-full max-w-5xl mx-auto bg-slate-900 p-8 rounded-3xl shadow-xl">
        <h1 className="text-3xl font-bold mb-8 text-center">
          My Profile
        </h1>

        <div className="grid grid-cols-2 gap-4 text-lg">
          <p><strong>Name:</strong> {user.name}</p>
          <p><strong>Email:</strong> {user.email}</p>
          <p><strong>Role:</strong> {user.role}</p>
          <p><strong>Phone:</strong> {user.phone || "Add Phone Number"}</p>
          <p><strong>Company:</strong> {user.company || "Add Company"}</p>
          <p><strong>Address:</strong> {user.address || "Add Address"}</p>

        </div>

        <div className="flex justify-end mt-6">
          <button
            onClick={() => setEditing(!editing)}
            className="bg-blue-600 px-4 py-2 rounded-lg hover:bg-blue-700"
          >
            Edit Profile
          </button>

          {editing && (
            <div className="mt-4 space-y-3">
              <input
                type="text"
                placeholder="Phone Number"
                className="w-full p-3 text-black rounded"
              />

              <input
                type="text"
                placeholder="Company"
                className="w-full p-3 text-black rounded"
              />

              <input
                type="text"
                placeholder="Address"
                className="w-full p-3 text-black rounded"
              />

              <button className="bg-green-600 px-4 py-2 rounded">
                Save Changes
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}