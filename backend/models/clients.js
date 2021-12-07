const mongoose = require('mongoose');

const ClientSchema = new mongoose.Schema({
    clientId: String,
    firstName: String,
    lastname: String,
    streetAddress: String,
    city: String
});

const model = mongoose.model('clients', ClientSchema);

module.exports = model;
