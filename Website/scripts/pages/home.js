
import React, { useContext, useState } from 'react'
import HomeButton from '../components/buttons/homeButton';

export default props => {
    const token = localStorage.getItem('token');

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
