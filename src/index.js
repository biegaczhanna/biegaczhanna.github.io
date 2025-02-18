import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './App.css';
import './Kartka/Kartka.css';
import Kartka from './Kartka/Kartka.js';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Kartka />
  </React.StrictMode>
);

// reportWebVitals();
