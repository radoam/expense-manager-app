import { Global } from '@emotion/react';
import { StrictMode } from 'react';
import ReactDOM, { Root } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import App from './App';
import { globalStyles } from './GlobalStyles';
import { ThemeProvider, theme } from './modules/uiTheme';

const rootElement = document.getElementById('root');

const root: Root = ReactDOM.createRoot(rootElement);

root.render(
  <StrictMode>
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <Global styles={globalStyles} />
        <App />
      </ThemeProvider>
    </BrowserRouter>
  </StrictMode>
);
