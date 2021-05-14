const express = require('express')
const app = express()
const port = 5000

app.get('/', (req, res) => {
  products = [{name: 'Designer Brands Inc', ticker: 'DBI', image_path: 'TODO'}]
  res.json(products)
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
