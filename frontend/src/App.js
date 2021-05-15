import { useEffect, useState } from 'react';
import './App.css';
import Axios from "axios";
import { io } from "socket.io-client";
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import ProductCard from './ProductCard';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import { loadStripe } from '@stripe/stripe-js';
// Make sure to call `loadStripe` outside of a component’s render to avoid
// recreating the `Stripe` object on every render.
const stripePromise = loadStripe('pk_test_51IbGTDIL6q5pLIOCkBedOVBGZqlF6dtW2L8BhCTGyZBHO0o1w4CwYsIMBKAMZNMuW6JWIx8BYKfjRgsHzgwAopEY00Cachbthu');

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
}));

function App() {
  const [products, setProducts] = useState([]);
  const [pricing, setPricing] = useState({});
  const classes = useStyles();

  const handleCheckout = async (event) => {
    // Get Stripe.js instance
    const stripe = await stripePromise;

    // Call your backend to create the Checkout Session
    const response = await fetch('http://127.0.0.1:5000/create-checkout-session', { method: 'POST' });

    const session = await response.json();

    // When the customer clicks on the button, redirect them to Checkout.
    const result = await stripe.redirectToCheckout({
      sessionId: session.id,
    });

    if (result.error) {
      // If `redirectToCheckout` fails due to a browser or network
      // error, display the localized error message to your customer
      // using `result.error.message`.
      console.log(result.error.message);
    }
  };

  useEffect(() => {
    Axios({
      method: "GET",
      url: "http://localhost:5000/products",
      headers: {
        "Content-Type": "application/json"
      }
    }).then(res => {
      setProducts(res.data);
    });

    var socket = io("http://127.0.0.1:4000", {
      transports: ['websocket', 'polling']
    });

    socket.on('pricing', (latestPricing) => {
      setPricing(latestPricing);
    });
  }, []);

  return (
    <Grid container className={classes.root} spacing={2}>
      <Grid item xs={12}>
        <Grid container justify="center" spacing={2}>
          {/* TODO: add key back in to eliminate warning */}
          {products.map((product) => (
            <Grid item>
              <ProductCard product={product} price={pricing[product.ticker]} handleCheckout={handleCheckout}>
                <Button variant="contained" color="primary" onClick={handleCheckout}>
                  <Typography variant="caption">
                    BUY BUY BUY
                  </Typography>
                </Button>
              </ProductCard>
            </Grid>
          ))}
        </Grid>
      </Grid>
    </Grid>
  );
}

export default App;
