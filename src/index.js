import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './components/app';
import Auth0ProviderCustom from './auth/auth0-provider';

import './index.scss';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Auth0ProviderCustom>
        <App />
      </Auth0ProviderCustom>
    </BrowserRouter>
  </React.StrictMode>,
);
