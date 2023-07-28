const mongoose = require("mongoose")

const LabsSchema = new mongoose.Schema({
    imgUrl : {
        type: String,
        default: '',
    },
    heading : {
        type: String,
        default: ''
    },
    address : {
        type: String,
        default: ''
    },
    phone : {
        type: String,
        default: ''
    },
})

const Labs = mongoose.model('labs', LabsSchema)

module.exports = Labs;