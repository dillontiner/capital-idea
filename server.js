const express = require('express')
const http = require('http');
const cors = require("cors");
const { Server } = require("socket.io");

const app = express()
const port = 5000
const server = http.createServer(app);

const io = new Server(server, {
  cors: {
    origin: "http://127.0.0.1:" + port,
  }
});

app.use(cors());

app.use(express.static('public'));

app.get('/products', (req, res) => {
  products = [
    {name: "Lowe's Companies Inc", ticker: 'LOW', image_path: 'lowes_stock_tee.jpg'},
    {name: "Alphabet Inc Class C", ticker: 'GOOG', image_path: 'google_stock_tee.jpg'}
  ];
  res.json(products);
});

io.on('connection', (socket) => {
  var count = 0;
  setInterval(() => {
    socket.emit('pricing', count);
    count++;
  }, 1000);
});

server.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
