const express = require("express");
const router = express.Router();
const {
  registerPaitent,
  authenticatePaitent,
  submitComplaint,
  bookDoctor,
  fetchPastAppointments,
} = require("../controllers/paitentController");

// register User
router.post("/registerPaitent", registerPaitent);

// authenticate User
router.post("/authenticatePaitent", authenticatePaitent);

// complaint
router.post("/submitComplaint", submitComplaint);

// book Doctor
router.post("/bookDoctor", bookDoctor);

// book Doctor
router.get("/fetch/fetchPastAppointments/:customerId", fetchPastAppointments);

module.exports = router;
