import React, { Component, useState } from 'react';
import { Card, CardTitle, CardBody, CardText, Button } from 'reactstrap';

const Post = (props) => {
    const [comment,setComment] = useState('');

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
            <CardTitle tag="h1">{props.username}</CardTitle>
            <CardText tag="p">Place Holder for post content:
    As I unzipped my tent flap I did hear a few howls, but they were distant and not worrying. 
    What stunned me into stillness was a very loud howl from the direction of the lake, about 
    a yard from my tent at most.This howl was different though. It had the feel of a Coyote howl,
    but it was deeper… and it lasted longer.
    I simply sat there petrified at what I heard. I wouldn’t be able to guess at how long I sat 
    there breathing hard with my fingers still grasping the zipper. But however long it may have been
    was just long enough for the… thing… that made that howl to come up the trail next to my tent. 
    Suddenly I heard the crunching of claws on dirt and after that, claws on the rocks that made our 
    camping plots. Then I saw the largest shadow made by a living creature that little kid me had 
    ever seen. It lumbered heavily in the direction of the sparse tree line where I assume the other 
    howling had come from. But before it got past the tree I urinated on it stopped.
            </CardText>
            <input onBlur= { e => commentHandler(e.target.value)} placeholder="Make a comment..."/>
            <Button variant="primary" onClick={()=>addComment()}>Comment</Button>
            </CardBody>
        </Card>
        </div>
    );
};

export default Post;