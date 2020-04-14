const env = require('dotenv');
const express = require('express');
const bodyParser = require('body-parser');
const routeToPhoenix = require('./routeToPhoenix');
const app = express();

env.config();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const PORT = 4400;

app.post('/', async (req, res) => {
  const testUrl = 'http://localhost:4000/graphql'; // phoenix development server

  const { data } = req.body;
  // data = { washer1: 0, washer2: 0, washer3: 0, washer4: 0}

  await routeToPhoenix(data, testUrl);
  return res.status(200).send('successful');
});

app.listen(PORT, () =>
  console.log('sls lambda test server is running on port ' + PORT)
);
