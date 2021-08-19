import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import axios from 'axios';
import { Auth0Provider } from "@auth0/auth0-react";

require('dotenv').config();
axios.defaults.baseURL = 'http://localhost:5000';

ReactDOM.render(
    <Auth0Provider
        domain={process.env.REACT_APP_AUTH0_DOMAIN}
        clientId={process.env.REACT_APP_AUTH0_CLIENT_ID}
        redirectUri={window.location.origin}
        useRefreshTokens
        cacheLocation="localstorage"
    >
        <App />
    </Auth0Provider>,
    document.getElementById('root')
);