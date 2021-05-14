import { useEffect, useState } from 'react';
import logo from './logo.svg';
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
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
