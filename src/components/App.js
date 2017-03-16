import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import logo from './../assets/images/logo.svg';
import './App.css';
import ListLanguages from './ListLanguages';

class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <div className="App">

          <div className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h2>Boilerplate</h2>
            <span className="App-subHeader">A curated directory of boilerplates to help you start your projects!</span>
          </div>

          <div className="App-categories">
            <ListLanguages />
          </div>

        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
