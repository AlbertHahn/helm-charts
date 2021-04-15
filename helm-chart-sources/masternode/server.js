var express = require('express');
var app = express();
var expressWs = require('express-ws')(app);
var aWss = expressWs.getWss('/');
require('dotenv').config({ path: './process.env' })

const port = process.env.PORT;
//const hostname = process.env.HOSTNAME;

app.use(express.static('public'))
app.use('/css', express.static(__dirname + 'public/css'))
app.use('/img', express.static(__dirname + 'public/img'))
app.use('/img', express.static(__dirname + 'public/js'))

app.set('views', './views')
app.set('view engine', 'ejs')
 
app.use(function (req, res, next) {
  console.log('middleware');
  req.testing = 'testing';
  return next();
});
 
app.get('/', function(req, res, next){
  console.log('get route', req.testing);
  //res.render('index.ejs', {HOSTNAME:hostname, PORT:port})
  res.render('index.ejs', { PORT:port})
});
 
app.ws('/', function(ws, req) {
    console.log('Socket Connected');
  
    ws.onmessage = function(msg) {
      console.log(msg.data);
      aWss.clients.forEach(function (client) {
        client.send(msg.data);
      });
    };
  });

app.listen(port);
console.log("Server running on port: " + port);
