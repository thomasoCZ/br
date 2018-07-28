import React from 'react';
import ReactDOM from 'react-dom';
import FormContainer from './containers/FormContainer';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<FormContainer />, document.getElementById('form'));
registerServiceWorker();
