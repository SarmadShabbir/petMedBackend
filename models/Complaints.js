const mongoose = require("mongoose")

const ComplaintSchema = new mongoose.Schema({
    name : {
        type: String,
        default: '',
    },
    email : {
        type: String,
        default: ''
    },
    phoneNumber : {
        type: String,
        default: ''
    },
    dateOfComplaint : {
        type: Date,
        default: ''
    },
    staffName : {
        type: String,
        default: ''
    },
    problem : {
        type: String,
        default: ''
    }
})

const Complaints = mongoose.model('complaints', ComplaintSchema)

module.exports = Complaints;