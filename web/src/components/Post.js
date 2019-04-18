
import React, { Component, useState } from 'react';
import LikeButton from '@material-ui/icons/FavoriteBorder';
import CommentButton from '@material-ui/icons/Comment';
import IconButton from '@material-ui/core/IconButton'
import { Card, CardText, CardBody,
    CardTitle, Button } from 'reactstrap';
import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';


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
        console.log(comment);
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

    const ToggleContent = ({ toggle, content }) => {
        const [isShown, setIsShown] = useState(false);
        const hide = () => setIsShown(false);
        const show = () => setIsShown(true);
        
        return (
        <React.Fragment>
            {toggle(show)}
            {isShown && content(hide)}
        </React.Fragment>
        );
    };
    

    return (
        <div id={props.id} >
            <Card style={{ width: '30rem', margin: '10px'}} elevation={4} >
                <CardBody>
                    <CardTitle tag="h1"> {user}</CardTitle>
                    <CardText tag="p">
                       
                           
                        {props.content}
                           
                       
                    </CardText>
                <IconButton >
                            <LikeButton />
                </IconButton>
            
                <ToggleContent
                    toggle={show => <IconButton onClick={show}><CommentButton/></IconButton>}
                    content={hide => (
                        <div>
                            <TextField 
                                id="textPopUp" 
                                fullWidth 
                                multiline
                                placeholder="Make a comment..." 
                                onBlur= { e => commentHandler(e.target.value)}
                                InputProps={{
                                    endAdornment: 
                                        <InputAdornment position="end">     
                                            <Button variant="primary" size="small" onClick={()=>addComment()}>
                                                Comment
                                            </Button>
                                        </InputAdornment>,
                                }}
                            /> 
                        
                        </div>
                    )}
                />
              

                </CardBody>
            </Card>
        </div>
    );
};


export default Post;

