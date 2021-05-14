const express = require('express')
const app = express()
const http = require('http');
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server);
const port = 5000
const cors = require("cors");

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
  console.log('a user connected');
});

server.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
