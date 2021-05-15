const express = require('express')
const app = express()
const port = 5000
const cors = require("cors");
const bodyParser = require('body-parser');

app.use(cors());
app.use(bodyParser.json());

app.use(express.static('public'))

app.get('/products', (req, res) => {
  products = [
    {name: "Lowe's Companies Inc", ticker: 'LOW', image_path: 'lowes_stock_tee.jpg'},
    {name: "Alphabet Inc Class C", ticker: 'GOOG', image_path: 'google_stock_tee.jpg'}
  ]
  res.json(products)
})

const stripe = require('stripe')('sk_test_51IbGTDIL6q5pLIOCsCpolhmChNK53k1UWQ2sX8f0Uq0RwxsKevLgr09lbNCYcBlba2bN4sI8fG3HDxuoyvTeqnff00E5dAx3zs')

app.post('/create-checkout-session', async (req, res) => {
  const session = await stripe.checkout.sessions.create({
    payment_method_types: ['card'],
    line_items: [
      {
        price_data: {
          currency: 'usd',
          product_data: {
            name: req.body['item'],
          },
          unit_amount: 2000,
        },
        quantity: 1,
      },
    ],
    mode: 'payment',
    success_url: 'https://example.com/success',
    cancel_url: 'https://example.com/cancel',
  });

  res.json({ id: session.id });
});

app.listen(port, () => {
  console.log(`Product service listening at http://localhost:${port}`)
})
