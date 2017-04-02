module.exports = class Repository {
	constructor(props) {
		this.githubUrl = props;
		this.githubPath = this.getGithubPath();
		this.githubOwner = this.getGithubOwner();
		this.githubName = this.getGithubName();
	}

	getGithubPath() {
    return this.githubUrl.replace('https://github.com/', '');
  }

	getGithubOwner() {
		return this.getGithubPath().split('/')[0];
	}

	getGithubName() {
		return this.getGithubPath().split('/')[1];
	}
}
