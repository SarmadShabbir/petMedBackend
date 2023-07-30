const mongoose = require('mongoose');

const DoctorSchema = new mongoose.Schema({
  title: {
    type: String,
    default: '',
    required: 'true'
  },
  name: {
    type: String,
    default: '',
    required: 'true'
  },
  email: {
    type: String,
    default: '',
    required: 'true'
  },
  phoneNumber: {
    type: String,
    default: '',
    required: 'true'
  },
  password: {
    type: String,
    default: '',
    required: 'true'
  },
  city: {
    type: String,
    default: '',
    required: 'true'
  },
  specialization: {
    type: String,
    default: '',
    required: 'true'
  },
  gender: {
    type: String,
    default: '',
    required: 'true'
  },
  profilePhoto: {
    type: String,
    default: '',
    required: 'true'
  }
});

const Doctor = mongoose.model('Doctor', DoctorSchema);

module.exports = Doctor;
