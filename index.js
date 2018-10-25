const fs = require('fs');
const crypto = require('crypto');
const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.json());

let server = require('http').Server(app);

const MAILCHIMP_API_KEY = process.env.MAILCHIMP_API_KEY;
const VERIFF_API_SECRET = process.env.VERIFF_API_SECRET;
const VERIFF_WEBHOOK_PORT = process.env.PORT;

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

function addEmailToList(listId, firstName, lastName, email, tags) {
    // *********************************************
    // add a new member to the list
    var add_new_member = {
        method: 'post',
        path: `/lists/${listId}/members`,
        body: {
            email_address: email,
            FNAME: '',
            LNAME: '',
            PADDRESS: '',
            BTYPE: 'Ethereum',
            status: 'subscribed',
            tags: tags,
            location: {
                country_code: ''
            }
        }
    }

    mailchimp.request(add_new_member, callback)
}

// {"email_address": "test2@muyser.com", "status": "subscribed"}

app.post('/verification/', (req, res) => {
    console.log('Received a webhook');

    const signature = req.get('x-signature');
    const secret = VERIFF_API_SECRET;
    const payload = req.body;

    const isValid = isSignatureValid({ signature, secret, payload })

    console.log('Validated signature:', isValid);

    if (isValid) {
        console.log('Payload', JSON.stringify(payload, null, 4));

        const listId = 'b2c67f22d5';

        mailchimp.request({
            method: 'post',
            path: `/lists/${listId}/members`,
            body: {
                email_address: payload.verification.additionalData.email,
                FNAME: payload.verification.person.firstName,
                LNAME: payload.verification.person.lastName,
                PADDRESS: payload.verification.additionalData.eth,
                PIDENTITY: payload.verification.additionalData.identity,
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

    res.json({ status: 'failure' });

    process.exit();
})

server.listen(VERIFF_WEBHOOK_PORT);