
import React, { Component, useState , useEffect } from 'react';
import {addPost} from '../utils/apiCalls';
import { Card, CardBody, CardTitle, Button } from 'reactstrap';
import Popup from "reactjs-popup";
import Camera from '@material-ui/icons/CameraAlt';
import axios from 'axios';
import request from 'superagent';
import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';
import {useDropzone} from 'react-dropzone';
import {withStyles} from '@material-ui/core/styles';
import styles from '../styles/add_post_style';


const thumbsContainer = {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 16
};
  
const thumb = {
    display: 'inline-flex',
    borderRadius: 2,
    border: '1px solid #eaeaea',
    marginBottom: 8,
    marginRight: 8,
    width: 100,
    height: 100,
    padding: 4,
    boxSizing: 'border-box'
};
  
const thumbInner = {
    display: 'flex',
    minWidth: 0,
    overflow: 'hidden'
};
  
const img = {
    display: 'block',
    width: 'auto',
    height: '100%'
};

const AddPost = (props) => {
    console.log('props: ', props); 
    const [content,setContent] = useState('');
    const token = localStorage.getItem('token');
    const [files, setFiles] = useState([]);
    const {classes} = props;

    const {getRootProps, getInputProps} = useDropzone({
        accept: 'image/*',
        onDrop: acceptedFiles => {
        setFiles(acceptedFiles.map(file => Object.assign(file, {
            preview: URL.createObjectURL(file)
        })));
        }
    });

    const imageUpload = files.map(file => (
        <div style={thumb} key={file.name}>
          <div style={thumbInner}>
                
            <img
            src={file.preview}
            style={img}
            />
            
          </div>
          <Button close size="sm" position='absolute'/>
        </div>
    ));
    
    useEffect(() => () => {
    // Make sure to revoke the data uris to avoid memory leaks
    files.forEach(file => URL.revokeObjectURL(file.preview));
    }, [files]);

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
            <Card  className={classes.add_post}>
                <Popup  className={classes.add_post_popup} trigger={
                    <button  className={classes.add_post_button}>
                        <TextField 
                            className={classes.add_post_input}
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
                            <CardTitle className={classes.add_post_title} tag="h1"> User Display Name</CardTitle>
                            <CardBody>
                                <div id="postContent">
                                    <form autoComplete="off">
                                        <TextField 
                                            id="textArea" 
                                            placeholder="Add a post..." 
                                            fullWidth margin="none" 
                                            multiline rows="5" 
                                            onBlur= {e => contentHandler(e.target.value)}
                                        />
                                    </form>
                                </div>
                                
                                <div id="postImage"> 
                                    <section className="container">
                                        <div {...getRootProps({className: 'dropzone'})}>
                                            <input {...getInputProps()} />
                                            <Camera style = {{cursor: 'pointer', margin:'10px',width:'30px',height:'30px',}} / >
                                        </div>
                                        <aside style={thumbsContainer}>
                                            {imageUpload}
                                        </aside>
                                    </section>
                                    
                                </div>

                                <div id="buttons">
                                <Button  className={classes.post_button} type="submit" class="btn btn-primary" onClick={()=>addPostHandler()}>POST</Button>
                                <Button  className="cancel" className={classes.post_cancel_button} onClick={cancel}>Cancel</Button>
                                </div>

                            </CardBody>
                        </div>
                    )}
            
                
                </Popup>
                    
            </Card>
        </div>
    );
};


export default withStyles(styles)(AddPost);

