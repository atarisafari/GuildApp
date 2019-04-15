
import React, { useContext, useState, useEffect  } from 'react';
import {grabAllFriends} from '../utils/apiCalls';
import Friend from '../components/Friend';
import Post from '../components/Post';
import Header_component from '../components/header/Header_component';

export default props => {
    const token = localStorage.getItem('token');
    const [friendsD,setfriendsD] = useState([]);
    // const friends = grabAllFriends(token).then(()=>{});
    // console.log("Fetching frriends" , friends);
    // const friends = [{
    //     display_name: 'Jon',
    //     username: 'DogMan',
    // },
    // {
    //     display_name: 'Doe',
    //     username: 'DogWoman',
    // }];

    const friends = async() => {
        let result =  await grabAllFriends(token).then(bleh => bleh) 
        console.log('fetching friends', result);
        setfriendsD(result);
    }

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
        friends();
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

    return (
        <div className="App">
            <Header_component props={props}/>
            <h1> Home Page </h1> 
            {/* <Home />  */}
            { 
                friendsD.map((values, index) => {
                    return <Friend key={index} name={values.display_name} username={values.username}></Friend>
                })
            }
            {
                posts.map((value, index) => {
                    return <Post key={index} username={value.username}  /*{...props}*/></Post>
                })
            }
            
            <button onClick={()=>logout()}> LOG OUT </button>
        </div>
    )
}
