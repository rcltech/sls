const axios = require('axios');
const ec2_api_key = require('./.keys/api-key');

exports.handler = async (event) => {
    const firebase_url = "https://us-central1-rcsls-2018.cloudfunctions.net/setWasherStatus"
    const firebase_response = await axios.post(firebase_url, JSON.parse(event.body));

    event.body.api_key = ec2_api_key;

    const ec2_url = "http://ec2-3-17-13-87.us-east-2.compute.amazonaws.com:4000"
    const ec2_resp.onse = axios.post(ec2_url, event.body);

    const response = {
        statusCode: 200,
        body: "Sent data to Firebase",
    };
    return response;
};
