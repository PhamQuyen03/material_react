import React from 'react';
import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from 'material-ui/Table';
import baseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

const styles= {
  container: {
    color: "black",
    "fontWeight": "bold",
  },
};
const stylesHeader= {
  container: {
    color: "#bdbdbd",
    "fontWeight": "bold",
  },
};
const stylesCode= {
  container: {
    color: "#2e84de",
    "fontWeight": "bold",
  },
};
const stylesCopany= {
  container: {
    color: "#9E9E9E",
    "fontWeight": "bold",
  },
};
const stylesNegative = {
  container: {
    color: "#ff3a65",
    "fontWeight": "bold",
  },
};
const stylesPositive = {
  container: {
    color: "#3cdf87",
    "fontWeight": "bold",
  },
};
const muiTheme = getMuiTheme({
  palette: {
    textColor: "#ffffff",
  },
});
class Gainers extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // TopGainers: tempTopGainers
    };
  }
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
            <TableHeaderColumn style={ stylesHeader.container}>CHANGE</TableHeaderColumn>
            <TableHeaderColumn style={ stylesHeader.container}>%CHANGE</TableHeaderColumn>
          </TableRow>
        </TableHeader>
          <TableBody displayRowCheckbox={false}>
            {this.props.TopGainers.map(item => {if (item.percent > 0) {
              return (
                <TableRow key={item.code}>
                  <TableRowColumn style={ stylesCode.container}>{item.code}</TableRowColumn>
                  <TableRowColumn style={ stylesCopany.container}>{item.company}</TableRowColumn>
                  <TableRowColumn style={ styles.container}>{item.price}</TableRowColumn>
                  <TableRowColumn style={ styles.container}>{item.values}</TableRowColumn>
                  <TableRowColumn style={ stylesPositive.container}>{item.change_value}</TableRowColumn>
                  <TableRowColumn style={ stylesPositive.container}>{item.percent}%</TableRowColumn>
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
                  <TableRowColumn style={ stylesNegative.container}>{item.percent}%</TableRowColumn>
                </TableRow>
                );
            };

          })}
        </TableBody>
      </Table>
);
}
}
Gainers.childContextTypes = {
  muiTheme: React.PropTypes.object.isRequired,
};
export default Gainers;