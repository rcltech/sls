const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const jwt = require('jsonwebtoken');
const assert = require('assert');
const cloneDeep = require('lodash.clonedeep');
const env = require('dotenv');
env.config();

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

const PORT = process.env.PORT;
const private_key = process.env.EC2_PRIVATE_KEY;

const MongoClient = require('mongodb').MongoClient;
const mongodbUrl = process.env.MONGO_URL;
const dbName = 'sls-data';

const insertDocuments = async (db, data) => {
  const collection = db.collection('washerData');
  await collection.insertOne(
    {
      dateTime: new Date(),
      status: data,
    }, (err, res) => {
      assert.equal(err, null);
      assert.equal(1, res.result.n);
      assert.equal(1, res.ops.length);
      console.log("Inserted 1 washerData document into the collection");
    }
  )
}

const getDocuments = async (db, data) => {
  const collection = db.collection('washerData');
  const size = parseInt(data.size, 10);
  const results = await collection.find({}, {limit: 100}).toArray();
  const downsizedResults = results.length > size ? results.slice(-1 * size) : results;
  return downsizedResults;
}

const sendToMongoDatabase = (data, callback) => {
  try {
    const client = new MongoClient(mongodbUrl,
      {
        useNewUrlParser: true,
        useUnifiedTopology: true
      }
    );
    console.log("Connected successfully to mongodb server");
    const db = client.db(dbName);
    return callback(db, data);
  } catch (error) {
    console.error(error);
  }
}

app.post('/', (req, res, next) => {
  try {
    const decoded = jwt.verify(req.body.token, private_key, {algorithms:["HS256"]});
    res.status(200).send("EC2 post request received.");
    sendToMongoDatabase(decoded, insertDocuments);
  } catch (err) {
    console.error(err);
    res.status(206).send("EC2 unauthorized access.");
  }
})

app.get('/', async (req, res, next) => {
  try {
    const size = req.body.size || 100;
    const data = await sendToMongoDatabase({size}, getDocuments);
    if (data && data.length === 0) {
      return res.status(500).send("No data found.")
    }
    res.status(200).json({ data });
  } catch (err) {
    console.error(err);
    res.status(500).send("EC2 internal error.")
  }
})

app.listen(PORT, () => {
  console.log("SLS EC2 server running on port " + PORT);
})
