const jwt = require('jsonwebtoken');
const { GraphQLClient } = require('graphql-request');

const routeToPhoenix = async (data, url, secret) => {
  const token = jwt.sign('sls to phoenix', secret);
  const client = new GraphQLClient(url, {
    headers: { authorization: token }
  });

  const washers = [
    { id: 1, status: data['washer1'] },
    { id: 2, status: data['washer2'] },
    { id: 3, status: data['washer3'] },
    { id: 4, status: data['washer4'] }
  ];

  const mutation = `
    mutation($id: ID!, $in_use: Boolean!) {
      updateWasher(id: $id, in_use: $in_use) {
        id
      }
    }
  `;

  for (const { id, status } of washers) {
    const data = await client.request(mutation, { id, in_use: status === 0 });
    if (!data || !data['updateWasher']) throw Error('error sending data');
  }
};

module.exports = routeToPhoenix;
