const express = require('express');
const app = express();
const bodyParser = require('body-parser')
const fs = require('fs')
const request = require('request')
const https = require('https')
var http = require('http')
, httpProxy = require('http-proxy')
, seaport = require('seaport')
//Here we register a service with seaport. 
, ports = seaport.connect('localhost', 9090);


const serverB = require('./serverB.js')
const serverC = require('./serverC.js')

const servers = ['https://localhost:3000', 'https://localhost:3001' ];

process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0" // Avoids DEPTH_ZERO_SELF_SIGNED_CERT error for self-signed certs
const options = {
    key: fs.readFileSync('./ssl/client-key.pem'),
    cert: fs.readFileSync('./ssl/client-cert.pem'),
}

let cur = 0;

const handler = (req, res) => {
    // Pipe the vanilla node HTTP request (a readable stream) into `request`
    // to the next server URL. Then, since `res` implements the writable stream
    // interface, you can just `pipe()` into `res`.
    req.pipe(request({ url: servers[cur] + req.url })).pipe(res);
    cur = (cur + 1) % servers.length;
  };



//Added Json Body-parser
app.use(bodyParser.json());

//Import Routes
const accountRoute = require('./routes/accounts');
app.use('/clients', accountRoute)

//Initial route
/*
app.get('/', (req, res) => {
    res.send('Welcome to the banking app fra loadbalancer');
});
*/


//const server = app.get('*', handler).post('*', handler);
app.get('*', handler).post('*', handler);
//server.listen(5000);

const sslServer = https.createServer(options, app)
//Start listening

sslServer.listen(8080, () => {
    console.log('Server listening on 8080');
});

