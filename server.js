const express = require('express');
const reload = require('reload')
// const properties = require('./properties');
const webSocketController = require('./server/controllers/webSocketController');

const http = require('http');
const app = express();
const port = process.env.PORT || 5000;
const server = http.createServer(app);

const path = require('path');

const io = require('socket.io')(server);
io.origins('*:*') // for latest version

app.use('/static', express.static(path.join(__dirname, '/server/client/build/static')))
app.use('/public', express.static(path.join(__dirname, '/node_modules')))


app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname + '/server/client/build/index.html'));//main index file
  
});



webSocketController(app, io);
reload(app);




server.listen(port, () => console.log(`Listening on port ${port}`));