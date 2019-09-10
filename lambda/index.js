const axios = require('axios');
const jwt = require('jsonwebtoken');
const env = require('dotenv');
env.config();

exports.handler = async (event) => {
    const data = JSON.parse(event.body);

    const firebase_url = "https://us-central1-rcsls-2018.cloudfunctions.net/setWasherStatus"
    const firebase_response = await axios.post(firebase_url, data);

    const token = await jwt.sign(data, process.env.EC2_PRIVATE_KEY, {algorithm: 'HS256'});
    const ec2_url = "http://ec2-52-15-92-86.us-east-2.compute.amazonaws.com:4000";
    const ec2_response = await axios.post(ec2_url, {token: token});

    var responseText = "Sent data to Firebase.\n" + ec2_response.data;

    const response = {
        statusCode: 200,
        body: responseText,
    };
    return response;
};
