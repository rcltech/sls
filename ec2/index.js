var express = require('express');
var app = express();
var bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

const PORT = 4000;
const api_key = require('./.keys/api-key.js')

const MongoClient = require('mongodb').MongoClient;
const mongodbUrl = 'mongodb://localhost:27017';
const assert = require('assert');
const dbName = 'sls-data';

MongoClient.connect(mongodbUrl, function(err, client) {
  assert.equal(null, err);
  console.log("Connected successfully to mongo server");

  const db = client.db(dbName);

  client.close();
});

app.post('/', (req, res, next) => {
  console.log(req.body);
  if (req.body.api_key === api_key) {
    res.status(200).send("EC2 post request received, api key verified");
    return;
  }
  res.status(206).send("EC2 unauthorized access");
})

app.listen(PORT, () => {
  console.log("SLS EC2 server running on port 4000...");
})
