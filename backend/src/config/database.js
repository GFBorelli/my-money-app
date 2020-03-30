const mongoose = require('mongoose')

module.exports = mongoose.connect('mongodb://localhost/moneymanager', { useUnifiedTopology: true, useNewUrlParser: true })