const env = require('dotenv');
const routeToPhoenix = require('./routeToPhoenix');
env.config();

exports.handler = async (event) => {
  const url = 'https://phoenix.rctech.club/graphql';
  const data = JSON.parse(event.body);
  // data = { washer1: 0, washer2: 0, washer3: 0, washer4: 0}

  try {
    await routeToPhoenix(data, url);
  } catch (e) {
    console.log(e);
    return {
      statusCode: 500,
      body: 'Internal server error in lambda'
    };
  }

  return {
    statusCode: 200,
    body: 'Successfully sent to Phoenix'
  };
};
