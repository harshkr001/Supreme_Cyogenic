const express = require("express");
const cors = require("cors");
require("dotenv").config();

const connectDB = require("./config/db");
connectDB();

const app = express();

const inquiryRoutes = require("./routes/inquiryRoutes");

const userRoutes = require("./routes/userRoutes");

app.use(cors());
app.use(express.json());
app.use("/api/inquiries", inquiryRoutes);
app.use("/api/users", userRoutes);

app.get("/", (req, res) => {
  res.send("Backend is running 🚀");
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});