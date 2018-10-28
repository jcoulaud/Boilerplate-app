import React, { Component } from "react";
import Paper from "material-ui/Paper";
import Layout from "material-ui/Layout";
import { Link } from "react-router-dom";

import Languages from "./../languages/languages";

class ListCategories extends Component {
	componentDidMount() {
		const s = document.createElement("script");
		s.type = "text/javascript";
		s.async = true;
		s.innerHTML =
			'(function(b, o, n, g, s, r, c) { if (b[s]) return; b[s] = {}; b[s].scriptToken = "XzYxNjA3NzI2MA"; r = o.createElement(n); c = o.getElementsByTagName(n)[0]; r.async = 1; r.src = g; r.id = s + n; c.parentNode.insertBefore(r, c); })(window, document, "script", "//cdn.oribi.io/XzYxNjA3NzI2MA/oribi.js", "ORIBI");';
		this.instance.appendChild(s);
	}

	render() {
		const languagesCategories = Languages.map(language => {
			return (
				<Layout key={language.lang.toLowerCase()} className="ListLanguages-item" item xs={12} sm={4} md={3}>
					<Link to={"/language/" + language.lang.toLowerCase()}>
						<Paper className="ListLanguages-paper">
							<i className={language.icon} />
							<div>
								<span>{language.lang}</span>
							</div>
						</Paper>
					</Link>
				</Layout>
			);
		});

		return (
			<div ref={el => (this.instance = el)}>
				<Layout container className="ListLanguages-root">
					{languagesCategories}
				</Layout>
			</div>
		);
	}
}

export default ListCategories;
