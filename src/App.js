import React from 'react';
import './App.css';
import Tabs from 'muicss/lib/react/tabs';
import Tab from 'muicss/lib/react/tab';
import Loser from './Losers';
import Gainers  from './Gainers';
import baseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

const data = require('./data.json');
var TopLoser = [];
var tempTopGainers = [];

function tick() {
  for (var i=0; i<data.length; i++) {
    var change_value = Math.floor(Math.random() * (50 - (-50) + 1) + (-50)) / 1000;
    data[i].percent = change_value;
    data[i].change_value = parseFloat(data[i].price)*data[i].percent;
    data[i].change_value = data[i].change_value.toFixed(2);
    data[i].price = parseFloat(data[i].change_value)+ parseFloat(data[i].price);
    data[i].price = data[i].price.toFixed(3);
    data[i].values = data[i].price * data[i].Volume;
    data[i].values = parseInt(data[i].values);
  }
  data.sort(function(a, b) {
      return parseInt(a.values) - parseInt(b.values);

  });
  for (var i=0; i<5; i++) {
    TopLoser[i] = data[i];
  }
  data.sort(function(a, b) {
    return -parseFloat(a.price) + parseFloat(b.price);

  });
  for (var i=0; i<5; i++) {
    tempTopGainers[i] = data[i];
  }

}
setInterval(tick, 1000);
const styles = {
  container: {
    textAlign: 'right',
    backgroundColor:"#BBDEFB",
    color: "#ffffff",
  },
};

const muiTheme = getMuiTheme({
  palette: {
    textColor: "#ffffff",
  },
});
class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      arrayTopLoser: TopLoser,
      arrayTopGainer : tempTopGainers
    };
  }
  	getChildContext() {
      return { muiTheme: getMuiTheme(baseTheme) };
    }
  render() {
    return (
      <Tabs style={ styles.container}>
	    <Tab label="TopGainers" >
	      <Gainers TopGainers={this.props.arrayTopGainer} />
	    </Tab>
	    <Tab label="TopLosers" >
	      <Loser TopLosers={this.props.arrayTopLoser}/>
	    </Tab>
	  </Tabs>
    );
  }
}
App.childContextTypes = {
            muiTheme: React.PropTypes.object.isRequired,
};
export default App;
