import React from 'react';

import Button from '@material-ui/core/Button';
import InputBase from '@material-ui/core/InputBase';
import SearchIcon from '@material-ui/icons/Search';
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
  
  searchFriend = async() =>{
    console.log("Searching");
  }

  addFriend = async() =>{
    console.log("Adding");
  }

  render() {
    const { classes } = this.props;

    return (
        <form className={classes.searchForm} onSubmit={this.handleSubmit}>
        <div className={classes.inputWrap}>
            <InputBase  className={classes.searchInput}
                name="search"
                placeholder="Search or Add a friend..."
                classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
            }}
            />
        </div>
        <div className={classes.buttonWrap}>
            <Button type="submit" onClick={this.searchFriend} className={classes.searchButton} >
            <SearchIcon />
            </Button>
        </div>
        <div className={classes.buttonWrap}>
            <Button type="submit" onClick={this.addFriend} className={classes.searchButton}>Add</Button>
        </div>
      </form>
    );
  }
}

export default withStyles(styles)(SearchFriendForm);