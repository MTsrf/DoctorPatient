const mongoose = require('mongoose')


const authSchema = new mongoose.Schema({
    name: {
        type: String
    },
    email: {
        type: String,
        required: true,
    },
    phone_number: {
        type: String,
    },
    password: {
        type: String,
        required: true
    },
    role: {
        type: String,
        enum: ["ROLE_USER", "ROLE_DOCTOR"],
        required: true
    },
    isDoctor: {
        type: Boolean,
        default: false
    },
    isVerified: {
        type: Boolean,
        default: false
    }
    , booking: [{
        date: Date,
        token: {
            time: String,
            token: Number
        }
    }]
}, { timestamps: true })

module.exports = mongoose.model("Account", authSchema)