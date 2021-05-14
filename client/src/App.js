import { useEffect, useState } from 'react';
import './App.css';
import Axios from "axios";

function App() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    Axios({
      method: "GET",
      url: "http://localhost:5000/",
      headers: {
        "Content-Type": "application/json"
      }
    }).then(res => {
      setProducts(res.data);
    });
  }, []);

  return (
    <div className="App">
      {console.log(products)}
      <header className="App-header">
        {products.map(product => <img src={product.image_path} className="product-image" alt="Lowe's Companies Inc" />)}
      </header>
    </div>
  );
}

export default App;
