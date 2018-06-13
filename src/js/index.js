import 'whatwg-fetch';
import { polyfill as promisePolyfill } from 'es6-promise';
import { BrowserRouter } from 'react-router-dom';

import React from 'react';
import ReactDOM from 'react-dom';

import '../scss/index.scss';

import App from './App';

//promisePolyfill();

const element = document.getElementById('content');

ReactDOM.render((
  <BrowserRouter>
    <App/>
  </BrowserRouter>
)//, document.getElementById('root'))
, element)

document.body.classList.remove('loading');
