import { Global } from '@emotion/react';
import { StrictMode } from 'react';
import ReactDOM, { Root } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import App from './App';
import { globalStyles } from './GlobalStyles';

const rootElement = document.getElementById('root');

const root: Root = ReactDOM.createRoot(rootElement!);

root.render(
  <StrictMode>
    <BrowserRouter>
      <Global styles={globalStyles} />
      <App />
    </BrowserRouter>
  </StrictMode>
);
