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

const insertDocuments = (db, data, callback) => {
  const collection = db.collection('washerData');
  collection.insertOne(
    {
      dateTime: new Date(),
      status: data,
    }, (err, result) => {
      assert.equal(err, null);
      assert.equal(1, result.result.n);
      assert.equal(1, result.ops.length);
      console.log("Inserted 1 washerData document into the collection");
      callback(result);
    }
  )
}

const sendToMongoDatabase = (data) => {
  MongoClient.connect(mongodbUrl, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }, (err, client) => {
    assert.equal(null, err);
    console.log("Connected successfully to mongodb server");

    const db = client.db(dbName);

    insertDocuments(db, data, () => {
      client.close();
    })
  })
}

app.post('/', (req, res, next) => {
  console.log(req.body);
  if (req.body.api_key === api_key) {
    req.body.api_key = null;
    res.status(200).send("EC2 post request received, api key verified");
    sendToMongoDatabase(req.body);
    return;
  }
  res.status(206).send("EC2 unauthorized access");
})

app.listen(PORT, () => {
  console.log("SLS EC2 server running on port 4000...");
})
