
/* Dependencies Import */
import React from 'react';

import { withStyles } from '@material-ui/core/styles';
import AccountCircle from '@material-ui/icons/AccountCircle';
import headerstyles from "../../styles/header_style"



class ProfileAvatar extends React.Component{

    render(){
        const { classes } = this.props;
        if(this.props.profileImageLink != ''){
            let profilePic = './logo.png';
            return(

                <a className={classes.profileAvatar} ></a>
            ) 
        }
        else{
            let profilePic = this.props.profileImageLink;
            return(
                /*<AccountCircle />*/
                <a className={classes.profileAvatar} ></a>
            )
        }
    }
}

export default withStyles(headerstyles)(ProfileAvatar);