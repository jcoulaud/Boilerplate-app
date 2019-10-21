import React from 'react';
import ReactDOM from 'react-dom';

import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from 'react-router-dom';
import { createBrowserHistory } from 'history';

import ContactMe from './components/ContactMe';
import Header from './components/Header';
import Footer from './components/Footer';
import routes from './routes/routes';
import './index.css';
import './components/ListCategories.css';
import './components/CreateItem.css';
import './assets/fonts/index.css';
import 'devicon';

import ReactGA from 'react-ga';
ReactGA.initialize('UA-96986515-1');

const fireTracking = () => {
  ReactGA.pageview(window.location.pathname);
  return null;
};

const ScrollToTop = () => {
  window.scrollTo(0, 0);
  return null;
};

const customHistory = createBrowserHistory();

ReactDOM.render(
  <Router history={customHistory}>
    <div>
      <Route component={fireTracking} />
      <Route component={ScrollToTop} />
      <Header />
      <ContactMe />
      <Switch>
        {routes.map((route, i) => (
          <Route key={i} {...route} />
        ))}
        <Redirect to="/" />
      </Switch>
      <Footer />
    </div>
  </Router>,
  document.getElementById('root'),
);
