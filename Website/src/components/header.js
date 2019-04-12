import React, { Component } from 'react';

const Header = (props)=> {
    return(
        <button onClick={()=>props.history.push(props.path)}>{props.children}</button>
    );
}
export default HomeButton;
