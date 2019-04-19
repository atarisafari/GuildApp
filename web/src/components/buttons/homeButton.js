import React, { Component } from 'react';

const HomeButton = (props)=> {
    return(
        <button className={props.className} onClick={()=>props.history.push(props.path)}>{props.children}</button>
    );
}
export default HomeButton;
