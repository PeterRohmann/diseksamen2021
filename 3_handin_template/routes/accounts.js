const express = require('express');
const router = express.Router();
const Account = require('../models/account');
const db = require("../2_database/db");
const accountModel = require("../models/account");

//Endpoint for all users
/*router.get('/', async (req, res) => {
    try {
        // 1. return accounts from database instead
        res.end("This is the GET endpoint on accounts")
    } catch (err) {
        console.log({message: err})
    };
});
*/

// Creating client
router.post('/', async (req, res) => {
    db.getConnection().then(async res => {
        // if a connection was successfully achieved
        // find and execute are two functions, that called in succession will first describe how to find elements, and then execute the query
        //let accounts = await accountModel.find().exec();
        //console.log(accounts);
       let create = await accountModel.create({
        clientId: req.body.clientId,
        firstName : req.body.firstName,
        lastname : req.body.lastname,
        streetAddress : req.body.streetAddress,
        city : req.body.city  
       })
       console.log(create)
    
        // exit system
       // process.exit(1)
    }, err => {
        console.log("ERROR");
        console.log(err);
    });
});

// Updating client
router.put('/', async (req, res) => {
    db.getConnection().then(async res => {
        // if a connection was successfully achieved
        // find and execute are two functions, that called in succession will first describe how to find elements, and then execute the query
        //let accounts = await accountModel.find().exec();
        //console.log(accounts);
       let update = await accountModel.updateOne({clientId: req.body.clientId},{
        firstName : req.body.firstName,
        lastname : req.body.lastname,
        streetAddress : req.body.streetAddress,
        city : req.body.city  
       })
       console.log("Client with id: " + req.body.clientId + " has been updated")
    
        // exit system
      // process.exit(1)
    }, err => {
        console.log("ERROR");
        console.log(err);
    });
});

router.delete('/', async (req, res) => {
    db.getConnection().then(async res => {
        // if a connection was successfully achieved
        // find and execute are two functions, that called in succession will first describe how to find elements, and then execute the query
        //let accounts = await accountModel.find().exec();
        //console.log(accounts);
       let deleteClient = await accountModel.deleteOne({clientId: req.body.userdata.clientId})
       console.log("Client with id: " + req.body.userdata.clientId + " has been deleted")
       console.log(req.body.userdata.clientId)
    
        // exit system
      // process.exit(1)
    }, err => {
        console.log("ERROR");
        console.log(err);
    });
});

db.getConnection().then(async res => {
router.get('/', async (req, res) => {
    
    
        // if a connection was successfully achieved
        // find and execute are two functions, that called in succession will first describe how to find elements, and then execute the query
       let getclient = await accountModel.find({clientId: req.query.clientId})
    
   console.log(getclient)
   res.send(getclient)
    
        // exit system
      // process.exit(1)
    }, err => {
        console.log("ERROR");
        console.log(err);
    });
   
   
});

// Implement a new endpoint, that will be able to return a specific account by id. 
// instead of just printing, return the actual account. 


module.exports = router;