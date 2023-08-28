const Labs = require("../models/Labs");
const Blogs = require("../models/Blogs");
const Complaints = require("../models/Complaints");
const Doctor = require("../models/Doctor");
const AppointmentInfo = require("../models/AppointmentInfo");
const Admin = require("../models/Admin");

// get doctors
exports.getDoctors = async (req, res) => {
  try {
    const doctors = await Doctor.find({});
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

// get all appointments
exports.fetchAllAppointments = async (req, res) => {
  try {
    const appointments = await AppointmentInfo.find({});
    if (appointments) {
      return res.json({
        status: "SUCCESS",
        appointments,
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
// get complaints
exports.getAllComplaints = async (req, res) => {
  try {
    const complaints = await Complaints.find({});
    if (complaints) {
      return res.json({
        status: "SUCCESS",
        data: complaints,
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

// add lab
exports.addLab = (req, res) => {
  const lab = new Labs(req.body);

  lab
    .save()
    .then(() => {
      return res.json({
        status: "SUCCESS",
        message_en: "New Lab Has been added",
      });
    })
    .catch((error) => {
      return res.json({
        status: "FAILURE",
        message_en: "There is some error while processing your request",
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
        status: "SUCCESS",
        data: labs,
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

// delete a lab

exports.deleteLab = async (req, res) => {
  const id = req.params.id;
  try {
    const deleteLab = await Labs.findByIdAndDelete(id);

    if (deleteLab) {
      return res.json({
        status: "SUCCESS",
        message_en: "Lab has been deleted successfully!",
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

// add blog

exports.addBlog = (req, res) => {
  const blog = new Blogs(req.body);

  blog
    .save()
    .then(() => {
      return res.json({
        status: "SUCCESS",
        message_en: "New Blog Has been added",
      });
    })
    .catch((error) => {
      return res.json({
        status: "FAILURE",
        message_en: "There is some error while processing your request",
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
        status: "SUCCESS",
        blogs,
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

// delete Blog
exports.deleteBlog = async (req, res) => {
  const id = req.params.id;

  try {
    const deleteBlog = await Blogs.findByIdAndDelete(id);
    if (deleteBlog) {
      return res.json({
        status: "SUCCESS",
        message_en: "Blog has been deleted successfully!",
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

// Register Admin
exports.registerAdmin = async (req, res) => {
  try {
    const adminRegister = new Admin(req.body);
    adminRegister.save().then((response) => {
      return res.json({
        status: "SUCCESS",
        message_en: "Admin has been registered successfully",
        admin: response,
      });
    });
  } catch (error) {
    return res.json({
      status: "FAILURE",
      message_en: "There is some error while processing your request",
      error: err.message,
    });
  }
};

// authenticate Admin
exports.authenticateAdmin = async (req, res) => {
  const { email, password } = req.body;
  try {
    const admin = await Admin.findOne({ email: email });
    if(!admin){
      return res.json({
        status: "FAILURE",
        message_en: "Admin with this email does not exist",
      });
    }
    else if (admin && admin.password === password) {
      return res.json({
        status: "SUCCESS",
        message_en: "Signed In",
        adminEmail: admin.email,
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
