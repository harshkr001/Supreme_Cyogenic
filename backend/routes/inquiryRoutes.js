const express = require("express");
const router = express.Router();

const {
     createInquiry,
     getAllInquiries,
     updateInquiryStatus,
} = require("../controllers/inquiryController");

router.get("/", getAllInquiries);

router.post("/", createInquiry);

router.put("/:id", updateInquiryStatus);


module.exports = router;