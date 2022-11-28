const moment = require('moment')
const Account = require('../model/Account')
const Booking = require('../model/Booking')

exports.TokenBooking = async (req, res, next) => {
    const { doctor, user, date, token, time } = req.body
    const bookingDate = moment(date).format("ddd,ll")
    try {
        const booking = await new Booking({
            doctor,
            user,
            date: bookingDate,
            token,
            time
        }).save()
        const updateBooking = {
            date: bookingDate,
            token:
            {
                time: time,
                token: token
            }
        }
        console.log(updateBooking)
        const updateDoctor = await Account.findByIdAndUpdate(doctor, {
            $push: {
                "booking": updateBooking
            }
        })
        console.log("updation", updateDoctor)
        if (!booking && updateDoctor) {
            const error = new Error("The booking failed")
            error.statusCode = 400;
            throw error
        }
        res.status(200).json({
            success: true,
            message: "successfully Booked"
        })
    } catch (error) {
        if (!error.statusCode) error.statusCode = 500
        next(error)
    }
}

exports.allBooking = async (req, res, next) => {
    try {
        const allBooking = await Booking.find({})
        res.status(200).json({
            success: true,
            message: "Fetched Successfully",
            data: allBooking
        })
    } catch (error) {
        if (!error.statusCode) error.statusCode = 500
        next(error)
    }
}