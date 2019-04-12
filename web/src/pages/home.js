
import React, { useContext, useState, useEffect  } from 'react'
import HomeButton from '../components/buttons/homeButton';

export default props => {
    const token = localStorage.getItem('token');

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
    
    const logout = async() =>{
        localStorage.clear();
        props.history.push("/");
    }
    return (
    <div className="App">
        <h1> Home Page </h1> 
        {/* <Home />  */}
        <button onClick={()=>logout()}> LOG OUT </button>
    </div>
    )
}