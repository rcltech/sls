const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const jwt = require('jsonwebtoken');
const assert = require('assert');
const env = require('dotenv');
env.config();

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

const PORT = process.env.PORT;
const private_key = process.env.EC2_PRIVATE_KEY;

const MongoClient = require('mongodb').MongoClient;
const mongodbUrl = process.env.MONGO_URL;
const dbName = 'sls-data';

const insertDocuments = (db, data, callback) => {
  const collection = db.collection('washerData');
  collection.insertOne(
    {
      dateTime: new Date(),
      status: data,
    }, (err, res) => {
      assert.equal(err, null);
      assert.equal(1, res.result.n);
      assert.equal(1, res.ops.length);
      console.log("Inserted 1 washerData document into the collection");
      callback(res);
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
  try {
    var decoded = jwt.verify(req.body.token, private_key, {algorithms:["HS256"]});
    console.log(decoded);
    res.status(200).send("EC2 post request received, api key verified");
    // sendToMongoDatabase(req.body);
    return;
  } catch (err) {
    console.error(err);
    res.status(206).send("EC2 unauthorized access");
  }
})

app.listen(PORT, () => {
  console.log("SLS EC2 server running on port 4000...");
})
