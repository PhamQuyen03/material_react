import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Tabs from 'muicss/lib/react/tabs';
import Tab from 'muicss/lib/react/tab';
import Loser from './Losers';
import Gainers  from './Gainers';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
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

  	getChildContext() {
                return { muiTheme: getMuiTheme(baseTheme) };
            }
  render() {
    return (
      <Tabs style={ styles.container}>
	    <Tab label="TopGainers" >
	      <Gainers />
	    </Tab>
	    <Tab label="TopLosers" >
	      <Loser/>
	    </Tab>
	  </Tabs>
    );
  }
}
App.childContextTypes = {
            muiTheme: React.PropTypes.object.isRequired,
};
export default App;
