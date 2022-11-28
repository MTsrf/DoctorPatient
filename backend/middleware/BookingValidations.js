const { body } = require('express-validator')
const mongoose = require('mongoose')
const Booking = require('../model/Booking')

exports.BookingValidate = async (req, res, next) => {
    console.log(req.body)
    const { doctor, user, date, token, time } = req.body
    if (!doctor) {
        res.status(400).json({
            success: false,
            message: "doctor id is required"
        })
    }
    if (!user) {
        res.status(400).json({
            success: false,
            message: "user id is required"
        })
    }
    if (!date) {
        res.status(400).json({
            success: false,
            message: "date is required"
        })
    }
    if (!token) {
        res.status(400).json({
            success: false,
            message: "token is required"
        })
    }
    if (!time) {
        res.status(400).json({
            success: false,
            message: "time is required"
        })
    }
    try {
        const bookingDate = new Date(date)
        const checkToken = await Booking.aggregate([
            {
                $match: {
                    doctor: mongoose.Types.ObjectId(doctor),
                    user: mongoose.Types.ObjectId(user)
                }
            },
            {
                $match: {
                    date: bookingDate
                }
            }
        ])
        console.log(checkToken)
        if (checkToken.length) {
            const error = new Error("Your already booked this same date")
            error.statusCode = 400;
            throw error
        }
        next()
    } catch (error) {
        if (!error.statusCode) error.statusCode = 500
        next(error)
    }
}
