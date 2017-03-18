import React from 'react';

import logo from './../assets/images/logo.svg';
import './Header.css';

const Header = () => {
    return (
      <div className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h2>Boilerplate</h2>
        <span className="App-subHeader">A curated directory of boilerplates to help you start your projects!</span>
      </div>
    );
};

export default Header;
