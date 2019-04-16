import React, { useContext, useState, useEffect  } from 'react';
import {grabAllFriends, grabAllPosts, addPost} from '../utils/apiCalls';
import Friend from '../components/Friend';
import Post from '../components/Post';
import AddPost from '../components/AddPost';
import Header_component from '../components/header/Header_component';
import { Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button } from 'reactstrap';


export default props => {
    console.log('props: ', props); 
    const token = localStorage.getItem('token');
    const [content,setContent] = useState('');
    const [friends,setFriends] = useState([]);
    //const [posts,setPosts] = useState([]);

    const friendsHandler = async() => {
        let result =  await grabAllFriends(token).then(bleh => bleh) 
        console.log('fetching friends', result);
        setFriends(result);
    }
    
    // Waiting for API
    // const postsHandler = async() => {
    //     let result =  await grabAllPosts(token).then(bleh => bleh) 
    //     console.log('fetching friends', result);
    //     setPosts(result);
    // }

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
        friendsHandler();
        //postsHandler();
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
    /*
    const addPostHandler = async() =>{
        
        let data = await addPost(token, content);
        console.log("Result" , data);
        if(data.error === ""){
            console.log("Add post was successful");
        }
        else{
            alert(data.error);
        }
    }*/

    return (
        <div className="App">
            <Header_component props={props}/>
            
            <h1> Home Page </h1> 
            {/* <Home />  */}
            <AddPost id="add_post"/>
            { 
                friends.map((values) => {
                    return (
                        <Friend id={values.username}
                                name={values.display_name} 
                                username={values.username} 
                                history={props.history}/>
                    );
                })
            }
            
            {
                posts.map((value, index) => {
                    return <Post key={index} username={value.username}  content={value.content}/>

                })
            }
            
            <button onClick={()=>logout()}> LOG OUT </button>
        </div>
    )
}
