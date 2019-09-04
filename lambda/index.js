const axios = require('axios');

exports.handler = async (event) => {
    const firebase_url = "https://us-central1-rcsls-2018.cloudfunctions.net/setWasherStatus"
    const firebase_response = await axios.post(firebase_url, JSON.parse(event.body));
    const response = {
        statusCode: 200,
        body: "Sent data to Firebase",
    };
    return response;
};
