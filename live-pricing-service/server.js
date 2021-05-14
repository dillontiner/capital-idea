const express = require('express')
const http = require('http');
const cors = require("cors");
const { Server } = require("socket.io");
const port = 4000
const app = express()
app.use(cors());

const server = http.createServer(app);

const io = new Server(server, {
  cors: {
    origin: "http://127.0.0.1:" + port,
  }
});

io.on('connection', (socket) => {
  var pricing = {LOW: 0, GOOG: 0};
  setInterval(() => {
    socket.emit('pricing', pricing);
    Object.keys(pricing).forEach((key) => {
      pricing[key]++;
    });
  }, 1000);
});

server.listen(port, () => {
  console.log(`Live pricing service listening at http://localhost:${port}`);
});
