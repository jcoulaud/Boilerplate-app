import React from 'react';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { BrowserRouter as Router, Route, Redirect, Switch, browserHistory } from 'react-router-dom';

import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

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
}

ReactDOM.render((
	<MuiThemeProvider>
	  <Router history={browserHistory}>
	  	<div>
	  		<Route component={fireTracking} />
	  		<Header />
	  		<ContactMe />
	  		<Switch>
		  		{routes.map((route, i) => (
						<Route key={i} {...route}/>
					))}
					<Redirect to="/" />
				</Switch>
				<Footer />
	    </div>
	  </Router>
	</MuiThemeProvider>
), document.getElementById('root'));
