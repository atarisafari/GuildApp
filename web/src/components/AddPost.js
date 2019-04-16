
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
import {useDropzone} from 'react-dropzone';


const AddPost = (props) => {
    console.log('props: ', props); 
    const [content,setContent] = useState('');
    const [imageUpload,setImageUpload] = useState('');
    const token = localStorage.getItem('token');
    const {acceptedFiles, getRootProps, getInputProps} = useDropzone();

    const contentHandler = content=>{
        setContent(content);
        console.log(content);
    }

    const imageUploadHandler = imageUpload=>{
        const reader = new FileReader();
        reader.onload = () => {
            const binaryStr = reader.result
            console.log(binaryStr)
          }
        setImageUpload(imageUpload);
        console.log(imageUpload);
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

    const files = acceptedFiles.map(file => (
        <li key={file.path}>
          {file.path} - {file.size} bytes
        </li>
      ));
    
    

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
                                    <TextField id="textArea" placeholder="Add a post..." fullWidth margin="none" multiline rows="5" onBlur= {e => contentHandler(e.target.value)}/>
                                </form>
                            </div>
                            
                            <div id="postImage"> 
                                <Dropzone onDrop={acceptedFiles => console.log(acceptedFiles)}>
                                    {({getRootProps, getInputProps}) => (
                                        <section>
                                            <div {...getRootProps()}>
                                            <input {...getInputProps()} />

                                            <Camera />
                                            </div>
                                        </section>
                                    )}
                                </Dropzone>
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

