import React from 'react';
import ReactDOM from 'react-dom';
import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from 'material-ui/Table';
import baseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

const data = require('./data.json');

const styles= {
  container: {
    color: "black",
    "font-weight": "bold",
  },
};
const stylesHeader= {
  container: {
    color: "#bdbdbd",
    "font-weight": "bold",
  },
};
const stylesCode= {
  container: {
    color: "#2e84de",
    "font-weight": "bold",
  },
};
const stylesCopany= {
  container: {
    color: "#9E9E9E",
    "font-weight": "bold",
  },
};
const stylesNegative = {
  container: {
    color: "#ff3a65",
    "font-weight": "bold",
  },
};
const stylesPositive = {
  container: {
    color: "#3cdf87",
    "font-weight": "bold",
  },
};
var TopLoser = [];
function tick() {

  for (var i=0; i<data.length; i++) {
    var change_value = Math.floor(Math.random() * (50 - (-50) + 1) + (-50)) / 1000;
    data[i].percent = change_value;
    data[i].change_value = parseFloat(data[i].price)*data[i].percent;
    data[i].change_value = data[i].change_value.toFixed(2);
    data[i].price = parseFloat(data[i].change_value)+ parseFloat(data[i].price);
    data[i].price = data[i].price.toFixed(3);
    data[i].values = data[i].price * data[i].Volume;
    data[i].values = data[i].values.toFixed(2);
  }
  data.sort(function(a, b) {
    return parseFloat(a.price) - parseFloat(b.price);

});

  for (var i=0; i<5; i++) {
    TopLoser[i] = data[i];
  }

}

setInterval(tick, 1000);
class Loser extends React.Component {

  getChildContext() {
                return { muiTheme: getMuiTheme(baseTheme) };
            }
  render() {
    return (

      <Table>
        <TableHeader adjustForCheckbox={false} displaySelectAll={false} fixedHeader={true}>
          <TableRow>
            <TableHeaderColumn style={ stylesHeader.container}>CODE</TableHeaderColumn>
            <TableHeaderColumn style={ stylesHeader.container}>COMPANY</TableHeaderColumn>
            <TableHeaderColumn style={ stylesHeader.container}>PRICE</TableHeaderColumn>
            <TableHeaderColumn style={ stylesHeader.container}>VALUE</TableHeaderColumn>
            <TableHeaderColumn style={ stylesHeader.container}>CHANGE_VALUE</TableHeaderColumn>
            <TableHeaderColumn style={ stylesHeader.container}>PERCENT</TableHeaderColumn>
          </TableRow>
        </TableHeader>
        <TableBody displayRowCheckbox={false}>
        {TopLoser.map(item => {
          if (item.percent > 0) {
            return (
                <TableRow key={item.code}>
                    <TableRowColumn style={ stylesCode.container}>{item.code}</TableRowColumn>
                    <TableRowColumn style={ stylesCopany.container}>{item.company}</TableRowColumn>
                    <TableRowColumn style={ styles.container}>{item.price}</TableRowColumn>
                    <TableRowColumn style={ styles.container}>{item.values}</TableRowColumn>
                    <TableRowColumn style={ stylesPositive.container}>{item.change_value}</TableRowColumn>
                    <TableRowColumn style={ stylesPositive.container}>{item.percent}</TableRowColumn>
                </TableRow>
            );
          } else{
            return (
                <TableRow key={item.code}>
                    <TableRowColumn style={ stylesCode.container}>{item.code}</TableRowColumn>
                    <TableRowColumn style={ stylesCopany.container}>{item.company}</TableRowColumn>
                    <TableRowColumn style={ styles.container}>{item.price}</TableRowColumn>
                    <TableRowColumn style={ styles.container}>{item.values}</TableRowColumn>
                    <TableRowColumn style={ stylesNegative.container}>{item.change_value}</TableRowColumn>
                    <TableRowColumn style={ stylesNegative.container}>{item.percent}</TableRowColumn>
                </TableRow>
            );
          };
            
        })}
        </TableBody>
      </Table>
    );
  }
}
Loser.childContextTypes = {
            muiTheme: React.PropTypes.object.isRequired,
};
export default Loser;