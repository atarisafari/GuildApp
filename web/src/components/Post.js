import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button } from 'reactstrap';
import LikeButton from '@material-ui/icons/FavoriteBorder';
import CommentButton from '@material-ui/icons/Comment';
import ToggleIcon from 'material-ui-toggle-icon'
import Badge from '@material-ui/core/Badge';
import IconButton from '@material-ui/core/IconButton'
import Visibility from '@material-ui/icons/Visibility'
import VisibilityOff from '@material-ui/icons/VisibilityOff'

const Post = (props) => {
    return (
        <div>
            
        <Card style={{ width: '30rem' }}>
            <CardBody>
            <CardTitle tag="h1"> {props.username}</CardTitle>
            <CardText tag="p">{props.content}</CardText>
            
            {/*Like Button*/}
            <IconButton>
                
                <LikeButton />
                
            </IconButton>

            {/*Comment Button*/}

            <IconButton >
            
                <CommentButton />
                
            </IconButton>

            </CardBody>
        </Card>
        </div>
    );
};


export default Post;

