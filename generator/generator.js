/**
 * Run to create 'src/languages/name_of_language.json' output files.
 */
require('dotenv').config();
const jsonfile = require('jsonfile');
const async = require('async');
const path = require('path');
const GithubApi = require('github');

const Languages = require ('./../src/languages/languages');

// Init Github API
const github = new GithubApi({
  headers: {
    'user-agent': process.env.GITHUB_USER_AGENT,
  }
});
github.authenticate({
  type: 'token',
  token: process.env.GITHUB_TOKEN,
});

// Get infos about Github URL
function getGithubPath(url) {
  return url.replace('https://github.com/', '');
}
function getGithubOwner(url) {
	return getGithubPath(url).split('/')[0];
}
function getGithubName(url) {
	return getGithubPath(url).split('/')[1];
}

function growRepo(repo, outerCallback) {
	const repoInfo = {
		githubUrl  : repo,
		githubOwner: getGithubOwner(repo),
		githubName : getGithubName(repo)
	};

	function getRepo(callback) {
		github.repos.get({
		  owner: repoInfo.githubOwner,
		  repo : repoInfo.githubName
		}, callback);
	}

	async.parallel([getRepo], (error, results) => {
		if (error) {
      outerCallback(error, null);
      return;
    }
		var response = results[0];
		const tree = {
			githubUrl        : repo,
			githubOwner      : repoInfo.githubOwner,
			githubName       : repoInfo.githubName,
			githubDescription: response.data.description,
			githubSize       : response.data.size,
			githubAvatar     : response.data.owner.avatar_url,
			githubForks      : response.data.forks_count,
			githubStars      : response.data.stargazers_count,
			githubWatchers   : response.data.subscribers_count,
			githubCreated_at : response.data.created_at,
			githubUpdated_at : response.data.updated_at
		};
		 outerCallback(null, tree);
	});
}

function growRepos(repoList, callback) {
	async.mapSeries(repoList, (repo, cb) => {
		growRepo(repo, cb);
	}, callback);
}

Languages.map((language) => {
	return growRepos(language.repositories, (error, trees) => {
		// Append response to file
		const jsonOutputPath = path.join(__dirname, '..', 'src', 'languages', `${language.lang.toLowerCase()}.json`);
		jsonfile.writeFileSync(jsonOutputPath, trees, {spaces: 2})
	})
});
