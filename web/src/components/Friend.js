import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button } from 'reactstrap';
import GuildSword from '../imgs/0_GuildSword_Icon.png';
import Sword from '../imgs/1_Sword_Icon.png';
import BowArrow from '../imgs/2_BowArrow_Icon.png';
import Staff from '../imgs/3_Staff_Icon.png';
import Shield from '../imgs/4_Shield_Icon.png';
import Avatar from '@material-ui/core/Avatar';
import {withStyles} from '@material-ui/core/styles';
import styles from '../styles/friend_style';

const Friend = (props) => {
    const {classes} = props;

    const img = [GuildSword, Sword, BowArrow, Staff, Shield];

    const goProfile = async() =>{
        //change username?
        props.history.push("/profile");
    }

    const random_img = img =>{
        return img[Math.floor(Math.random()*img.length)];
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
            <Card className={classes.friend_card}>
                
                <CardBody>
                    <Avatar className={classes.friend_img} alt="/static/images/avatar/2.jpg" src={random_img(img)}  onClick={()=>goProfile()}/> 
                    <CardTitle className={classes.friend_title}tag="h2"> {props.name}</CardTitle>
                    <CardSubtitle className={classes.friend_subtitile} tag="h5">{props.username}</CardSubtitle>
                    <CardText className={classes.friend_post}tag="p">Place Holder for latest post</CardText>
                </CardBody>
        
                
            </Card>
        </div>
    );
};

export default withStyles(styles)(Friend);
