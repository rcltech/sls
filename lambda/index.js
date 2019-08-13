const axios = require('axios');

exports.handler = async (event, context, callback) => {
    // TODO implement
    const firebase_url = "https://us-central1-rcsls-2018.cloudfunctions.net/setWasherStatus"
    
    const firebase_response = await axios.post(firebase_url, event.body);
    
    const response = {
        statusCode: 200,
        body: JSON.stringify(firebase_response),
    };
    return response;
};

