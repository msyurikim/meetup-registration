import React from 'react';
import ReactDOM from 'react-dom';

import App from './components/App.jsx';
var myHeaders = new Headers();

var requestOptions = {
  method: 'GET',
  headers: myHeaders,
  redirect: 'follow'
};

fetch("http://localhost:3000/attendees", requestOptions)
  .then((response) => {
    ReactDOM.render(<App attendees={response}/>, document.getElementById('app'));
  })
  .catch(error => console.log('error', error));
