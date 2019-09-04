var express = require('express');
var app = express();
var bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: false }))

const PORT = 4000;
const api_key = require('./.keys/api-key.js')

app.post('/', (req, res, next) => {
  console.log(req.body);
  if (req.body.api_key === api_key) {
    res.send("post request received, api key verified");
    next();
  }
  res.send("unsuccessful connection");
})

app.listen(PORT, () => {
  console.log("SLS EC2 server running on port 4000...");
})
