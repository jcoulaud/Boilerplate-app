import axios from 'axios';

function getGithubPath(url) {
  return url.replace('https://github.com/', '');
}

function getGithubOwner(url) {
	return getGithubPath(url).split('/')[0];
}

function getGithubName(url) {
	return getGithubPath(url).split('/')[1];
}

module.exports = function Repository(url) {
	const repoInfo = {
		githubUrl: url,
		githubOwner: getGithubOwner(url),
		githubName: getGithubName(url)
	};

	return (
		axios.get(`https://api.github.com/repos/${repoInfo.githubOwner}/${repoInfo.githubName}`)
		  .then((response) => {
		    const repo = {
		    	githubUrl: repoInfo.githubUrl,
		    	githubOwner: repoInfo.githubOwner,
					githubName: repoInfo.githubName,
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
		  })
	);
}

// export default Repository;
