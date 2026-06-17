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

const updateInquiryStatus = async (req, res) => {
  try {
    const inquiry = await Inquiry.findByIdAndUpdate(
      req.params.id,
      { status: req.body.status },
      { new: true }
    );

    res.status(200).json(inquiry);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};
const deleteInquiry = async (req, res) => {
  try {
    await Inquiry.findByIdAndDelete(req.params.id);

    res.status(200).json({
      message: "Inquiry deleted successfully",
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

module.exports = { createInquiry, getAllInquiries, updateInquiryStatus, deleteInquiry };