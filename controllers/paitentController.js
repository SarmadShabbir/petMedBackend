const Paitent = require("../models/Paitent");
const Complaints = require("../models/Complaints");
const AppointmentInfo = require("../models/AppointmentInfo");
const Slots = require("../models/Slots");

// register Paitent
exports.registerPaitent = async (req, res) => {
  const { email } = req.body;
  try {
    const paitent = await Paitent.findOne({ email: email });
    if (paitent) {
      return res.json({
        status: "FAILURE",
        message_en: "User with this email already exists",
      });
    } else {
      const newPaitent = new Paitent(req.body);
      newPaitent.save().then(() => {
        return res.json({
          status: "SUCCESS",
          message_en: "Signed up successfully",
          data: newPaitent,
        });
      });
    }
  } catch (error) {
    return res.json({
      status: "FAILURE",
      message_en: "There is some error while processing your request",
      error: error.message,
    });
  }
};

// Authenticate Paitent

exports.authenticatePaitent = async (req, res) => {
  const { email, password } = req.body;
  try {
    const paitent = await Paitent.findOne({ email: email });
    if (!paitent) {
      return res.json({
        status: "FAILURE",
        message_en: "User with this email does not exist",
      });
    } else if (paitent && paitent.password === password) {
      return res.json({
        status: "SUCCESS",
        message_en: "Signed In",
        data: paitent,
      });
    } else {
      return res.json({
        status: "FAILURE",
        message_en: "Incorrect Password",
      });
    }
  } catch (error) {
    return res.json({
      status: "FAILURE",
      message_en: "There is some error while processing your request",
      error: error.message,
    });
  }
};

// submit complaint

exports.submitComplaint = async (req, res) => {
  const complaint = new Complaints(req.body);

  complaint
    .save()
    .then((response) => {
      return res.json({
        status: "SUCCESS",
        message_en: "Your Complaint has been submitted!",
      });
    })
    .catch((err) => {
      return res.json({
        status: "FAILURE",
        message_en: "There is some error while processing your request",
        error: err.message,
      });
    });
};

// book doctor

exports.bookDoctor = async (req, res) => {
  try {
    const {
      customerId,
      doctorId,
      to,
      from,
      appointmentDate,
      slotId,
      customerName,
      phoneNo,
    } = req.body;
    const saveData = {
      customerId,
      doctorId,
      to,
      from,
      appointmentDate,
      customerName,
      phoneNo,
      appointmentStatus: "In Queue",
    };
    const appointmentInfo = new AppointmentInfo(saveData);
    await appointmentInfo.save();
    await Slots.findByIdAndDelete(slotId);
    return res.json({
      status: "SUCCESS",
      message_en: "Doctor Booked successfully",
    });
  } catch (error) {
    return res.json({
      status: "FAILURE",
      message_en: "There is some error while processing your request",
      error: error.message,
    });
  }
};

// fetch past appointments

exports.fetchPastAppointments = async (req, res) => {
  try {
    const {customerId} = req.params;
    const appointmentInfo = await AppointmentInfo.find({customerId: customerId, appointmentStatus: "Completed"});
    return res.json({
      status: "SUCCESS",
      message_en: "Appointments Fetched successfully",
      appointmentInfo
    });
  } catch (error) {
    return res.json({
      status: "FAILURE",
      message_en: "There is some error while processing your request",
      error: error.message,
    });
  }
}