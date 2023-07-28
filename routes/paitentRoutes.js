const express = require('express');
const router = express.Router();
const {
  registerPaitent,
  authenticatePaitent,
  submitComplaint,
} = require('../controllers/paitentController');

// refister User

router.post('/registerPaitent', registerPaitent);

// authenticate User
router.post('/authenticatePaitent', authenticatePaitent);

// complaint
router.post('/submitComplaint', submitComplaint);

module.exports = router;
