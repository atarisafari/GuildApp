import React, { useContext, useState, useEffect  } from 'react';
import {grabAllPosts} from '../utils/apiCalls';
import Post from '../components/Post';
import HomeButton from '../components/buttons/homeButton';
import Header_component from '../components/header/Header_component';

export default props => {
    //const [posts,setPosts] = useState([]);

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
    const logout = async() =>{
        localStorage.clear();
        props.history.push("/");
    }

    return (
    <div className="App">
        <Header_component props={props}/>
        <h1> Profile </h1>
        {
            posts.map((value, index) => {
                return <Post id={index} username={value.username}></Post>
            })
        }
        <HomeButton path='/home' {...props}>Home</HomeButton>
    </div>
    )
}