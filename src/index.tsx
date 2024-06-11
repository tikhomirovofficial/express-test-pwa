import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { Provider } from 'react-redux';
import { store } from "./app/store";
import { BrowserRouter } from "react-router-dom";
import './styles/tikstyles.css';
import './styles/index.css';
import './styles/animations.css';
import './styles/light.css';
import 'react-loading-skeleton/dist/skeleton.css'


const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);
root.render(
    
    <BrowserRouter>
        <Provider store={store}>
            <App />
        </Provider>
    </BrowserRouter>

);

