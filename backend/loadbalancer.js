const express = require('express');
const bodyParser = require('body-parser')
const fs = require('fs')
const https = require('https')
const got = require('got');
const app = express();

const serversimport = require('./servers.js')

const servers = ['https://localhost:3000', 'https://localhost:3001','https://localhost:3002', 'https://localhost:3003', 'https://localhost:3004'];

process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0" // Avoids DEPTH_ZERO_SELF_SIGNED_CERT error for self-signed certs
const options = {
    key: fs.readFileSync('./ssl/client-key.pem'),
    cert: fs.readFileSync('./ssl/client-cert.pem'),
}

let cur = 0;

const loadbalancer = async (req, res) => {
    console.log("That was a " + req.method + " request!")
    console.log("Sent to endpoint: " + servers[cur] + req.url)

    if(req.method == "GET"){
        const response = await got(servers[cur] + req.url);
        res.send(response.body)}

    if(req.method == "POST"){
    const {body} = await got.post(servers[cur] + req.url, {
		json: { body: req.body },
		responseType: 'json'})}

    if(req.method == "PUT"){
        const {body} = await got.put(servers[cur] + req.url, {
            json: { body: req.body },
            responseType: 'json' })}
    
    if(req.method == "DELETE"){
        const {body} = await got.delete(servers[cur] + req.url, {
            json: { body: req.body },
            responseType: 'json' })}
   
    cur = (cur + 1) % servers.length };

app.use(bodyParser.json());

app.get('*', loadbalancer)
app.post('*', loadbalancer);
app.put('*', loadbalancer);
app.delete('*', loadbalancer);

const sslServer = https.createServer(options, app)

sslServer.listen(8080, () => {
    console.log('Loadbalancer listening on 8080');
});

