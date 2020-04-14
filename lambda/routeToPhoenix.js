const jwt = require('jsonwebtoken');
const { request } = require('graphql-request');

const routeToPhoenix = async (data, url) => {
  const token = await jwt.sign('sls to phoenix', process.env.PHOENIX_SECRET);

  const washers = [
    data['washer1'],
    data['washer2'],
    data['washer3'],
    data['washer4']
  ];

  const mutation = `
    mutation($id: ID!, $in_use: Boolean!) {
      updateWasher(id: $id, in_use: $in_use) {
        id
      }
    }
  `;

  washers.forEach((washer, index) =>
    request(url, mutation, {
      id: (index + 1).toString(),
      in_use: washer === 0 // 0 means unavailable, 1 means available
    }).then(() =>
      console.log(
        'washer ' +
          (index + 1).toString() +
          ' is now ' +
          (washer === 1).toString()
      )
    )
  );
};

module.exports = routeToPhoenix;
