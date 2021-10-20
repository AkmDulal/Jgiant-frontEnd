import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Route } from "react-router-dom";
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <Route basename={process.env.PUBLIC_URL}>
      <App />
    </Route>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
