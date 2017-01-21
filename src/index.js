import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

const data = require('../src/data.json');

function sorts(dt) {
  dt.sort(function(a, b) {
    return -parseFloat(a.values) + parseFloat(b.values);
  });
  return dt;
}
var dt = sorts(data);
ReactDOM.render(
  <App arrayTopGainer={dt.slice(0, 5)} arrayTopLoser={dt.slice(3, 7)}/>,
  document.getElementById('root')
);
function tick() {
	
  for (var i=0; i<data.length; i++) {
    var change_value_percent = Math.floor(Math.random() * (50 - (-50) + 1) + (-50))/10;
    data[i].percent = change_value_percent;
    data[i].change_value = parseFloat(data[i].price)*(data[i].percent/100);
    data[i].change_value = data[i].change_value.toFixed(3);
    data[i].price = parseFloat(data[i].change_value)+ parseFloat(data[i].price);
    data[i].price = data[i].price.toFixed(2);
    data[i].values = data[i].price * data[i].Volume;
    data[i].values = parseInt(data[i].values);
  }
  sorts(data);
  
  ReactDOM.render(
  <App arrayTopGainer={data.slice(0, 5)} arrayTopLoser={data.slice(data.length-5, data.length)}/>,
  document.getElementById('root')
);
}
setInterval(tick, 4000);

