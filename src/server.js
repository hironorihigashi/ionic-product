//へろくにアップするために利用。　参照はここ　https://codemeals.com/angular-tutorials/deploy-angular-7-app-to-heroku/

const express = require('express');
const path = require('path');
const app = express();

// Serve static files....
app.use(express.static(__dirname + "/dist/'TS20'"));

// Send all requests to index.html
app.get('/*', function(req, res) {
  res.sendFile(path.join(__dirname + "/dist/'TS20'/index.html"));
});

// default Heroku PORT
app.listen(process.env.PORT || 3000);
