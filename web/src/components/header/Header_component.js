/* Dependencies Import */
import React from 'react';
import PropTypes from 'prop-types';

/* Material UI imports */
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
import styles from '../../styles/header_style';
import SearchFriendForm from "./header_form"
import ProfileAvatar from "./SmallProfileAvatar"

class Header_component extends React.Component {
  constructor() {
    super();
  }
  
  state = {
    anchorEl: null,
    mobileMoreAnchorEl: null,
    notificationsModalAnchorEl:null,
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

  handleNotificationsModalOpen = event => {
    this.setState({ notificationsModalAnchorEl: event.currentTarget });
  }

  handleNotifcationsModalClose = () => {
    this.setState({ notificationsModalAnchorEl: null });
  };

  handleLogout = async() =>{
    localStorage.clear();
    this.props.props.history.push("/");
  }

  goProfile = async() =>{
    localStorage.setItem('usernameFriend', '');
    this.props.props.history.push("/profile");
  }

  goHome = async() =>{
    this.props.props.history.push("/home");
  }

  render() {
    console.log(this.props.data)
    const { anchorEl, mobileMoreAnchorEl } = this.state;
    const {  notificationsModalAnchorEl} = this.state;
    const { classes } = this.props;
    const isMenuOpen = Boolean(anchorEl);
    const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);
    const isNotificationsModalOpen = Boolean(notificationsModalAnchorEl);

    let notifications_amount = this.props.data.length

    let notifications_markup = this.props.data.map((notification, index) => {

      return(
        <MenuItem onClick={this.handleNotifcationsModalClose}>             
          <ProfileAvatar/>
          <p className={classes.notificationsModalText}> {notification.user}  {notification.message}</p>
        </MenuItem>

      )
    })

    const renderNotificationsModal = (
    
      <Menu 
        className={classes.notificationsModal}
        anchorEl={notificationsModalAnchorEl}
        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
        transformOrigin={{ vertical: 'top', horizontal: 'right' }}
        open={isNotificationsModalOpen}
        onClose={this.handleNotifcationsModalClose}
      >
        {notifications_markup}
      </Menu>
    );
    

    const renderMenu = (
      <Menu
        className={classes.desktopMenu}
        anchorEl={anchorEl}
        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
        transformOrigin={{ vertical: 'top', horizontal: 'right' }}
        open={isMenuOpen}
        onClose={this.handleMenuClose}
      >
        <MenuItem onClick={() =>{this.handleMenuClose(); this.goProfile();}}>
            <AccountCircle className={classes.popMenuIcons} />
          <p>Profile</p>
        </MenuItem>
        <MenuItem onClick={this.handleMenuClose}>
              <SettingsIcon className={classes.popMenuIcons}/>
          <p>Settings</p>
        </MenuItem>
        <MenuItem onClick={() =>{this.handleMenuClose(); this.handleLogout();}}>
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
        <MenuItem onClick={()=>{ this.handleMobileMenuClose(); }}>
          <Badge className={classes.popMenuIcons} badgeContent={notifications_amount} color="secondary">
            <NotificationsIcon />
          </Badge>
          <p>Notifications</p>
        </MenuItem>
        <MenuItem onClick={() =>{this.handleMenuClose(); this.goProfile();}}>
            <AccountCircle className={classes.popMenuIcons} />
          <p>Profile</p>
        </MenuItem>
        <MenuItem onClick={this.handleMenuClose}>
              <SettingsIcon className={classes.popMenuIcons}/>
          <p>Settings</p>
        </MenuItem>
        <MenuItem onClick={() =>{this.handleMenuClose(); this.handleLogout();}}>
                <LogOutIcon className={classes.popMenuIcons}/>
          <p>Logout</p>
        </MenuItem>
      </Menu>
    );
    let profileImageLink = '../../imgs/0_GuildSword_Icon.png';
  
    return (
      <div className={classes.root}>
        <div className={classes.mainBar} position="static">
          <Toolbar>
              <a className={classes.logo} onClick={this.goHome}>{this.props.props.children}</a>
              <SearchFriendForm/>
            <div className={classes.grow} />
            <div className={classes.sectionDesktop}>
              <IconButton color="inherit" onClick={this.handleNotificationsModalOpen}>
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
        {renderNotificationsModal}
      </div>
    );
  }
}

Header_component.propTypes = {
  classes: PropTypes.object.isRequired,
};

Header_component.defaultProps = {
  data:[
    {"user": "justiscezager1234", "message":"Liked your post"},
    {"user": "justiscezager1234","message":"Commented on your post"},
    {"user": "justiscezager1234", "message":"Send you a friend request"},
    {"user": "justiscezager1234", "message":"Accepted your friend request"},
  ],
}

/*
Header_component.defaultProps = {
  data: 
}
*/

export default withStyles(styles)(Header_component);