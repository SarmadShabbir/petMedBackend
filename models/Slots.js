const mongoose = require('mongoose');

const SlotsSchema = new mongoose.Schema({
  to: {
    type: String,
    default: '',
  },
  from: {
    type: String,
    default: '',
  },
  slotDate: {
    type: String,
    default: '',
  },
  doctorId: {
    type: String,
    default: '',
  },
});

const slots = mongoose.model('slots', SlotsSchema);

module.exports = slots;
