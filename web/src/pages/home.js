
import React, { useContext, useState, useEffect  } from 'react'
import {addPost} from '../utils/apiCalls';
import Friend from '../components/Friend';
import Post from '../components/Post';
import Header_component from '../components/header/Header_component';
import axios from 'axios';
import Dropzone from 'react-dropzone';
import request from 'superagent';
import Popup from "reactjs-popup";
import Camera from '@material-ui/icons/CameraAlt';
import { Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button } from 'reactstrap';
import IconButton from '@material-ui/core/IconButton';
import TextField from '@material-ui/core/TextField';
import Divider from '@material-ui/core/Divider';
import InputAdornment from '@material-ui/core/InputAdornment';

export default props => {
    console.log('props: ', props); 
    const token = localStorage.getItem('token');
    //const friends = grabAllFriends(token);
    const [content,setContent] = useState('');
    const friends = [{
        name: 'Jon',
        username: 'DogMan',
    },
    {
        name: 'Doe',
        username: 'DogWoman',
    }];
    const posts = [{
        name: 'Jon',
        username: 'DogMan',
    },
    {
        name: 'Doe',
        username: 'DogWoman',
    }];

    useEffect(()=>{//This will run once and then only if token changes
        if(token === null){ //If token is lost 
            //Or user accessed paged without login in
            //Or if Boogie-Man went back from browser history and tried to login as the previous user
            alert("Please Login to verify your identity\nYou will now be redirected to the Login page.");
            logout();
        }
    }, [token]); //If this variable changes, this code will be run again

    useEffect(()=>{//This will be executed always after the components have been rendered
        //
    },[]);//Array that contains all variables that if changed then that function should run again. [] = componentDidMount
    
    useEffect(()=>{ 
        //No logic
        return()=>{
            console.log("Component did unMount");
        }
    }, [] );
    
    const LoadingIndicator = isLoading =>{
        if (isLoading) {
            return (
            <div>
                <p>Loading...</p>
            </div>
            );
        } else {
            return null;
        }
    }

    const logout = async() =>{
        localStorage.clear();
        props.history.push("/");
    }

    const contentHandler = content=>{
        setContent(content);
        console.log(content);
    }

    const addPostHandler = async() =>{
        
        let data = await addPost(token, content);
        console.log("Result" , data);
        if(data.error === ""){
            console.log("Add post was successful");
        }
        else{
            alert(data.error);
        }
    }

    return (
        <div className="App">
            <Header_component props={props}/>
            
            <h1> Home Page </h1> 
            {/* <Home />  */}
            {
                friends.map((value, index) => {
                    return <Friend key={index} name={value.name} username={value.username}  /*{...props}*/></Friend>
                })
            }
            
            {
                posts.map((value, index) => {
                    return <div >
                        <Post key={index} username={value.username}  content={value.content}/*{...props}*/></Post>
                        </div>
                })
            }
            <div id="content_post">
            <Card style={{ width: '25rem' }}>
            <Popup trigger={
                <button>
                    <TextField 
                        id="textPopUp" 
                        fullWidth 
                        placeholder="Add a post..." 
                        InputProps={{
                            endAdornment: <InputAdornment position="end"> <Camera /></InputAdornment>,
                        }}
                    /> 
                < /button>
                } position="bottom center" modal > 

            {cancel => (
                <div id="cancel">
                    <CardTitle tag="h1"> User Display Name</CardTitle>
                    <CardBody>
                        <div id="postContent">
                            <form autoComplete="off">
                            <TextField id="textArea" placeholder="Add a post..." fullWidth margin="none" multiline rows="2" onBlur= {e => contentHandler(e.target.value)}/>
                            </form>
                        </div>
                        
                        <div id="postImage">
                            <IconButton><Camera /> </IconButton>
                        </div>
                       
                        <div id="buttons">
                        <Button type="submit" class="btn btn-primary" onClick={()=>addPostHandler()}>POST</Button>
                        <a href="#" className="cancel" onClick={cancel}> Cancel </a>
                        </div>
                   
                    </CardBody>
                </div>
                )}
            </Popup>
                
                </Card>
            </div>
            <button onClick={()=>logout()}> LOG OUT </button>
        </div>
    )
}
