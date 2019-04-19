import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button } from 'reactstrap';
import GuildSword from '../imgs/0_GuildSword_Icon.png';
import Sword from '../imgs/1_Sword_Icon.png';
import BowArrow from '../imgs/2_BowArrow_Icon.png';
import Staff from '../imgs/3_Staff_Icon.png';
import Shield from '../imgs/4_Shield_Icon.png';
import Avatar from '@material-ui/core/Avatar';

const Friend = (props) => {
    const img = [GuildSword, Sword, BowArrow, Staff, Shield];

    const goProfile = async() =>{
        //change username?
        props.history.push("/profile");
    }

    const random_img = img =>{
        return img[Math.floor(Math.random()*img.length)];
    }

    return (
        <div key={props.id} id={props.id}>
            <Card style={{ width: '18rem' }}>
                
                <CardBody>
                    <Avatar alt="/static/images/avatar/2.jpg" src={random_img(img)}  onClick={()=>goProfile()}/> 
                    <CardTitle tag="h2"> {props.name}</CardTitle>
                    <CardSubtitle tag="h5">{props.username}</CardSubtitle>

                    <CardText tag="p">{props.preview}</CardText>

                </CardBody>
                
            </Card>
        </div>
    );
};

export default Friend;
