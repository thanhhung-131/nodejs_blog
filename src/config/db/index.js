const mongoose = require('mongoose');

async function connect() {
    try {
        mongoose.connect('mongodb://127.0.0.1:27017/daiki_education_dev')
  .then(() => console.log('Connected!'));
    } catch (error) {
        console.log('Failed to connect!')
    }
}

module.exports = { connect };
