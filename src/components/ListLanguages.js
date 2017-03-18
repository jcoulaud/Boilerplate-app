import React, { Component } from 'react';
import Paper from 'material-ui/Paper';
import Layout from 'material-ui/Layout';
import { Link } from 'react-router-dom';

import jsonLanguages from './languages/languages.json';

class ListLanguages extends Component {
	render() {
		const languages = jsonLanguages;
	  const languagesCategories = languages.map((language) => {
	    return (
	    	<Layout key={language.type} className="ListLanguages-item" item xs={12} sm={12} md={4}>
	    		<Link to={"/language/" + language.type}>
						<Paper className="ListLanguages-paper">
							<i className={language.code}></i>
							<div>
								<span>{language.type}</span>
							</div>
						</Paper>
					</Link>
				</Layout>
	    );
	  });

	  return (
	  	<Layout container className="ListLanguages-root">
				{languagesCategories}
		  </Layout>
	  );
	}
}

export default ListLanguages;
