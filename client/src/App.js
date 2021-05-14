import { useEffect, useState } from 'react';
import './App.css';
import Axios from "axios";
import { io } from "socket.io-client";
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import ProductCard from './ProductCard';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
}));

function App() {
  const [products, setProducts] = useState([]);
  const [pricing, setPricing] = useState({});
  const classes = useStyles();

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

    var socket = io("http://127.0.0.1:5000", {
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
              <ProductCard product={product} price={pricing[product.ticker]}/>
            </Grid>
          ))}
        </Grid>
      </Grid>
    </Grid>
  );
}

export default App;
