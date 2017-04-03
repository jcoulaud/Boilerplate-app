import React, { Component } from 'react';
import axios from 'axios';

function getGithubPath() {
  return this.props.replace('https://github.com/', '');
}

function getGithubOwner() {
	return this.getGithubPath().split('/')[0];
}

function getGithubName() {
	return this.getGithubPath().split('/')[1];
}

const Repository = (props) => {
	const name = this.getGithubName();
		const owner = this.getGithubOwner();
		axios.get(`https://api.github.com/repos/${owner}/${name}`)
	  .then((response) => {
		  const repo = {
		  	githubName: name,
		  	githubOwner: owner,
		  	githubDescription: response.data.description,
		  	githubSize: response.data.size,
		  	githubAvatar: response.data.owner.avatar_url,
		  	githubForks: response.data.forks_count,
				githubStars: response.data.stargazers_count,
				githubWatchers: response.data.subscribers_count,
				githubCreated_at: response.data.created_at,
				githubUpdated_at: response.data.updated_at
		  };
		  return repo;
	  })
	  .catch((error) => {
	    console.log(error);
	  });
}

export default Repository;

// class Repository extends Component {
// 	constructor(props) {
// 		super(props);
// 		const name = this.getGithubName();
// 		const owner = this.getGithubOwner();
// 		axios.get(`https://api.github.com/repos/${owner}/${name}`)
// 	  .then((response) => {
// 	    this.state = {
// 	    	githubName: name,
// 	    	githubOwner: owner,
// 	    	githubDescription: response.data.description,
// 	    	githubSize: response.data.size,
// 	    	githubAvatar: response.data.owner.avatar_url,
// 	    	githubForks: response.data.forks_count,
// 				githubStars: response.data.stargazers_count,
// 				githubWatchers: response.data.subscribers_count,
// 				githubCreated_at: response.data.created_at,
// 				githubUpdated_at: response.data.updated_at
// 	    };
// 	  })
// 	  .catch((error) => {
// 	    console.log(error);
// 	  });
// 	}

// 	getGithubPath() {
//     return this.props.replace('https://github.com/', '');
//   }

// 	getGithubOwner() {
// 		return this.getGithubPath().split('/')[0];
// 	}

// 	getGithubName() {
// 		return this.getGithubPath().split('/')[1];
// 	}

// 	render() {
// 		const obj = this.state;
// 		return obj;
// 	}
// }

// export default Repository;