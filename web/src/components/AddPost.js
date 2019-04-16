
import React, { Component, useState } from 'react';
import {addPost} from '../utils/apiCalls';
import { Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button } from 'reactstrap';
import Popup from "reactjs-popup";
import Camera from '@material-ui/icons/CameraAlt';
import ToggleIcon from 'material-ui-toggle-icon'
import IconButton from '@material-ui/core/IconButton'
import axios from 'axios';
import Dropzone from 'react-dropzone';
import request from 'superagent';
import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';


const AddPost = (props) => {
    console.log('props: ', props); 
    const [content,setContent] = useState('');
    const token = localStorage.getItem('token');

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
        <div id={props.id}>
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
                </button>
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
    );
};


export default AddPost;

