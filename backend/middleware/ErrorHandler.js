exports.ErrorHandler = (err, req, res, next) => {
    console.log("middle ware error")
    const errStatus = err.statusCode || 500;
    const errMsg = err.message || 'Something went Wrong'
    res.status(errStatus).json({
        success: false,
        message: errMsg
    })
}
