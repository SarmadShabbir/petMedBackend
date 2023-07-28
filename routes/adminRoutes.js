const express = require('express');
const router = express.Router();
const { addLab, getAllLabs } = require('../controllers/LabsController');

// add lab
router.post('/addLab', addLab);

// get labs

router.get('/getLabs', getAllLabs);

module.exports = router;
