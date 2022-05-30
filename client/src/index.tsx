import React, { StrictMode } from 'react';
import ReactDOM, { Root } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import './index.css';

import App from './App';

const rootElement = document.getElementById('root');

const root: Root = ReactDOM.createRoot(rootElement!);

root.render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>
);
