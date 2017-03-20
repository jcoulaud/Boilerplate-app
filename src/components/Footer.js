import React from 'react';
import Layout from 'material-ui/Layout';
import './Footer.css';

const Footer = () => {
  return (
    <div className="Footer-container">
      <Layout container className="Footer-Layout">
        <div className="Footer-Layout-Left">
          @2017 - Made with :coffee: by
          <a href="https://www.jcoulaud.com/" target="_blank">Julien Coulaud</a>
        </div>
        <div className="Footer-Layout-Right">
          Follow me
        </div>
      </Layout>
    </div>
  );
}

export default Footer;