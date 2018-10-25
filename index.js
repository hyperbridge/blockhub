const fs = require('fs');
const crypto = require('crypto');
const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.json());

let server = require('http').Server(app);

const API_SECRET = process.env.API_SECRET;
const WEBHOOK_PORT = process.env.WEBHOOK_PORT;

function isSignatureValid(data) {
    const { signature, secret } = data;
    let { payload } = data;

    if (data.payload.constructor === Object) {
        payload = JSON.stringify(data.payload);
    }
    if (payload.constructor !== Buffer) {
        payload = new Buffer(payload, 'utf8');
    }
    const hash = crypto.createHash('sha256');
    hash.update(payload);
    hash.update(new Buffer(secret));
    const digest = hash.digest('hex');
    return digest === signature.toLowerCase();
}

app.post('/verification/', (req, res) => {
    console.log('Received a webhook');

    const signature = req.get('x-signature');
    const secret = API_SECRET;
    const payload = req.body;

    const isValid = isSignatureValid({ signature, secret, payload })

    console.log('Validated signature:', isValid);

    if (isValid) {
        // Send email
        console.log('Payload', JSON.stringify(payload, null, 4));

        res.json({ status: 'success' });
    }

    res.json({ status: 'failure' });

    process.exit();
})

server.listen(WEBHOOK_PORT);