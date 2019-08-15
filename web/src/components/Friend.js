import React, { Component } from 'react';
import {blockUser} from '../utils/apiCalls';
import { Card, CardImg, CardText, CardBody,CardTitle, CardSubtitle, Button } from 'reactstrap';
import GuildSword from '../imgs/0_GuildSword_Icon.png';
import Sword from '../imgs/1_Sword_Icon.png';
import BowArrow from '../imgs/2_BowArrow_Icon.png';
import Staff from '../imgs/3_Staff_Icon.png';
import Shield from '../imgs/4_Shield_Icon.png';
import Avatar from '@material-ui/core/Avatar';
import {withStyles} from '@material-ui/core/styles';
import styles from '../styles/friend_style';

const Friend = (props) => {
    const token = localStorage.getItem('token');
    const img = [GuildSword, Sword, BowArrow, Staff, Shield];
    const {classes} = props;

    const goProfile = async() =>{
        //change username?
        localStorage.setItem('usernameFriend', props.username);
        props.history.push("/profile");
    }

    const blockUserHandler = async() => {
        if (window.confirm('Are you sure you wish to block '+props.username+' ?')){
            let result =  await blockUser(token, props.id).then(ble => ble) 
            console.log('Delete post response: ', result);
            alert(props.username + " has been blocked");
            window.location.reload();
        }
    }

    const random_img = img =>{
        return img[Math.floor(Math.random()*img.length)];
    }

    return (
        <div key={props.id} id={props.id}>
            <Card className={classes.friend_card}>
                <CardBody>                   
                    <Button className={classes.friend_block_button} onClick={blockUserHandler}>Block</Button>
                    <img className={classes.friend_img} alt="/static/images/avatar/2.jpg" src={random_img(img)}  onClick={()=>goProfile()}/> 
                    <CardTitle className={classes.friend_title} tag="h2"> 
                        {props.name}
                    </CardTitle>
                    <CardSubtitle className={classes.friend_subtitle} tag="h5">{props.username}</CardSubtitle>
                    <CardText className={classes.friend_post} tag="p">{props.preview}</CardText>
                </CardBody>             
            </Card>
        </div>
    );
};

export default withStyles(styles)(Friend);
