import React, { Component } from 'react';

import Languages from './languages/languages';
import Repository from './../utils/Repository';
import CreateItem from './CreateItem';
import { LinearProgress } from 'material-ui/Progress';

class SingleLanguage extends Component {

	state = { isLoading: true };
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

	renderLanguage() {
		const currentLanguage = this.props.match.params.language;
		const repos = Languages.filter((repo) => repo.lang === currentLanguage);

		if (repos[0]) {
			const reposUrls = repos[0].repositories;
			const reposSeeds = reposUrls.map(url => new Repository(url));
			console.log(reposSeeds);
			return reposSeeds.map((repo) => {
				return (
					<CreateItem key={repo.repo} action={this.handlerLoading} repo={repo} />
				);
			})
		}
		return <span>Could not fetch language. Please verify the URL.</span>;
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
