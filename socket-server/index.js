const express = require('express');
const app = express();
const port = 3000;

app.use(function (req, res, next) {

  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
  res.setHeader('Access-Control-Allow-Credentials', true);

  next();
});

// Send Notification API
app.post('/send-notification', (req, res) => {
    const notify = {data: req.body};
    socket.emit('notification', notify); // Updates Live Notification
    res.send(notify);
});

const server = app.listen(port, () => {
  console.log(`Server connection on  http://localhost:${port}`);  // Server Connnected
});
// Socket Layer over Http Server
const socket = require('socket.io')(server);
// On every Client Connection
socket.on('connection', socket => {
    console.log('Socket: client connected');
});