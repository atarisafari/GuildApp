/* Dependencies Import */
import React from 'react';
import PropTypes from 'prop-types';

/* Material UI imports */
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Badge from '@material-ui/core/Badge';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import { withStyles } from '@material-ui/core/styles';
import AccountCircle from '@material-ui/icons/AccountCircle';
import NotificationsIcon from '@material-ui/icons/Notifications';
import SettingsIcon from '@material-ui/icons/Settings';
import LogOutIcon from '@material-ui/icons/Close';
import MoreIcon from '@material-ui/icons/MoreVert';

/* components and files import*/
import styles from "./header_style"
import SearchFriendForm from "./header_form"
import ProfileAvatar from "./SmallProfileAvatar"

class Header_component extends React.Component {
  state = {
    anchorEl: null,
    mobileMoreAnchorEl: null,
  };

  handleProfileMenuOpen = event => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleMenuClose = () => {
    this.setState({ anchorEl: null });
    this.handleMobileMenuClose();
  };

  handleMobileMenuOpen = event => {
    this.setState({ mobileMoreAnchorEl: event.currentTarget });
  };

  handleMobileMenuClose = () => {
    this.setState({ mobileMoreAnchorEl: null });
  };

  render() {
    const { anchorEl, mobileMoreAnchorEl } = this.state;
    const { classes } = this.props;
    const isMenuOpen = Boolean(anchorEl);
    const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

    let notifications_amount = 4;

    const renderMenu = (
      <Menu
        className={classes.desktopMenu}
        anchorEl={anchorEl}
        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
        transformOrigin={{ vertical: 'top', horizontal: 'right' }}
        open={isMenuOpen}
        onClose={this.handleMenuClose}
      >
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

    const renderMobileMenu = (
      <Menu 
        className={classes.mobileMenu}
        anchorEl={mobileMoreAnchorEl}
        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
        transformOrigin={{ vertical: 'top', horizontal: 'right' }}
        open={isMobileMenuOpen}
        onClose={this.handleMenuClose}
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

    let profileImageLink = '';
  
    return (
      <div className={classes.root}>
        <div className={classes.mainBar} position="static">
          <Toolbar>
              <IconButton className={classes.logoButton}>
                <a className={classes.logo} href="Home"></a>
              </IconButton>
              <SearchFriendForm/>
            <div className={classes.grow} />
            <div className={classes.sectionDesktop}>
              <IconButton color="inherit" onClick={this.handleMenuClose}>
                <Badge badgeContent={notifications_amount} color="secondary">
                  <NotificationsIcon />
                </Badge>
              </IconButton>
              <IconButton className={classes.profileButton}
                aria-owns={isMenuOpen ? 'material-appbar' : undefined}
                aria-haspopup="true"
                onClick={this.handleProfileMenuOpen}
                color="inherit"
              >
               <ProfileAvatar profileImageLink={profileImageLink}/>
              </IconButton>
            </div>
            <div className={classes.sectionMobile}>
              <IconButton aria-haspopup="true" onClick={this.handleMobileMenuOpen} color="inherit">
                <MoreIcon />
              </IconButton>
            </div>
          </Toolbar>
        </div>
        {renderMenu}
        {renderMobileMenu}
      </div>
    );
  }
}

Header_component.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Header_component);