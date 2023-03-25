const mongoose = require('mongoose')

function connect() {
    try {
        mongoose.set('strictQuery', false)
        mongoose.connect('mongodb://127.0.0.1:27017/daiki_education_dev')
        console.log('Connected!')
    } catch (error) {
        console.log(error)
    }
}

module.exports = { connect };
