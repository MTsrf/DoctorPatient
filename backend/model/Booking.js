const mongoose = require('mongoose')


const bookingSchema = new mongoose.Schema({
    user: {
        type: mongoose.Types.ObjectId,
        required: true
    },
    doctor: {
        type: mongoose.Types.ObjectId,
        required: true
    },
    date: {
        type: Date
    },
    time: {
        type: String
    },
    token: {
        type: Number
    }
})

module.exports = mongoose.model("Booking", bookingSchema)