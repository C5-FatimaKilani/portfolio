import React from 'react';
import App from './App';
import ReactDOM from 'react-dom/client'
import {BrowserRouter as Router} from "react-router-dom"
import 'bootstrap/dist/css/bootstrap.min.css';
// import {BrowserRouter as Router} from "react-router-dom"
// import { Provider } from 'react';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Router>

  <React.StrictMode>
    <App />
  </React.StrictMode>
  </Router>

);
