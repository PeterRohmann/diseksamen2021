const express = require('express');
const router = express.Router();
const db = require("../database/db");
const accountModel = require("../models/clients");
const reservationModel = require("../models/reservations");


// Creating client
db.getConnection().then(async res => {
router.post('/', async (req, res) => {

       let create = await accountModel.create({
        clientId: req.body.body.clientId,
        firstName : req.body.body.firstName,
        lastname : req.body.body.lastname,
        streetAddress : req.body.body.streetAddress,
        city : req.body.body.city  
       })
       console.log("The following client was posted to the database: " + create)
       res.send(create)
    }, err => {
        console.log("ERROR");
        console.log(err);
    });
});

// Updating client
db.getConnection().then(async res => {
router.put('/', async (req, res) => {
   
       let update = await accountModel.updateOne({clientId: req.body.body.clientId},{
        firstName : req.body.body.firstName,
        lastname : req.body.body.lastname,
        streetAddress : req.body.body.streetAddress,
        city : req.body.body.city  
       })
       
       let client = await accountModel.find({clientId: req.body.body.clientId})
       console.log("The following client was updated in the database: " + client)
       res.send(update)

    }, err => {
        console.log("ERROR");
        console.log(err);
    });
});

// Delete client
db.getConnection().then(async res => {
router.delete('/', async (req, res) => {

       let deleteClient = await accountModel.deleteOne({clientId: req.body.body.userdata.clientId})
       console.log("Client with id: " + req.body.body.userdata.clientId + " has been deleted")
       
       res.send(deleteClient)
   
    }, err => {
        console.log("ERROR");
        console.log(err);
    });
});

// get client
db.getConnection().then(async res => {
router.get('/', async (req, res) => {
    
    
     
       let getclient = await accountModel.find({clientId: req.query.clientId})
    
   console.log("The following client was found in the database: " + getclient)
   res.send(getclient)
    

    }, err => {
        console.log("ERROR");
        console.log(err);
    });
   
   
});

// Creating reservation
db.getConnection().then(async res => {
router.post('/reservations', async (req, res) => {
    
        let client = await accountModel.find({clientId: req.body.body.clientID}).exec();
        if(client.length !== 0){
       let createreservation = await reservationModel.create({
        reservationID : req.body.body.reservationID,
        clientID : req.body.body.clientID,
        date : req.body.body.date,
        hotelName : req.body.body.hotelName,
        price : req.body.body.price,
        balance : req.body.body.balance
       })
       console.log("The following reservation was posted to the database: " + createreservation)
       res.send(client)
    }
    if(client.length == 0){
        res.send("Client does not exist")
        console.log("Client does not exist")
    }

    }, err => {
        console.log("ERROR");
        console.log(err);
    });
});

// Update reservation
db.getConnection().then(async res => {
router.put('/reservations', async (req, res) => {
  
       let updatereservation = await reservationModel.updateOne({reservationID: req.body.body.reservationID},{
        clientID : req.body.body.clientID,
        date : req.body.body.date,
        hotelName : req.body.body.hotelName,
        price : req.body.body.price,
        balance : req.body.body.balance
       })
       let reservation = await reservationModel.find({reservationID: req.body.body.reservationID})
       console.log("The following reservation has been updated in the database: " + reservation)
       res.send(updatereservation)

    }, err => {
        console.log("ERROR");
        console.log(err);
    });
});

// Delete reservation
db.getConnection().then(async res => {
    router.delete('/reservations', async (req, res) => {
    
        
           let deleteReservation = await reservationModel.deleteOne({reservationID: req.body.body.userdata.reservationID})
           console.log("Reservation with id: " + req.body.body.userdata.reservationID + " has been deleted")
           res.send(deleteReservation)
        
   
        }, err => {
            console.log("ERROR");
            console.log(err);
        });
    });

// Get a reservation
db.getConnection().then(async res => {
    router.get('/reservations', async (req, res) => {
        
           let getreservation = await reservationModel.find({reservationID: req.query.reservationID})
        
       console.log("The following reservation was found in the database: " + getreservation)
       res.send(getreservation)
        

        }, err => {
            console.log("ERROR");
            console.log(err);
        });
       
       
    });

module.exports = router;