import React, { Component } from 'react';

import Languages from './languages/languages';
import Repository from './../utils/Repository';
import CreateItem from './CreateItem';
import Filters from './Filters';
import { LinearProgress } from 'material-ui/Progress';

class SingleLanguage extends Component {
	state = {
		isLoading: true,
		repos: [],
		filter: 0 // stars
	};
	handlerLoading = this.handlerLoading.bind(this);
	handlerFilter = this.handlerFilter.bind(this);

	handlerLoading() {
		this.setState({ isLoading: false });
	}

	handlerFilter(filter) {
		this.setState({ filter: filter });
	}

	renderLoader() {
		if (this.state.isLoading) {
			return (
			  <div className="loader">
				  <LinearProgress />
				</div>
			);
		}
		return null;
	}

	displayFilters() {
		if (!this.state.isLoading) {
			return <Filters handler={this.handlerFilter} />
		} else {
			return null;
		}
	}

	displayLanguage() {
		const repos = this.state.repos;
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
		return repos.map((repo) => {
			return (
				<CreateItem key={repo.githubName} repo={repo} />
			);
		});
	}

	renderLanguage() {
		const currentLanguage = this.props.match.params.language;
		const repos = Languages.filter((repo) => repo.lang === currentLanguage);

		if (repos[0]) {
			if (this.state.isLoading) {
				const reposUrls = repos[0].repositories;
				const reposSeeds = reposUrls.map((url) => {
					return new Repository(url).then(data => data);
				});
				Promise.all(reposSeeds).then(values => {
					this.setState({
						isLoading: false,
						repos: values
					});
				});
			} else {
				return this.displayLanguage();
			}
		} else {
			return <span>Could not fetch {currentLanguage} language. Please verify the URL.</span>;
		}
	}

	render() {
		return (
				<div className="item-root">
					{this.renderLoader()}
					{this.displayFilters()}
					{this.renderLanguage()}
				</div>
		);
	}
}

export default SingleLanguage;
