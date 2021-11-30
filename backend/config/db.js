const mongoose = require('mongoose')
require('dotenv').config()

const { MONGO_URL } = process.env
function dbConnect() {
    mongoose.connect(MONGO_URL, { useNewUrlParser: true })
}

module.exports = dbConnect