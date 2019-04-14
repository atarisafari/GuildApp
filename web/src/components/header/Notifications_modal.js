import React from 'react';

import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import Badge from '@material-ui/core/Badge';
import SettingsIcon from '@material-ui/icons/Settings';
import LogOutIcon from '@material-ui/icons/Close';
import AccountCircle from '@material-ui/icons/AccountCircle';
import NotificationsIcon from '@material-ui/icons/Notifications';
import { withStyles } from '@material-ui/core/styles';
import styles from "./header_style"


class NotificationsModal extends React.Component {
  constructor() {
    super();
  }

  state = {
   notificationsModalAnchorEl:null,
  };

  handleNotifiationsModalOpen= event => {
    console.log("Mobile menu should open")
    this.setState({ notificationsModalAnchorEl: event.currentTarget });
  };

  handleNotifcationsModalClose = () => {
    this.setState({ notificationsModalAnchorEl: null });
  };

  render() {
    
    let notifications_amount = 4;
    const {  notificationsModalAnchorEl} = this.state;
    const isNotificationsModalOpen = Boolean(notificationsModalAnchorEl);
    const { classes } = this.props;
    
    return (

      <Menu 
        className={classes.notificationsModal}
        anchorEl={notificationsModalAnchorEl}
        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
        transformOrigin={{ vertical: 'top', horizontal: 'right' }}
        open={isNotificationsModalOpen}
        onClose={this.handleNotifcationsModalClose}
      >
        <MenuItem onClick={this.handleMobileMenuClose}>
          <Badge className={classes.popMenuIcons} badgeContent={notifications_amount} color="secondary">
            <NotificationsIcon />
          </Badge>
          <p>Notifications</p>
        </MenuItem>
        <MenuItem onClick={this.handleMenuClose}>
            <AccountCircle className={classes.popMenuIcons} />
          <p>Profile</p>
        </MenuItem>
        <MenuItem onClick={this.handleMenuClose}>
              <SettingsIcon className={classes.popMenuIcons}/>
          <p>Settings</p>
        </MenuItem>
        <MenuItem onClick={this.handleMenuClose}>
                <LogOutIcon className={classes.popMenuIcons}/>
          <p>Logout</p>
        </MenuItem>
      </Menu>
    );
  }
}

export default withStyles(styles)(NotificationsModal);