const express = require("express");
const router = express.Router();
const {
  addLab,
  getAllLabs,
  deleteLab,
  addBlog,
  getAllBlogs,
  deleteBlog,
  getAllComplaints,
  fetchAllAppointments,
  getDoctors,
  registerAdmin,
  authenticateAdmin,
} = require("../controllers/adminController");

// get complaints
router.get("/getAllComplaints", getAllComplaints);

// add lab
router.post("/addLab", addLab);

// get labs
router.get("/getLabs", getAllLabs);

// delete labs
router.delete("/deleteLab/:id", deleteLab);

// add Blog
router.post("/addBlog", addBlog);

// get labs
router.get("/getAllBlogs", getAllBlogs);

// delete labs
router.delete("/deleteBlog/:id", deleteBlog);

// get labs
router.get("/fetchAllAppointments", fetchAllAppointments);

// get labs
router.get("/getDoctors", getDoctors);

// get labs
router.post("/registerAdmin", registerAdmin);

// get labs
router.post("/authenticateAdmin", authenticateAdmin);

module.exports = router;
