const mongoose = require("mongoose");

const AppointmentInfoSchema = new mongoose.Schema({
  customerId: {
    type: String,
    default: "",
    required: "true",
  },
  doctorId: {
    type: String,
    default: "",
    required: "true",
  },
  to: {
    type: String,
    default: 0,
    required: "true",
  },
  from: {
    type: String,
    default: 0,
    required: "true",
  },
  appointmentDate: {
    type: Date,
    required: "true",
  },
  customerName: {
    type: String,
    required: "true",
  },
  phoneNo: {
    type: Number,
    required: "true",
  },
  appointmentStatus: {
    type: String,
    required: "true",
  },
  basicGroming: {
    type: String,
  },
  medicines: {
    type: String,
  },
  charges: {
    type: Number,
  },
  doctorImage: {
    type: String,
  },
  doctorName: {
    type: String,
  },
});

const AppointmentInfo = mongoose.model(
  "appointmentinfo",
  AppointmentInfoSchema
);

module.exports = AppointmentInfo;
