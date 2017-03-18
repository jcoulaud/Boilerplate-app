import React, { Component } from 'react';
import axios from 'axios';
import Layout from 'material-ui/Layout';
import { Card, CardContent } from 'material-ui/Card';
import { Avatar } from 'material-ui/Avatar';
import IconButton from 'material-ui/IconButton';
import Text from 'material-ui/Text';

class CreateItem extends Component {
	state = {
		avatar: ""
	}

	componentWillMount() {
		const repo = this.props.repo.repo;
		const author = this.props.repo.author;
		axios.get(`https://api.github.com/repos/${author}/${repo}`)
	  .then((response) => {
	    console.log(response);
	    this.setState({ avatar: response.data.owner.avatar_url });
	  })
	  .catch((error) => {
	    console.log(error);
	  });
	}

	render() {
		return (
			<Layout className="item-item" item xs={12}>
				<Card className="card">
					<div className="item-image">
	          <Avatar src={this.state.avatar} alt="Avatar" />
	        </div>
	        <div className="item-content">
	          <CardContent className="content">
	            <Text type="headline">{this.props.repo.author}/this.props.repo.repo</Text>
	            <Text type="subheading" secondary>
	              Mac Miller
	            </Text>
	          </CardContent>
	          <div className="controls">
	            <IconButton>skip_previous</IconButton>
	            <IconButton iconClassName="playIcon">play_arrow</IconButton>
	            <IconButton>skip_next</IconButton>
	          </div>
	        </div>

	      </Card>
			</Layout>
		);
	}
}

export default CreateItem;
