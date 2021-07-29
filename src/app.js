import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter } from 'react-router-dom';
import AppRouter from './router/AppRouter';

const jsx = (
    <HashRouter>
        <AppRouter />
    </HashRouter>
);

ReactDOM.render(jsx,document.getElementById("app"));

