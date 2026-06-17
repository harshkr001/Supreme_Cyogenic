const Inquiry = require("../models/Inquiry");
const sendInquiryEmail = require("../utils/sendEmails");

const createInquiry = async (req, res) => {
  try {
    console.log("BODY RECEIVED:", req.body); 
    const inquiry = await Inquiry.create(req.body);
    console.log("SAVED:", inquiry);
    await sendInquiryEmail(inquiry);
    res.status(201).json(inquiry);
  } catch (error) {
    console.error(" FULL ERROR:", error);
    console.error(" Message:", error.message);
    res.status(500).json({ message: error.message });
  }
};

const getAllInquiries = async (req, res) => {
  try {
    const inquiries = await Inquiry.find().sort({ createdAt: -1 });

    res.status(200).json(inquiries);
  } catch (error) {
    console.error(" FULL ERROR:", error);
    console.error(" Message:", error.message);
    res.status(500).json({
      message: error.message,
    });
  }
};

module.exports = { createInquiry, getAllInquiries };