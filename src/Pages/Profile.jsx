import { useState, useEffect } from "react";

export default function Profile() {
  const [user, setUser] = useState(null);
  const [editing, setEditing] = useState(false);

  useEffect(() => {
    const savedUser = JSON.parse(localStorage.getItem("user"));
    setUser(savedUser);
  }, []);

  if (!user) {
    return (
      <div className="min-h-screen bg-slate-950 flex items-center justify-center text-white">
        No user found
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-950 text-white py-24 px-6">
      <div className="max-w-7xl mx-auto">

        {/* Profile Card */}
        <div className="bg-slate-900 rounded-3xl shadow-xl p-10">

          <div className="flex flex-col items-center mb-10">
            <div className="w-24 h-24 rounded-full bg-cyan-500 flex items-center justify-center text-4xl font-bold text-slate-950">
              {user.name?.charAt(0).toUpperCase() || "U"}
            </div>

            <h1 className="text-4xl font-bold mt-4">
              {user.name || "User"}
            </h1>

            <p className="text-cyan-400">
              {user.email}
            </p>
          </div>

          {/* Profile Details */}
          <div className="grid md:grid-cols-2 gap-6">

            <div className="bg-slate-800 p-5 rounded-xl">
              <p className="text-cyan-400">Role</p>
              <p className="text-xl">{user.role || "User"}</p>
            </div>

            <div className="bg-slate-800 p-5 rounded-xl">
              <p className="text-cyan-400">Phone</p>
              <p className="text-xl">
                {user.phone || "Add Phone Number"}
              </p>
            </div>

            <div className="bg-slate-800 p-5 rounded-xl">
              <p className="text-cyan-400">Company</p>
              <p className="text-xl">
                {user.company || "Add Company"}
              </p>
            </div>

            <div className="bg-slate-800 p-5 rounded-xl">
              <p className="text-cyan-400">Address</p>
              <p className="text-xl">
                {user.address || "Add Address"}
              </p>
            </div>

          </div>

          {/* Edit Button */}
          <div className="mt-8">
            <button
              onClick={() => setEditing(!editing)}
              className="w-full bg-cyan-500 text-slate-950 py-3 rounded-xl font-bold hover:bg-cyan-400 transition"
            >
              {editing ? "Cancel" : "Edit Profile"}
            </button>
          </div>

          {/* Edit Form */}
          {editing && (
            <div className="mt-6 grid gap-4">
              <input
                type="text"
                placeholder="Phone Number"
                className="p-3 rounded-lg text-black"
              />

              <input
                type="text"
                placeholder="Company"
                className="p-3 rounded-lg text-black"
              />

              <input
                type="text"
                placeholder="Address"
                className="p-3 rounded-lg text-black"
              />

              <button className="bg-green-600 py-3 rounded-xl font-semibold hover:bg-green-700">
                Save Changes
              </button>
            </div>
          )}
        </div>

        {/* Dashboard Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-10">

          <div className="bg-slate-900 p-6 rounded-2xl text-center">
            <h3 className="text-cyan-400 mb-2">Total Orders</h3>
            <p className="text-4xl font-bold">12</p>
          </div>

          <div className="bg-slate-900 p-6 rounded-2xl text-center">
            <h3 className="text-yellow-400 mb-2">Pending Orders</h3>
            <p className="text-4xl font-bold">2</p>
          </div>

          <div className="bg-slate-900 p-6 rounded-2xl text-center">
            <h3 className="text-green-400 mb-2">Completed</h3>
            <p className="text-4xl font-bold">10</p>
          </div>

          <div className="bg-slate-900 p-6 rounded-2xl text-center">
            <h3 className="text-purple-400 mb-2">Cart Items</h3>
            <p className="text-4xl font-bold">3</p>
          </div>

        </div>

      </div>
    </div>
  );
}