const express = require('express')
const app = express()
const port = 5000
const cors = require("cors");

app.use(cors());

app.use(express.static('public'))

app.get('/products', (req, res) => {
  products = [
    {name: "Lowe's Companies Inc", ticker: 'LOW', image_path: 'lowes_stock_tee.jpg'},
    {name: "Alphabet Inc Class C", ticker: 'GOOG', image_path: 'google_stock_tee.jpg'}
  ]
  res.json(products)
})

app.listen(port, () => {
  console.log(`Product service listening at http://localhost:${port}`)
})