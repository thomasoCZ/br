import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import FormContainer from './containers/FormContainer';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<FormContainer />, document.getElementById('form'));
registerServiceWorker();
