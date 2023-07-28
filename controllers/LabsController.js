const Labs = require('../models/Labs');

// add lab

exports.addLab = (req, res) => {
  const lab = new Labs(req.body);

  lab
    .save()
    .then(() => {
      return res.json({
        status: 'SUCCESS',
        message_en: 'New Lab Has been added',
      });
    })
    .catch((error) => {
      return res.json({
        status: 'FAILURE',
        message_en: 'There is some error while processing your request',
        error: error.message,
      });
    });
};

// get all labs

exports.getAllLabs = async (req, res) => {
  const labs = await Labs.find({});
  try {
    if (labs) {
      return res.json({
        status: 'SUCCESS',
        data: labs,
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
