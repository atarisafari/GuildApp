import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button } from 'reactstrap';

const Post = (props) => {
    return (
        <div id={props.id}>
        <Card style={{ width: '30rem' }}>
            <CardBody>
            <input></input>
            <Button variant="primary">Post</Button>
            </CardBody>
        </Card>
        </div>
    );
};

export default Post;