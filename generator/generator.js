/**
 * Run to create 'src/languages/name_of_language.json' output files.
 */
require("dotenv").config();
const jsonfile = require("jsonfile");
const async = require("async");
const path = require("path");
const { Octokit } = require("@octokit/rest");
const fs = require("fs");

const languagesDirectory = path.join(__dirname, "..", "src", "languages");
const Languages = require("./../src/languages/languages");

// Remove old languages files
fs.readdir(languagesDirectory, (err, files) => {
  if (err) throw err;

  for (const file of files) {
    if (file !== "languages.js") {
      fs.unlinkSync(path.join(languagesDirectory, file), err => {
        if (err) throw err;
      });
    }
  }
});

// Init Github API
const octokit = new Octokit({
  auth: process.env.GITHUB_TOKEN,
  userAgent: process.env.GITHUB_USER_AGENT
});

// Get infos about Github URL
function getGithubPath(url) {
  return url.replace("https://github.com/", "");
}
function getGithubOwner(url) {
  return getGithubPath(url).split("/")[0];
}
function getGithubName(url) {
  return getGithubPath(url).split("/")[1];
}

function growRepo(repo, outerCallback) {
  const repoInfo = {
    githubUrl: repo,
    githubOwner: getGithubOwner(repo),
    githubName: getGithubName(repo)
  };

  function getRepo(callback) {
    octokit.repos
      .get({
        owner: repoInfo.githubOwner,
        repo: repoInfo.githubName
      })
      .then(results => callback(results));
  }

  async.parallel([getRepo], result => {
    var { data } = result;
    const tree = {
      githubUrl: repo,
      githubOwner: repoInfo.githubOwner,
      githubName: repoInfo.githubName,
      githubDescription: data.description,
      githubSize: data.size,
      githubAvatar: data.owner.avatar_url,
      githubForks: data.forks_count,
      githubStars: data.stargazers_count,
      githubWatchers: data.subscribers_count,
      githubCreated_at: data.created_at,
      githubUpdated_at: data.updated_at
    };
    outerCallback(null, tree);
  });
}

function growRepos(repoList, callback) {
  async.mapSeries(
    repoList,
    (repo, cb) => {
      growRepo(repo, cb);
    },
    callback
  );
}

Languages.map(language => {
  return growRepos(language.repositories, (error, trees) => {
    // Append response to file
    const jsonOutputPath = path.join(
      __dirname,
      "..",
      "src",
      "languages",
      `${language.lang.toLowerCase()}.json`
    );
    jsonfile.writeFileSync(jsonOutputPath, trees, { spaces: 2 });
  });
});
