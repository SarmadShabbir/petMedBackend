const express = require('express');
const router = express.Router();
const {
  addLab,
  getAllLabs,
  deleteLab,
  addBlog,
  getAllBlogs,
  deleteBlog,
  getAllComplaints
} = require('../controllers/adminController');

// get complaints

router.get('/getAllComplaints', getAllComplaints);

// add lab
router.post('/addLab', addLab);

// get labs

router.get('/getLabs', getAllLabs);

// delete labs

router.delete('/deleteLab/:id', deleteLab);

// add lab
router.post('/addBlog', addBlog);

// get labs

router.get('/getAllBlogs', getAllBlogs);

// delete labs

router.delete('/deleteBlog/:id', deleteBlog);

module.exports = router;
