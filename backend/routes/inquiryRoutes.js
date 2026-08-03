const express = require("express");
const router = express.Router();

const {
     createInquiry,
     getAllInquiries,
     updateInquiryStatus,
     deleteInquiry,
} = require("../controllers/inquiryController");

router.get("/", getAllInquiries);

router.post("/", createInquiry);

router.put("/:id", updateInquiryStatus);

router.delete("/:id", deleteInquiry);
module.exports = router;