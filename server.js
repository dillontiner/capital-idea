const express = require('express')
const app = express()
const port = 5000
cors = require("cors");

app.use(cors());

app.use(express.static('public'))

app.get('/', (req, res) => {
  products = [{name: "Lowe's Companies Inc", ticker: 'LOW', image_path: 'lowes_stock_tee.jpg'}]
  res.json(products)
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
