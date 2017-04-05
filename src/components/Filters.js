import React, { Component } from 'react';

import { List, ListItem, ListItemText } from 'material-ui/List';
import { Menu, MenuItem } from 'material-ui/Menu';
import Layout from 'material-ui/Layout';

const filters = [
  'Most stars',
  'Most recently created',
  'Most recently updated',
  'Most lightweight'
];

class Filters extends Component {
	state = {
    anchorEl: undefined,
    open: false,
    selectedIndex: 0,
  };

  button = undefined;

  handleClickListItem = (event) => this.setState({ open: true, anchorEl: event.currentTarget });

  handleMenuItemClick = (event, index) => this.setState({ selectedIndex: index, open: false });

  handleRequestClose = () => this.setState({ open: false });

	render() {
		return (
			<div>
				<Layout className="item-item" item xs={2} sm={2} md={2}>
					<List>
		          <ListItem
		            button
		            className={"menu-filter"}
		            aria-haspopup="true"
		            aria-controls="lock-menu"
		            onClick={this.handleClickListItem}
		          >
		            <ListItemText
		              primary="Filter by"
		              secondary={filters[this.state.selectedIndex]}
		            />
		          </ListItem>
		        </List>
		        <Menu
		          id="lock-menu"
		          anchorEl={this.state.anchorEl}
		          open={this.state.open}
		          onRequestClose={this.handleRequestClose}
		        >
		          {filters.map((option, index) => {
		            return (
		              <MenuItem
		                key={option}
		                selected={index === this.state.selectedIndex}
		                onClick={(event) => {this.handleMenuItemClick(event, index); this.props.handler(index)}}
		              >
		                {option}
		              </MenuItem>
		            );
		          })}
		        </Menu>
		      </Layout>
        </div>
		);
	}
}

export default Filters;
