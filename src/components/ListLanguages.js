import React from 'react';
import Paper from 'material-ui/Paper';
import Layout from 'material-ui/Layout';

import jsonLanguages from './languages.json';
import './ListLanguages.css';

const ListLanguages = () => {
	const languages = jsonLanguages;
  const languagesCategories = languages.map((language) => {
    return (
    	<Layout key={language.type} className="ListLanguages-item" item xs={12} sm={12} md={4} >
				<Paper className="ListLanguages-paper">
					<i className={language.code}></i>
					<div>
						<span>{language.type}</span>
					</div>
				</Paper>
			</Layout>
    );
  });

  return (
  	<Layout container className="ListLanguages-root">
			{languagesCategories}
	  </Layout>
  );
};

export default ListLanguages;
