const mongoose = require('mongoose');


class Database {
    constructor() {
        this._connect()
    }
    _connect() {
        mongoose.connect(process.env.DB_URL)
            .then(() => {
                console.log("db connection successfull");
            })
            .catch(err => {
                console.error('db connection error');
            })
    }
}

module.exports = new Database()

