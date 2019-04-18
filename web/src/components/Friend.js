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

    const goProfile = async() =>{
        //change username?
        props.history.push("/profile");
    }

    const tileData = [
        {
            img: GuildSword,
            title: 'Guild Sword',
        },
        {
            img: Sword,
            title: 'Sword',
        },
        {
            img: BowArrow,
            title: 'Bow Arrow',
        },
        {
            img: Staff,
            title: 'Staff',
        },
        {
            img: Shield,
            title: 'Shield',
        }
    ];

    return (
        <div key={props.id} id={props.id}>
            <Card style={{ width: '18rem' }}>
                
                <Avatar alt="/static/images/avatar/2.jpg" src={Shield}  onClick={()=>goProfile()}/> 
                <CardBody>
                    <CardTitle tag="h1"> {props.name}</CardTitle>
                    <CardSubtitle tag="h5">{props.username}</CardSubtitle>
                    <CardText tag="p">Place Holder for latest post</CardText>
                 
                </CardBody>
        
                
            </Card>
        </div>
    );
};

export default Friend;
