import React, { Component } from 'react';
import axios from 'axios';
import moment from 'moment';

import { Link } from 'react-router-dom';
import Layout from 'material-ui/Layout';
import { Card, CardContent } from 'material-ui/Card';
import Text from 'material-ui/Text';
import Button from 'material-ui/Button';
import * as FontAwesome from 'react-icons/lib/go';

class CreateItem extends Component {
	state = {
		description: "",
		size: 0,
		avatar: "",
		forks: 0,
		stars: 0,
		watchers: 0,
		created_at: "",
		updated_at: "",
		url: ""
	}

	componentWillMount() {
		const repo = this.props.repo.githubName;
		const author = this.props.repo.githubOwner;
		axios.get(`https://api.github.com/repos/${author}/${repo}`)
	  .then((response) => {
	  	this.props.action();
	    this.setState({
	    	description: response.data.description,
	    	size: response.data.size,
	    	avatar: response.data.owner.avatar_url,
	    	forks: response.data.forks_count,
				stars: response.data.stargazers_count,
				watchers: response.data.subscribers_count,
				created_at: response.data.created_at,
				updated_at: response.data.updated_at,
				url: response.data.html_url
	    });
	  })
	  .catch((error) => {
	    console.log(error);
	  });
	}

	renderRepo() {
		return (
			<Layout className="item-item" item xs={10} sm={10} md={10}>
				<Card className="card">

					<div className="card-content-top">
						<div className="item-image">
		          <img src={this.state.avatar} alt="Avatar" />
		        </div>

		        <div className="item-content-left">
		          <CardContent>
		            <Text type="headline"><span className="author">{this.props.repo.author} / </span><span className="repo">{this.props.repo.repo}</span></Text>
		            <Text type="subheading" secondary>{this.state.description}</Text>
		          </CardContent>
		        </div>

		        <div className="item-content-right">
		        	<span className="item-content-icon"><FontAwesome.GoEye /> Watch: {this.state.watchers}</span>
		        	<span className="item-content-icon"><FontAwesome.GoStar /> Star: {this.state.stars}</span>
		        	<span className="item-content-icon"><FontAwesome.GoRepoForked /> Fork: {this.state.forks}</span>
		        </div>
		       </div>

		       <div className="card-content-bottom">
		       	<div className="card-content-subline">
		       		<span className="card-content-subline-dates"><FontAwesome.GoDatabase /> {this.state.size / 100} MB</span>
		       		<span className="card-content-subline-dates"><FontAwesome.GoClock /> Created: {moment(this.state.created_at).format("MMMM Do YYYY")} </span>
		       		<span className="card-content-subline-dates"><FontAwesome.GoClock /> Last Update: {moment(this.state.updated_at).fromNow('dd')} ago</span>
		       	</div>
		       	<div className="card-content-button">
			       	<Link to={this.state.url} target="_blank">
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
