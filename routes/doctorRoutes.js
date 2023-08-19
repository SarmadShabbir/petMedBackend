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

router.patch('/updateDoctor', updateDoctor);

//update Password

router.patch('/updatePassword', updatePassword);

//get All Doctors

router.get('/fetchAllDoctors', fetchAllDoctors);

// //get A Doctors

router.get('/fetchAllDoctorsBySpecialization/:specialization', getADoctor);

// add slots

router.post('/addSlot', addSlot);

// get slots

router.get('/getSlots', getSlots);

module.exports = router;
