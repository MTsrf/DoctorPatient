const { SignupUser, SignupDoctor, login } = require('../controller/AuthController')
const { TokenBooking, allBooking } = require('../controller/BookingController')
const { BookingValidate } = require('../middleware/BookingValidations')
const { userValidationRules, validate } = require('../middleware/Validate')

const router = require('express').Router()

router.post("/signup-user", userValidationRules(), validate, SignupUser)

router.post("/signup-doctor", userValidationRules(), validate, SignupDoctor)

router.post("/login", userValidationRules(), validate, login)

router.post("/slot-booking", BookingValidate, TokenBooking)

router.get("/getAllBooking", allBooking)

module.exports = router