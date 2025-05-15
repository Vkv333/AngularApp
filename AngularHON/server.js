// server.js
const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 8080;

app.use(express.static(__dirname + '/dist/angular-hon'));

app.get('/*', function(req, res) {
  res.sendFile(path.join(__dirname + '/dist/angular-hon/index.html'));
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
