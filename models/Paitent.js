const mongoose = require('mongoose');

const PaitentSchema = new mongoose.Schema({
  firstName: {
    type: String,
    default: '',
  },
  lastName: {
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
  petName: {
    type: String,
    default: '',
  },
  petBreed: {
    type: String,
    default: '',
  },
  petAge: {
    type: String,
    default: '',
  },
  city: {
    type: String,
    default: '',
  },
  profilePhoto: {
    type: String,
    default: '',
  },
  weight: {
    type: String,
    default: '',
  },
  color: {
    type: String,
    default: '',
  },
  type: {
    type: String,
    default: '',
  },
});

const paitent = mongoose.model('paitent', PaitentSchema);

module.exports = paitent;
