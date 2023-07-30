const mongoose = require('mongoose');

const BlogsSchema = new mongoose.Schema(
  {
    postedBy: {
      type: String,
      default: 'Admin',
    },
    blogTitle: {
      type: String,
      default: '',
    },
    blogContent: {
      type: String,
      default: '',
    },
    imgUrl: {
      type: String,
      default: '',
    },
  },
  { timestamps: true }
);

const Blogs = mongoose.model('blogs', BlogsSchema);

module.exports = Blogs;
