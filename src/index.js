import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();




ReactDOM.render(
  <App cat={5} txt="this is the prop value" />, 
  document.getElementById('root')
);