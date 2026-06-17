const express = require("express");
const router = express.Router();

const {
     createInquiry,
     getAllInquiries
} = require("../controllers/inquiryController");

router.get("/", getAllInquiries);

router.post("/", createInquiry);


module.exports = router;