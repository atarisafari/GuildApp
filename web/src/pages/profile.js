import React, { useContext, useState, useEffect  } from 'react';
import Post from '../components/Post';
import HomeButton from '../components/buttons/homeButton';
import Header_component from '../components/header/Header_component';

export default props => {

    const logout = async() =>{
        localStorage.clear();
        props.history.push("/");
    }

    return (
    <div className="App">
        <Header_component props={props}/>
        <h1> Profile </h1>
        <HomeButton path='/home' {...props}>Home</HomeButton>
    </div>
    )
}