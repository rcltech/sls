var express = require('express');
var app = express();

const PORT = 4000;

app.post('/', (req, res, next) => {
  res.send("post request received");
})

app.listen(PORT, () => {
  console.log("SLS EC2 server running on port 4000...");
})
