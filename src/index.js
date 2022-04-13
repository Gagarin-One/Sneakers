import React from 'react';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import ReactDOMClient from 'react-dom/client';
import { Provider } from 'react-redux';
import Store from './Redux/Redux';

const root = ReactDOMClient.createRoot(document.getElementById('root'))
root.render(
  <BrowserRouter>
    <Provider store={Store}>
    <App />
    </Provider>
  </BrowserRouter>
);

