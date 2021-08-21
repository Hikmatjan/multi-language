import React, { Suspense  } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

// import i18n (needs to be bundled ;)) 
import './i18next';

ReactDOM.render(
  <Suspense fallback="Loading...">
    <App />
  </Suspense>,
  document.getElementById('root')
);
