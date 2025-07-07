import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import keycloak from './keycloak';

const root = ReactDOM.createRoot(document.getElementById('root'));

// Inicia o processo de autenticação
keycloak.init({ onLoad: 'login-required' }).then((authenticated) => {
    if (authenticated) {
        root.render(
            <React.StrictMode>
                <App />
            </React.StrictMode>
        );
    } else {
        alert("Autenticação falhou.");
    }
});