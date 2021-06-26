import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import './services/firebase'; // Importação dos serviços de Autenticação e Acesso do Firebase.

import './style/global.scss'  // Importação de Estilização CSS/SASS.
import './style/auth.scss' // Importação de Estilização CSS/SASS.

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
