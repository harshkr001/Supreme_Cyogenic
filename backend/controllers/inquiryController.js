const Inquiry = require("../models/Inquiry");
const sendInquiryEmail = require("../utils/sendEmails");

const createInquiry = async (req, res) => {
  try {
    const inquiry = await Inquiry.create(req.body);
    await sendInquiryEmail(inquiry);
    res.status(201).json(inquiry);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = { createInquiry };