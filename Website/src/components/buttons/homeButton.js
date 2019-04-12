import React, { Component } from 'react';

const HomeButton = (props)=> {
    return(
        <button onClick={()=>props.history.push(props.path)}>{props.children}</button>
    );
}
export default HomeButton;
