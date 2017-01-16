import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Link from './Link.react';
import Button from './Button.react';

function tick() {
  ReactDOM.render(
  <App />,
  document.getElementById('root')
);
}
setInterval(tick, 1000);

