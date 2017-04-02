import React from 'react';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { BrowserRouter as Router, Route, hashHistory } from 'react-router-dom';
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

import Header from './components/Header';
import Footer from './components/Footer';
import routes from './routes/routes';
import './index.css';
import './components/ListCategories.css';
import './components/CreateItem.css';
import './assets/fonts/index.css';
import 'devicon';

ReactDOM.render((
	<MuiThemeProvider>
	  <Router history={hashHistory}>
	  	<div>
	  		<Header />
	  		{routes.map((route, i) => (
					<Route key={i} {...route}/>
				))}
				<Footer />
	    </div>
	  </Router>
	</MuiThemeProvider>
), document.getElementById('root'));
