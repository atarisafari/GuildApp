
import React, { Component, useState } from 'react';
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
    const [comment,setComment] = useState('');
    let user = '';
    if(props.username===''){
        user = localStorage.getItem('username');
    }else{
        user = props.username;
    }
    const commentHandler = comment=>{
        setComment(comment);
    }

    const addComment = async() =>{
        if(comment === ''){ //If passwords don't match then dont make the api call
            alert("Can't add an empty comment");
        }
        // else{
        //     let data = await signUp(username,password,display_name,profile_pic_url);
        //     console.log("Result" , data);
        //     if(data.error === ""){
        //         //TODO
        //         console.log("Sign up was successful");
        //         props.history.push("/");
        //     }
        //     else{
        //         alert(data.error);
        //     }
        // }
        
    }

    return (
        <div id={props.id}>
            
        <Card style={{ width: '30rem' }}>
            <CardBody>
            <CardTitle tag="h1"> {user}</CardTitle>
            <CardText tag="p">{props.content}</CardText>
            {/*Like Button*/}
            <IconButton>
                
                <LikeButton />
                
            </IconButton>

            {/*Comment Button*/}

            <IconButton >
            
                <CommentButton />
                
            </IconButton>
       
        
            <input onBlur= { e => commentHandler(e.target.value)} placeholder="Make a comment..."/>
            <Button variant="primary" onClick={()=>addComment()}>Comment</Button>

            </CardBody>
        </Card>
        </div>
    );
};


export default Post;

