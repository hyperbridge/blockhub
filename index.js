var fs = require('fs');
var crypto = require('crypto');
var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var Mailchimp = require('mailchimp-api-v3');

var MAILCHIMP_API_KEY = process.env.MAILCHIMP_API_KEY;
var VERIFF_API_SECRET = process.env.VERIFF_API_SECRET;
var VERIFF_WEBHOOK_PORT = process.env.PORT;

app.use(bodyParser.json());

var server = require('http').Server(app);

var mailchimp = new Mailchimp(MAILCHIMP_API_KEY);

function isSignatureValid(data) {
    var signature = data.signature;
    var secret = data.secret;
    var payload = data.payload;

    if (data.payload.constructor === Object) {
        payload = JSON.stringify(data.payload);
    }
    if (payload.constructor !== Buffer) {
        payload = new Buffer(payload, 'utf8');
    }
    var hash = crypto.createHash('sha256');
    hash.update(payload);
    hash.update(new Buffer(secret));
    var digest = hash.digest('hex');
    return digest === signature.toLowerCase();
}

// {"email_address": "test2@muyser.com", "status": "subscribed"}

app.post('/verification/', function (req, res) {
    console.log('Received a webhook');

    var signature = req.get('x-signature');
    var secret = VERIFF_API_SECRET;
    var payload = req.body;

    var isValid = isSignatureValid({ signature: signature, secret: secret, payload: payload })

    console.log('Validated signature:', isValid);

    if (isValid) {
        console.log('Payload', JSON.stringify(payload, null, 4));

        var listId = '3b2ec4d052';

        var vendorData = JSON.decode(payload.verification.vendorData)

        mailchimp.request({
            method: 'post',
            path: `/lists/${listId}/members`,
            body: {
                email_address: vendorData.email,
                FNAME: payload.verification.person.firstName,
                LNAME: payload.verification.person.lastName,
                PADDRESS: vendorData.eth,
                BTYPE: 'Ethereum',
                status: 'subscribed',
                tags: ['veriff', payload.verification.status],
                location: {
                    country_code: payload.verification.document.country
                }
            }
        }, function() {
            console.log("Successfully subscribed");
        });

        res.json({ status: 'success' });
    }
    else {
        res.json({ status: 'failure' });
    }

    process.exit();
})

server.listen(VERIFF_WEBHOOK_PORT);