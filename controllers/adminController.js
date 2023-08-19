const Labs = require('../models/Labs');
const Blogs = require('../models/Blogs');
const Complaints = require('../models/Complaints');

// get complaints
exports.getAllComplaints = async (req, res) => {
  try {
    const complaints = await Complaints.find({});
    if (complaints) {
      return res.json({
        status: 'SUCCESS',
        data: complaints,
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
  try {
    const labs = await Labs.find({});
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

// delete a lab

exports.deleteLab = async (req, res) => {
  const id = req.params.id;
  try {
    const deleteLab = await Labs.findByIdAndDelete(id);

    if (deleteLab) {
      return res.json({
        status: 'SUCCESS',
        message_en: 'Lab has been deleted successfully!',
      });
    }
  } catch (err) {
    return res.json({
      status: 'FAILURE',
      message_en: 'There is some error while processing your request',
      error: err.message,
    });
  }
};

// add blog

exports.addBlog = (req, res) => {
  const blog = new Blogs(req.body);

  blog
    .save()
    .then(() => {
      return res.json({
        status: 'SUCCESS',
        message_en: 'New Blog Has been added',
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

exports.getAllBlogs = async (req, res) => {
  try {
    const blogs = await Blogs.find({});
    if (blogs) {
      return res.json({
        status: 'SUCCESS',
        blogs,
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

exports.deleteBlog = async (req, res) => {
  const id = req.params.id;

  try {
    const deleteBlog = await Blogs.findByIdAndDelete(id);
    if (deleteBlog) {
      return res.json({
        status: 'SUCCESS',
        message_en: 'Blog has been deleted successfully!',
      });
    }
  } catch (err) {
    return res.json({
      status: 'FAILURE',
      message_en: 'There is some error while processing your request',
      error: err.message,
    });
  }
};
