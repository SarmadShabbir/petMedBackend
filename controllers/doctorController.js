const AppointmentInfo = require("../models/AppointmentInfo");
const Doctor = require("../models/Doctor");
const Slots = require("../models/Slots");

exports.registerDoctor = async (req, res) => {
  const { email } = req.body;
  try {
    const doctor = await Doctor.findOne({ email: email });
    if (doctor) {
      return res.json({
        status: "FAILURE",
        message_en: "Doctor with this email already exists",
      });
    } else {
      const newDoctor = new Doctor(req.body);
      newDoctor.save().then(() => {
        return res.json({
          status: "SUCCESS",
          message_en: "Signed up successfully",
          data: newDoctor,
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

exports.authenticateDoctor = async (req, res) => {
  const { email, password } = req.body;
  try {
    const doctor = await Doctor.findOne({ email: email });
    if (!doctor) {
      return res.json({
        status: "FAILURE",
        message_en: "User with this email does not exist",
      });
    } else if (doctor && doctor.password === password) {
      return res.json({
        status: "SUCCESS",
        message_en: "Signed In",
        data: doctor,
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

// update doctor

exports.updateDoctor = async (req, res) => {
  const { title, name, email, phoneNumber, updatedEmail } = req.body;
  try {
    const updateDoctor = await Doctor.findOneAndUpdate(
      { email: email },
      {
        title: title,
        name: name,
        email: updatedEmail,
        phoneNumber: phoneNumber,
      },
      { new: true } // Setting this option to true will return the updated document
    );

    if (updateDoctor) {
      return res.json({
        status: "SUCCESS",
        message_en: "Contact Information Updated Successfully!",
        data: updateDoctor,
      });
    } else {
      return res.json({
        status: "FAILURE",
        message_en: "Doctor not found with the provided email",
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

// update password

exports.updatePassword = async (req, res) => {
  const { prevPassword, currentPassword, email } = req.body;
  const doctor = await Doctor.findOne({ email: email });
  if (doctor.password === prevPassword) {
    Doctor.updateOne({ password: currentPassword })
      .then(() => {
        return res.json({
          status: "SUCCESS",
          message_en: "Password has been updated!",
        });
      })
      .catch((error) => {
        return res.json({
          status: "FAILURE",
          message_en: "There is some error while processing your request",
          error: error.message,
        });
      });
  } else {
    return res.json({
      status: "FAILURE",
      message_en: "Previous password is incorrect",
    });
  }
};

// fetch all doctors

exports.fetchAllDoctors = async (req, res) => {
  try {
    const doctors = await Doctor.find();
    if (doctors) {
      return res.json({
        status: "SUCCESS",
        doctors,
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

// converting parameter
function convertToNormalCase(camelOrPascalCase) {
  return camelOrPascalCase
    .replace(/([a-z])([A-Z])/g, "$1 $2") // Add space before each uppercase letter
    .replace(/([A-Z])([A-Z][a-z])/g, "$1 $2") // Add space between consecutive uppercase letters followed by lowercase letters
    .split(/\s+/) // Split the string by spaces
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()) // Capitalize the first letter of each word and convert the rest to lowercase
    .join(" "); // Join the words with spaces
}

// fetch a single doctor

exports.getADoctor = async (req, res) => {
  const specialization = req.params.specialization;
  const parsedSpecialization = convertToNormalCase(specialization);
  try {
    const doctor = await Doctor.find({ specialization: parsedSpecialization });
    if (doctor) {
      return res.json({
        status: "SUCCESS",
        doctor,
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

// add slots
exports.addSlot = async (req, res) => {
  const { doctorId, to, from, slotDate } = req.body;

  try {
    const foundSlot = await Slots.findOne({
      doctorId: doctorId,
      slotDate: slotDate,
    });

    if (foundSlot) {
      if (foundSlot.to === to || foundSlot.from === from) {
        return res.json({
          status: "FAILURE",
          message_en: "Slot Already exists",
        });
      } else {
        const slots = new Slots(req.body);
        await slots.save();

        return res.json({
          status: "SUCCESS",
          message_en: "Slot Added successfully",
          slots,
        });
      }
    } else {
      const slots = new Slots(req.body);
      await slots.save();

      return res.json({
        status: "SUCCESS",
        message_en: "Slot Added successfully",
        slots,
      });
    }
  } catch (err) {
    return res.json({
      status: "FAILURE",
      message_en: "There is some error while processing your request",
      error: err.message,
    });
  }
};

// get slots

exports.getSlots = async (req, res) => {
  try {
    const getSlots = await Slots.find();
    if (getSlots) {
      res.json({
        status: "SUCCESS",
        getSlots,
      });
    }
  } catch (error) {
    res.json({
      status: "FAILURE",
      message_en: "There is some error while processing your request",
      error: error.message,
    });
  }
};

// get slots

exports.getDoctorSlots = async (req, res) => {
  try {
    const { doctorId } = req.params;
    const slots = await Slots.find({ doctorId: doctorId });

    return res.json({
      status: "SUCCESS",
      slots,
    });
  } catch (error) {
    res.json({
      status: "FAILURE",
      message_en: "There is some error while processing your request",
      error: error.message,
    });
  }
};

// delete a slot

exports.deleteSlot = async (req, res) => {
  const { _id } = req.body;
  try {
    const deleteSlot = await Slots.findOneAndDelete({ _id: _id });
    if (deleteSlot) {
      return res.json({
        status: "SUCCESS",
        message_en: "Slot Deleted successfully",
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

// fetch all the appointments
exports.fetchAppointments = async (req, res) => {
  try {
    const { doctorId } = req.params;
    const appointments = await AppointmentInfo.find({ doctorId: doctorId });
    return res.json({
      status: "SUCCESS",
      message_en: "Appointments Fetched successfully",
      appointments,
    });
  } catch (error) {
    return res.json({
      status: "FAILURE",
      message_en: "There is some error while processing your request",
      error: error.message,
    });
  }
};

// updating status

exports.updateStatus = async (req, res) => {  try {
    const {
      newStatus,
      basicGroming,
      medicines,
      charges,
      appointmentId,
      doctorImage,
      doctorName,
    } = req.body;

    const response = await AppointmentInfo.findOneAndUpdate(
      { _id: appointmentId },
      {
        basicGroming,
        medicines,
        charges,
        appointmentStatus: newStatus,
        doctorImage,
        doctorName,
      }
    );
    return res.json({
      status: "SUCCESS",
      message_en: "Appointment Status Updated Successfully!",
      response,
    });
  } catch (error) {
    return res.json({
      status: "FAILURE",
      message_en: "There is some error while processing your request",
      error: error.message,
    });
  }
};
