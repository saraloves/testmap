var express = require("express");
var app = express();

app.use('/', express.static('public/', __dirname));

app.get('/', function(req, res) {
  res.send(index.html);
});

var port = process.env.PORT || 80;
app.listen(port, function() {
  console.log("Listening on " + port);
});
