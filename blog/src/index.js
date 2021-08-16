import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import axios from 'axios';
import { Auth0Provider } from "@auth0/auth0-react";

axios.defaults.baseURL = 'http://localhost:5000/api';

ReactDOM.render(
    <Auth0Provider
        domain="dev-hh33qr8t.us.auth0.com"
        clientId="9JFyqp9vPUMzAVxRSMK92aet7NoqSsao"
        redirectUri={window.location.origin}
        useRefreshTokens
        cacheLocation="localstorage"
    >
        <App />
    </Auth0Provider>,
    document.getElementById('root')
);