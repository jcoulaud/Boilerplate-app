import React from 'react';
import { FaCoffee, FaTwitter, FaGithub, FaLinkedin } from 'react-icons/fa';
import { Grid } from '@material-ui/core';
import './Footer.css';

const Footer = () => {
  return (
    <div className="Footer-container">
      <Grid container className="Footer-Layout" item xs={10} sm={10} md={10}>
        <div className="Footer-Layout-Left">
          @2017 - Made with <FaCoffee /> by
          <a
            href="https://www.jcoulaud.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Julien Coulaud
          </a>
          <span className="Footer-divider">|</span>
          <span className="Footer-follow">
            Follow me on
            <a
              href="https://twitter.com/juliencoulaud"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaTwitter />
            </a>
            <a
              href="https://github.com/jcoulaud/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/juliencoulaud/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin />
            </a>
          </span>
        </div>
      </Grid>
    </div>
  );
};

export default Footer;
