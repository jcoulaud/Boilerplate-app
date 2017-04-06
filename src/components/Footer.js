import React from 'react';
import * as FontAwesome from 'react-icons/lib/fa';
import { Link } from 'react-router-dom';
import Layout from 'material-ui/Layout';
import './Footer.css';

const Footer = () => {
  return (
    <div className="Footer-container">
      <Layout container className="Footer-Layout" item xs={10} sm={10} md={10}>
        <div className="Footer-Layout-Left">
          @2017 - Made with <FontAwesome.FaCoffee /> by
          <a href="https://www.jcoulaud.com/" target="_blank">Julien Coulaud</a>
          <span className="Footer-divider">|</span>
          <span className="Footer-follow">Follow me on
            <Link to="https://twitter.com/juliencoulaud" target="_blank"><FontAwesome.FaTwitter /></Link>
            <Link to="https://github.com/jcoulaud/" target="_blank"><FontAwesome.FaGithub /></Link>
            <Link to="https://www.linkedin.com/in/juliencoulaud/" target="_blank"><FontAwesome.FaLinkedin /></Link>
          </span>
        </div>
      </Layout>
    </div>
  );
}

export default Footer;
