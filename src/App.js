import React, { Component } from 'react';
import Theme from './Theme'
import './App.css';
import { MuiThemeProvider } from '@material-ui/core/styles';
import Nav from './components/Nav';
import TabBar from './components/TabBar';

class App extends Component {

  render() {
    return (
      <MuiThemeProvider theme={Theme}>
        <Nav />
        <TabBar />
      </MuiThemeProvider>

    );
  }
}

export default App;
