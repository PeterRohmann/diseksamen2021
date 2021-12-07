const mongoose = require('mongoose');

const ReservationSchema = new mongoose.Schema({
    reservationID: String,
    clientID: String,
    date: Date,
    hotelName: String,
    price: Number,
    balance: Number
});

const modelReservation = mongoose.model('reservations', ReservationSchema);

module.exports = modelReservation;
