const express = require('express');
const reload = require('reload')
const properties = require('../properties');
const webSocketController = require('./controllers/webSocketController');

const http = require('http');
const app = express();
const port = process.env.PORT || 5000;
const server = http.createServer(app);

const path = require('path');

const io = require('socket.io')(server);
io.origins('*:*') // for latest version


app.get('/api/hello', (req, res) => {
  res.send({ express: 'Hello From Express peeps there!' });
});

webSocketController(app, io);
reload(app);

//https://medium.freecodecamp.org/how-to-make-create-react-app-work-with-a-node-backend-api-7c5c48acb1b0
if (process.env.NODE_ENV === 'production') {
  // Serve any static files
  app.use(express.static(path.join(__dirname, 'client/build')));
  // Handle React routing, return all requests to React app
  app.get('*', function(req, res) {
    res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
  });
}


server.listen(port, () => console.log(`Listening on port ${port}`));