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
        props.history.push("/profile");
    }

    return (
        <div key={props.id} id={props.id}>
            {/*
        <Card style={{ width: '18rem' }}>
            <CardImg top width="100%" src="holder.js/100px180" alt="Card image cap" />
            <CardBody>
            <CardTitle tag="h1"> {props.name}</CardTitle>
            <CardSubtitle tag="h5">{props.username}</CardSubtitle>
            <CardText tag="p">Place Holder for latest post</CardText>
            <Button variant="primary" onClick={()=>goProfile()}>Profile</Button>
            </CardBody>
        </Card>
        */}
        <List id="friendList" >
            <ListItem alignItems="flex-start">
               
                <ListItemAvatar>
                    <Avatar alt="Card image cap" src="/static/images/avatar/2.jpg" onClick={()=>goProfile()}/>
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
