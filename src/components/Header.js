import React from 'react';
import Layout from 'material-ui/Layout';
import { Link } from 'react-router-dom';

import logo from './../assets/images/boilerplate-logo-white.png';
import './Header.css';

const Header = () => {
    return (
      <div className="App-header">
        <Link to="/">

          <Layout container className="App-header-Layout" item xs={10} sm={10} md={10}>
            <div className="App-header-container">
              <img src={logo} className="App-logo" alt="logo" />
            </div>
            <div className="App-subHeader">
              <h2>BOILRPLATE</h2>
              <span className="App-subHeader">A curated directory of boilerplates to help you start your projects!</span>
            </div>
          </Layout>
        </Link>
      </div>
    );
};

export default Header;
