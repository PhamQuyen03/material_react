import React from 'react';
import './App.css';
import Tabs from 'muicss/lib/react/tabs';
import Tab from 'muicss/lib/react/tab';
import Loser from './Losers';
import Gainers  from './Gainers';
import baseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

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
      // arrayTopLoser: tempTopLoser,
      // arrayTopGainer : tempTopGainers
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
