import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button } from 'reactstrap';

const Friend = (props) => {

    const goProfile = async() =>{
        //change username?
        props.history.push("/profile");
    }

    return (
        <div key={props.id} id={props.id}>
        <Card style={{ width: '18rem' }}>
            <CardImg top width="100%" src="holder.js/100px180" alt="Card image cap" />
            <CardBody>
            <CardTitle tag="h1"> {props.name}</CardTitle>
            <CardSubtitle tag="h5">{props.username}</CardSubtitle>
            <CardText tag="p">Place Holder for latest post</CardText>
            <Button variant="primary" onClick={()=>goProfile()}>Profile</Button>
            </CardBody>
        </Card>
        </div>
    );
};

export default Friend;
