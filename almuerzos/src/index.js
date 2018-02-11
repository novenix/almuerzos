// este es el equivalente al home
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './pages/App';
import registerServiceWorker from './registerServiceWorker';

const indexContainer= document.getElementById('root')
ReactDOM.render(<App />,indexContainer);
registerServiceWorker();
