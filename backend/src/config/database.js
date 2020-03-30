const mongoose = require('mongoose')

module.exports = mongoose.connect('mongodb://localhost/moneymanager', { useUnifiedTopology: true, useNewUrlParser: true })

mongoose.Error.messages.general.required = "O atributo '{PATH}' é obrigatório."