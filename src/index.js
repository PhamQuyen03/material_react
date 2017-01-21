import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

const data = require('../src/data.json');
var tempTopLoser = [];
var tempTopGainers = [];

function sorts(datas) {
  datas.sort(function(a, b) {
    return -parseFloat(a.price) + parseFloat(b.price);

  });
  return 1;
}
function tick() {
	for (var i=0; i<data.length; i++) {
    var change_value = Math.floor(Math.random() * (50 - (-50) + 1) + (-50)) / 1000;
    data[i].percent = change_value;
    data[i].change_value = parseFloat(data[i].price)*data[i].percent;
    data[i].change_value = data[i].change_value.toFixed(3);
    data[i].price = parseFloat(data[i].change_value)+ parseFloat(data[i].price);
    data[i].price = data[i].price.toFixed(3);
    data[i].values = data[i].price * data[i].Volume;
    data[i].values = parseInt(data[i].values);
  }
  sorts(data);
  for (var i=0; i<5; i++) {
    tempTopGainers[i] = data[i];
  }
  for (var i=data.length - 1; i> data.length - 6; i--) {
    tempTopLoser[i] = data[i];
  }
  ReactDOM.render(
  <App arrayTopGainer={tempTopGainers} arrayTopLoser={tempTopLoser}/>,
  document.getElementById('root')
);
}
setInterval(tick, 1000);

