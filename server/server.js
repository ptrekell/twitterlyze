const express = require('express');
const reload = require('reload')
const properties = require('../properties');
const webSocketController = require('./controllers/webSocketController');

const http = require('http');
const app = express();
const port = process.env.PORT || 5000;
const server = http.createServer(app);

const io = require('socket.io').listen(server);


app.get('/api/hello', (req, res) => {
  res.send({ express: 'Hello From Express peeps there!' });
});

webSocketController(app, io);
reload(app);
server.listen(port, () => console.log(`Listening on port ${port}`));