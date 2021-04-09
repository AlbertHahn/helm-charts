const axios = require('axios');
const express = require('express');
const app = express();

// Constants
const PORT = 7005;
const HOST = '0.0.0.0';

async function makeGetRequest() {

  let res = await axios.get('http://slave.poc-applications.plgrnd.be/');

  let data = res.data;
  console.log(data)

  app.get('', (req, res) => {

    res.send(data);
  });
  
  app.listen(PORT, HOST);
  console.log(`Running on http://${HOST}:${PORT}`);

}

makeGetRequest();




