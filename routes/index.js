const express = require('express')
const routes = express.Router();
const PaitentRoutes = require('./paitentRoutes')
const DoctorRoutes = require('./doctorRoutes')
const AdminRoutes = require('./adminRoutes')
const {uploadFile} = require('../controllers/uploadController')

// paitent
routes.use('/paitent', PaitentRoutes);

// doctor
routes.use('/doctor', DoctorRoutes);

// upload
routes.post('/upload', uploadFile);

// admin
routes.use('/admin', AdminRoutes)
module.exports = routes;