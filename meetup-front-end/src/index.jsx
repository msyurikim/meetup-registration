import React from 'react';
import ReactDOM from 'react-dom';

import App from './components/App.jsx';
var myHeaders = new Headers();

var requestOptions = {
  method: 'GET',
  headers: myHeaders,
  redirect: 'follow'
};

fetch("/attendees", requestOptions)
  .then((response) => {
    return response.json();
  })
  .then((body) => {
    ReactDOM.render(<App attendees={body}/>, document.getElementById('app'));
  })
  .catch(error => console.log('error', error));
