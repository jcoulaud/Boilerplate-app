import React, { Component } from 'react';

import CreateItem from './CreateItem';
import Filters from './Filters';

class SingleLanguage extends Component {
	state = {
		filter: 0 // stars
	};
	handlerFilter = this.handlerFilter.bind(this);

	handlerFilter(filter) {
		this.setState({ filter: filter });
	}

	displayLanguage(repos) {
		// Apply filters
		switch (this.state.filter) {
			// Filter by stars
			case 0:
				repos.sort((a, b) => {
					return a.githubStars > b.githubStars ? -1 : 1;
				});
				break;
			// Filter by Date of creation
			case 1:
				repos.sort((a, b) => {
					return a.githubCreated_at > b.githubCreated_at ? -1 : 1;
				});
				break;
			// Filter by Last update
			case 2:
				repos.sort((a, b) => {
					return a.githubUpdated_at > b.githubUpdated_at ? -1 : 1;
				});
				break;
			// Filter by Last update
			case 3:
				repos.sort((a, b) => {
					return a.githubSize < b.githubSize ? -1 : 1;
				});
				break;
			// If filter is unknown, throw error
			default:
				throw new Error('Filter is not valid!');
		};
		return repos.map((repo, index) => {
			return (
				<CreateItem key={index + repo.githubName} repo={repo} />
			);
		});
	}

	renderLanguage() {
		const currentLanguage = this.props.match.params.language;
		const repos = require(`./../languages/${currentLanguage}.json`);
		if (repos) {
			return this.displayLanguage(repos);
		} else {
			return <span>Could not fetch {currentLanguage} language. Please verify the URL.</span>;
		}
	}

	render() {
		return (
				<div className="item-root">
					<Filters handler={this.handlerFilter} />
					{this.renderLanguage()}
				</div>
		);
	}
}

export default SingleLanguage;
