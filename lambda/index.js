const env = require('dotenv');
const routeToPhoenix = require('./routeToPhoenix');
env.config();

exports.handler = async (event) => {
  const url = 'https://phoenix.rctech.club/graphql';
  const secret = process.env.PHOENIX_SECRET;

  // data = { washer1: 0, washer2: 0, washer3: 0, washer4: 0}
  const data = JSON.parse(event.body);
  console.log(data);

  try {
    await routeToPhoenix(data, url, secret);
  } catch (e) {
    console.log(e);
    return {
      statusCode: 500,
      body: 'Internal server error'
    };
  }

  return {
    statusCode: 200,
    body: 'Successfully sent to Phoenix'
  };
};
