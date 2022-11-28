const bcrypt = require('bcrypt')
const Account = require('../model/Account')


exports.SignupUser = async (req, res, next) => {
    const { email, password, name, role, phone_number } = req.body

    try {
        if (role !== "ROLE_USER") {
            const error = new Error(
                "Signing up an user should have a role of user"
            );
            error.statusCode = 500;
            throw error;
        }
        const HashPassword = await bcrypt.hash(password, 10)
        const model = await new Account({
            name,
            email,
            password: HashPassword,
            phone_number,
            isVerified: true,
            role,
        }).save()
        if (!model) {
            const error = new Error(
                "Registraion failed"
            );
            error.statusCode = 500;
            throw error;
        }
        console.log(model)
        res.status(200).json({
            success: true,
            message: "Registration Successfully Completed"
        })
    } catch (err) {
        if (!err.statusCode) err.statusCode = 500;
        next(err);
    }
}


exports.SignupDoctor = async (req, res, next) => {
    const { name, password, email, phone_number, role } = req.body
    try {
        if (role !== "ROLE_DOCTOR") {
            const error = new Error(
                "Signing up an user should have a role of doctor"
            )
            error.statusCode = 500;
            throw error
        }
        const HashPassword = await bcrypt.hash(password, 10)
        const model = await new Account({
            name,
            email,
            password: HashPassword,
            phone_number,
            isVerified: true,
            role,
        }).save()
        if (!model) {
            const error = new Error(
                "Registraion failed"
            );
            error.statusCode = 500;
            throw error;
        }
        console.log(model)
        res.status(200).json({
            success: true,
            message: "Registration Successfully Completed"
        })
    } catch (err) {
        if (!err.statusCode) err.statusCode = 500;
        next(err)
    }
}


exports.login = async (req, res, next) => {
    const { email, password } = req.body
    try {
        let logindata = await Account.findOne({ email: email })
        if (!logindata) {
            const error = new Error("Email address not exist");
            error.statusCode = 401;
            throw error;
        }
        const passwordgenarate = await bcrypt.compare(password, logindata.password)
        if (!passwordgenarate) {
            const error = new Error("Email is entered incorrect")
            error.statusCode = 401;
            throw error
        }

    } catch (err) {
        if (!err.statusCode) err.statusCode = 500;
        next(err)
    }
}