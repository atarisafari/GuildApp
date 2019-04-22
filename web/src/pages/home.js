import React, { useContext, useState, useEffect  } from 'react';
import {grabAllFriends, grabAllPosts, addPost} from '../utils/apiCalls';
import Friend from '../components/Friend';
import Post from '../components/Post';
import AddPost from '../components/AddPost';
import Header_component from '../components/header/Header_component';
import styles from '../styles/home_styles.css';

export default props => {
    console.log('props: ', props); 
    const token = localStorage.getItem('token');
    const [content,setContent] = useState('');
    const [friends,setFriends] = useState([]);
    const [posts,setPosts] = useState([]);
    
    const friendsHandler = async() => {
        let result =  await grabAllFriends(token).then(ble => ble) 
        console.log('fetching friends', result);
        setFriends(result);
    }
    
    const postsHandler = async() => {
        let result =  await grabAllPosts(token, localStorage.getItem('usernameFriend')).then(ble => ble) 
        console.log('fetching posts', result);
        setPosts(result);
    }

    useEffect(()=>{//This will run once and then only if token changes
        if(token === null){ //If token is lost 
            //Or user accessed paged without login in
            //Or if Boogie-Man went back from browser history and tried to login as the previous user
            alert("Please Login to verify your identity\nYou will now be redirected to the Login page.");
            logout();
        }
    }, [token]); //If this variable changes, this code will be run again

    useEffect(()=>{//This will be executed always after the components have been rendered
        console.log("Username: ", localStorage.getItem('usernameFriend'));
        friendsHandler();
        postsHandler();
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
        console.log("Content:", content);
    }

    return (
        <div className="AppHome">
            <Header_component props={props}/>
            {/* <Home />  */}
            <div className ="home_collum1">
                { 
                    friends.map((values) => {
                        return (
                            <Friend id={values.username}
                                    name={values.display_name} 
                                    username={values.username}
                                    preview={values.preview} 
                                    history={props.history}
                            />
                        );
                    })
                }
            </div>
            <div className ="home_collum2">
                <AddPost id="add_post"/>
                {
                    posts.map((value) => {
                        return (
                            <Post   key={value.post_id} 
                                    id={value.post_id} 
                                    image_url={value.image_url}
                                    time_created={value.time_created}
                                    num_likes={value.num_likes}
                                    num_comments={value.num_comments}
                                    username={localStorage.getItem('usernameFriend')}  
                                    content={value.content}
                            />
                        );
                    })
                }
            </div>
        </div>
    )
}
