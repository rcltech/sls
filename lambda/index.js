const axios = require('axios');
const ec2_api_key = require('./.keys/api-key');

exports.handler = async (event) => {
    const data = JSON.parse(event.body);

    // const firebase_url = "https://us-central1-rcsls-2018.cloudfunctions.net/setWasherStatus"
    // const firebase_response = await axios.post(firebase_url, data);

    data.api_key = ec2_api_key;

    const ec2_url = "http://ec2-52-15-92-86.us-east-2.compute.amazonaws.com:4000"
    const ec2_response = await axios.post(ec2_url, data);

    var responseText = "Sent data to Firebase.\n" + ec2_response.data;

    const response = {
        statusCode: 200,
        body: responseText,
    };
    return response;
};
