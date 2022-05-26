import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx';
import './main.scss';

ReactDOM.render(
    <StrictMode>
        <App />
    </StrictMode>,
    document.querySelector('#root')
);