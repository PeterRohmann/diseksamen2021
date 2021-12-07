const express = require('express');
const app = express();
const bodyParser = require('body-parser')
const fs = require('fs')
const https = require('https')


const options = {
    key: fs.readFileSync('./ssl/client-key.pem'),
    cert: fs.readFileSync('./ssl/client-cert.pem'),
}

app.use(bodyParser.json());

const accountRoute = require('./routes/routes');
app.use('/clients', accountRoute)

const sslServer1 = https.createServer(options, app)
const sslServer2 = https.createServer(options, app)
const sslServer3 = https.createServer(options, app)
const sslServer4 = https.createServer(options, app)
const sslServer5 = https.createServer(options, app)

sslServer1.listen(3000, () => {
    console.log('Server 1 listening on 3000');
});
sslServer2.listen(3001, () => {
    console.log('Server 2 listening on 3001');
});
sslServer3.listen(3002, () => {
    console.log('Server 3 listening on 3002');
});
sslServer4.listen(3003, () => {
    console.log('Server 4 listening on 3003');
});
sslServer5.listen(3004, () => {
    console.log('Server 5 listening on 3004');
});



