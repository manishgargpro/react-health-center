import React, { Component } from 'react';
import Theme from './Theme'
import './App.css';
import { MuiThemeProvider } from '@material-ui/core/styles';
import Nav from './components/Nav';

class App extends Component {

  render() {
    return (
      <MuiThemeProvider theme={Theme}>
        <Nav/>
      </MuiThemeProvider>
      
    );
  }
}

export default App;
