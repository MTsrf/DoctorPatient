const express = require('express')
const dotenv = require('dotenv').config()
const app = express()
const db = require('./config/dbConnection')
const { readdirSync } = require('fs')
const { ErrorHandler } = require('./middleware/ErrorHandler')

app.use(express.json())




readdirSync('./routes').map((item) => app.use("/", require("./routes/" + item)))

app.use(ErrorHandler)

PORT = process.env.PORT || 5000
app.listen(PORT, (err, res) => {
    if (err) {
        console.log("server runing is failed")
    } else {
        console.log(`${PORT} server is runing`)
    }
})