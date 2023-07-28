const {
  registerDoctor,
  authenticateDoctor,
  updateDoctor,
  updatePassword
} = require('../controllers/doctorController');
const express = require('express');
const router = express.Router();

// register Doctor
router.post('/registerDoctor', registerDoctor);

// authenticate Doctor
router.post('/authenticateDoctor', authenticateDoctor);

//update Doctor

router.put('/updateDoctor', updateDoctor);

//update Password

router.put('/updatePassword', updatePassword);

module.exports = router;
