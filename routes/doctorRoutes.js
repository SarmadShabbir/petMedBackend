const {
  registerDoctor,
  authenticateDoctor,
  updateDoctor,
  updatePassword,
  fetchAllDoctors,
  getADoctor,
  addSlot,
  getSlots,
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

//get All Doctors

router.get('/fetchAllDoctors', fetchAllDoctors);
router.get('/fetchAllDoctors', fetchAllDoctors);

//get All Doctors

router.get('/:specialization', getADoctor);

// add slots

router.post('/addSlot', addSlot);

// get slots
router.get('/getSlots', getSlots);
module.exports = router;
