'use strict';

const express = require('express');

// Constants
const PORT = 7000;
const HOST = '0.0.0.0';

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

// App
const app = express();
app.get('', (req, res) => {
  var n = 'Random number: '
  n += getRandomInt(10).toString();
  res.send(n);
  //res.json('index.ejs')
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);