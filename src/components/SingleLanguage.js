import React, { Component } from 'react';

import Repositories from './languages/languages.json';
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
		const repos = Repositories.filter((repo) => repo.type === currentLanguage);

		if (repos[0]) {
			return repos[0].repositories.map((repo) => {
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
