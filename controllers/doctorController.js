const Doctor = require('../models/Doctor');

exports.registerDoctor = async (req, res) => {
  const { email } = req.body;
  try {
    const doctor = await Doctor.findOne({ email: email });
    if (doctor) {
      return res.json({
        status: 'FAILURE',
        message_en: 'Doctor with this email already exists',
      });
    } else {
      const newDoctor = new Doctor(req.body);
      newDoctor.save().then(() => {
        return res.json({
          status: 'SUCCESS',
          message_en: 'Signed up successfully',
          data: newDoctor,
        });
      });
    }
  } catch (error) {
    return res.json({
      status: 'FAILURE',
      message_en: 'There is some error while processing your request',
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
        status: 'FAILURE',
        message_en: 'User with this email does not exist',
      });
    } else if (doctor && doctor.password === password) {
      return res.json({
        status: 'SUCCESS',
        message_en: 'Signed In',
        data: doctor,
      });
    } else {
      return res.json({
        status: 'FAILURE',
        message_en: 'Incorrect Password',
      });
    }
  } catch (error) {
    return res.json({
      status: 'FAILURE',
      message_en: 'There is some error while processing your request',
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
        status: 'SUCCESS',
        message_en: 'Contact Information Updated Successfully!',
        data: updateDoctor,
      });
    } else {
      return res.json({
        status: 'FAILURE',
        message_en: 'Doctor not found with the provided email',
      });
    }
  } catch (error) {
    return res.json({
      status: 'FAILURE',
      message_en: 'There is some error while processing your request',
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
          status: 'SUCCESS',
          message_en: 'Password has been updated!',
        });
      })
      .catch((error) => {
        return res.json({
          status: 'FAILURE',
          message_en: 'There is some error while processing your request',
          error: error.message,
        });
      });
  } else {
    return res.json({
      status: 'FAILURE',
      message_en: 'Previous password is incorrect',
    });
  }
};
