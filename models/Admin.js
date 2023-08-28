const mongoose = require("mongoose");

const AdminSchema = new mongoose.Schema({
  email: {
    type: String,
    default: "",
    required: "true",
  },
  password: {
    type: String,
    default: "",
    required: "true",
  },
});

const Admin = mongoose.model("Admin", AdminSchema);

module.exports = Admin;
