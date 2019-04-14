import React from 'react';

import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import SearchIcon from '@material-ui/icons/Search';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import styles from "./header_style"


class SearchFriendForm extends React.Component {
  constructor() {
    super();
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    const form = event.target;
    const data = new FormData(form);

    console.log(event.target.elements.search.value)
   
    /*
    fetch('/api/form-submit-url', {
      method: 'POST',
      body: data,
    });
    */
  }

  render() {
    const { classes } = this.props;
    return (
        <form className={classes.searchForm} onSubmit={this.handleSubmit}>
        <div className={classes.inputWrap}>
            <InputBase  className={classes.searchInput}
                name="search"
                placeholder="Add a friend..."
                classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
            }}
            />
        </div>
        <div className={classes.buttonWrap}>
            <Button type="submit" className={classes.searchButton} >
            <SearchIcon />
            </Button>
        </div>
      </form>
    );
  }
}

export default withStyles(styles)(SearchFriendForm);