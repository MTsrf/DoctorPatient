const { body, validationResult } = require('express-validator')
const Account = require('../model/Account')
const userValidationRules = () => {
    return [
        body("email", "Please enter a valid email to continue.").isEmail()
            .custom((value, { req }) => {
                return Account.findOne({ email: value }).then((accountDoc) => {
                    if (accountDoc) {
                        return Promise.reject(
                            "Email address already exists , Please try again with another email"
                        )
                    }
                });
            })
            .normalizeEmail(),
        body("password", "Password should be at least 6 characters long")
            .trim()
            .isLength({ min: 6 }),
        body("name", "Name should be maximum 20 character").isLength({ max: 20 }).trim().not().isEmpty(),
        body("phone_number", "Phone Number should be 10 letter").trim().isLength({ min: 10, max: 10 })
    ]
}
const validate = (req, res, next) => {
    const errors = validationResult(req)
    if (errors.isEmpty()) {
        return next()
    }
    const extractedErrors = []
    errors.array().map(err => extractedErrors.push({ [err.param]: err.msg }))
    return res.status(422).json({
        errors: extractedErrors,
    })
}
module.exports = {
    userValidationRules,
    validate,
}
