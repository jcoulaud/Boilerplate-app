import React, { Component } from 'react';
import moment from 'moment';

import { Link } from 'react-router-dom';
import Layout from 'material-ui/Layout';
import { Card, CardContent } from 'material-ui/Card';
import Text from 'material-ui/Text';
import Button from 'material-ui/Button';
import * as FontAwesome from 'react-icons/lib/go';

class CreateItem extends Component {
	renderRepo() {
		const repo = this.props.repo;
		return (
			<Layout className="item-item" item xs={10} sm={10} md={10}>
				<Card className="card">

					<div className="card-content-top">
						<div className="item-image">
		          <img src={repo.githubAvatar} alt="Avatar" />
		        </div>

		        <div className="item-content-left">
		          <CardContent>
		            <Text type="headline"><span className="author">{repo.githubOwner}</span><span className="separator"> / </span><span className="repo">{repo.githubName}</span></Text>
		            <Text type="subheading" secondary>{repo.githubDescription}</Text>
		          </CardContent>
		        </div>

		        <div className="item-content-right">
		        	<span className="item-content-icon"><FontAwesome.GoEye /> Watch: {repo.githubWatchers}</span>
		        	<span className="item-content-icon"><FontAwesome.GoStar /> Star: {repo.githubStars}</span>
		        	<span className="item-content-icon"><FontAwesome.GoRepoForked /> Fork: {repo.githubForks}</span>
		        </div>
		       </div>

		       <div className="card-content-bottom">
		       	<div className="card-content-subline">
		       		<span className="card-content-subline-dates"><FontAwesome.GoDatabase /> {Math.round(repo.githubSize / 100) / 10} MB</span>
		       		<span className="card-content-subline-dates"><FontAwesome.GoClock /> Created: {moment(repo.githubCreated_at).format("MMMM Do YYYY")} </span>
		       		<span className="card-content-subline-dates"><FontAwesome.GoClock /> Last Update: {moment(repo.githubUpdated_at).fromNow('dd')} ago</span>
		       	</div>
		       	<div className="card-content-button">
			       	<Link to={repo.githubUrl} target="_blank">
			       		<Button raised accent>More details +</Button>
			       	</Link>
			       </div>
		       </div>

	      </Card>
			</Layout>
		);
	}

	render() {
		return (
			this.renderRepo()
		);
	}
}

export default CreateItem;
