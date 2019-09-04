var express = require('express');
var app = express();
var bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: false }))

const PORT = 4000;

app.post('/', (req, res, next) => {
  console.log(req.body);
  res.send("post request received");
})

app.listen(PORT, () => {
  console.log("SLS EC2 server running on port 4000...");
})
