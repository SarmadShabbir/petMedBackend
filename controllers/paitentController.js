const Paitent = require('../models/Paitent');
const Complaints = require('../models/Complaints');

// register Paitent
exports.registerPaitent = async (req, res) => {
  const { email } = req.body;
  try {
    const paitent = await Paitent.findOne({ email: email });
    if (paitent) {
      return res.json({
        status: 'FAILURE',
        message_en: 'User with this email already exists',
      });
    } else {
      const newPaitent = new Paitent(req.body);
      newPaitent.save().then(() => {
        return res.json({
          status: 'SUCCESS',
          message_en: 'Signed up successfully',
          data: newPaitent,
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

// Authenticate Paitent

exports.authenticatePaitent = async (req, res) => {
  const { email, password } = req.body;
  try {
    const paitent = await Paitent.findOne({ email: email });
    if (!paitent) {
      return res.json({
        status: 'FAILURE',
        message_en: 'User with this email does not exist',
      });
    } else if (paitent && paitent.password === password) {
      return res.json({
        status: 'SUCCESS',
        message_en: 'Signed In',
        data: paitent,
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

// submit complaint

exports.submitComplaint = async (req, res) => {
  const complaint = new Complaints(req.body);

  complaint
    .save()
    .then((response) => {
      return res.json({
        status: 'SUCCESS',
        message_en: 'Your Complaint has been submitted!',
      });
    })
    .catch((err) => {
      return res.json({
        status: 'FAILURE',
        message_en: 'There is some error while processing your request',
        error: err.message,
      });
    });
};
