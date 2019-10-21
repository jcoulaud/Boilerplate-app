import React, { Component } from 'react';
import moment from 'moment';

import { Button, Card, CardContent, Grid, Typography } from '@material-ui/core';
import {
  GoEye,
  GoStar,
  GoRepoForked,
  GoClock,
  GoDatabase,
} from 'react-icons/go';

class CreateItem extends Component {
  renderRepo() {
    const repo = this.props.repo;
    return (
      <Grid className="item-item" item xs={10} sm={10} md={12}>
        <Card className="card">
          <div className="card-content-top">
            <div className="item-image">
              <img src={repo.githubAvatar} alt="Avatar" />
            </div>

            <div className="item-content-left">
              <CardContent>
                <Typography type="headline">
                  <span className="author">{repo.githubOwner}</span>
                  <span className="separator"> / </span>
                  <span className="repo">{repo.githubName}</span>
                </Typography>
                <Typography type="subheading" secondary>
                  {repo.githubDescription}
                </Typography>
              </CardContent>
            </div>

            <div className="item-content-right">
              <span className="item-content-icon">
                <GoEye /> Watch: {repo.githubWatchers}
              </span>
              <span className="item-content-icon">
                <GoStar /> Star: {repo.githubStars}
              </span>
              <span className="item-content-icon">
                <GoRepoForked /> Fork: {repo.githubForks}
              </span>
            </div>
          </div>

          <div className="card-content-bottom">
            <div className="card-content-subline">
              <span className="card-content-subline-dates">
                <GoDatabase /> {Math.round(repo.githubSize / 100) / 10} MB
              </span>
              <span className="card-content-subline-dates">
                <GoClock /> Created:{' '}
                {moment(repo.githubCreated_at).format('MMMM Do YYYY')}{' '}
              </span>
              <span className="card-content-subline-dates">
                <GoClock /> Last Update:{' '}
                {moment(repo.githubUpdated_at).fromNow('dd')} ago
              </span>
            </div>
            <div className="card-content-button">
              <a
                href={repo.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button raised accent>
                  More details +
                </Button>
              </a>
            </div>
          </div>
        </Card>
      </Grid>
    );
  }

  render() {
    return this.renderRepo();
  }
}

export default CreateItem;
