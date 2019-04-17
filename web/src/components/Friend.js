import React, { Component } from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';

const Friend = (props) => {

    const goProfile = async() =>{
        //change username?
        props.history.push("/profile");
    }

    const tileData = [
        {
            img: GuildSword,
            title: 'Guild Sword',
        },
        {
            img: Sword,
            title: 'Sword',
        },
        {
            img: BowArrow,
            title: 'Bow Arrow',
        },
        {
            img: Staff,
            title: 'Staff',
        },
        {
            img: Shield,
            title: 'Shield',
        }
    ];

    return (
        <div key={props.id} id={props.id}>
        <List id="friendList" style={{ width: '25rem' }}>
            <ListItem alignItems="flex-start" >
               
                <ListItemAvatar>
                    {/*<Avatar alt="Card image cap" src="/static/images/avatar/2.jpg" onClick={()=>goProfile()}/>*/}
                    {tileData.map(tile => (
                        <Avatar alt="/static/images/avatar/2.jpg" src={tile.img} key={tile.img} onClick={()=>goProfile()}/>     
                    ))}
                </ListItemAvatar>
        
                <ListItemText
                    primary={props.name}
                    secondary={
                        <React.Fragment>
                        <Typography component="span"  color="textPrimary">
                            {props.username}
                        </Typography>
                        <Typography component="span"  color="textSecondary">
                            — Place Holder for latest post
                        </Typography>
                        
                        </React.Fragment>
                    }
                />
            </ListItem>
            <Divider />
        </List>
        </div>
    );
};

export default Friend;
