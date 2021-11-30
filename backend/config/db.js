const mongoose = require('mongoose')
require('dotenv').config()

const { MONGODB_URL } = process.env
function dbConnect() {
    mongoose.connect(MONGODB_URL, { useNewUrlParser: true })
}

module.exports = dbConnect