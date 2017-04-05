import React, { Component } from 'react';

import Languages from './languages/languages';
import Repository from './../utils/Repository';
import CreateItem from './CreateItem';
import { LinearProgress } from 'material-ui/Progress';

class SingleLanguage extends Component {

	state = {
		isLoading: true,
		repos: []
	};
	handlerLoading = this.handlerLoading.bind(this);

	handlerLoading() {
		this.setState({ isLoading: false });
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

	displayLanguage() {
		const repos = this.state.repos;
		// Sort by stars
		repos.sort((a, b) => {
			return a.githubStars > b.githubStars ? -1 : 1;
		});
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
					{this.renderLanguage()}
				</div>
		);
	}
}

export default SingleLanguage;
