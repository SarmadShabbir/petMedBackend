const mongoose = require('mongoose');

const DoctorSchema = new mongoose.Schema({
  title: {
    type: String,
    default: '',
  },
  name: {
    type: String,
    default: '',
  },
  email: {
    type: String,
    default: '',
  },
  phoneNumber: {
    type: String,
    default: '',
  },
  password: {
    type: String,
    default: '',
  },
  city: {
    type: String,
    default: '',
  },
  specialization: {
    type: String,
    default: '',
  },
  gender: {
    type: String,
    default: '',
  },
  profilePhoto: {
    type: String,
    default: '',
  },
});

const Doctor = mongoose.model('Doctor', DoctorSchema);

module.exports = Doctor;
