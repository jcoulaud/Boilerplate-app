import React, { Component } from 'react';

import Repositories from './languages/languages.json';
import CreateItem from './CreateItem';

class SingleLanguage extends Component {
	constructor() {
		super();
		this.state = {
			exist: false
		}
	}

	renderLanguage() {
		const currentLanguage = this.props.match.params.language;
		const repos = Repositories.filter((repo) => repo.type === currentLanguage);

		if (repos[0]) {
			return repos[0].repositories.map((repo) => {
				return (
					<CreateItem key={repo.repo} repo={repo} />
				);
			})
		}
		return <span>Could not fetch language. Please verify the URL.</span>;
	}

	render() {
		return (
			<div className="item-root">{this.renderLanguage()}</div>
		);
	}
}

export default SingleLanguage;
