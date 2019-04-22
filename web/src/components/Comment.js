import React, { Component } from 'react';
import GuildSword from '../imgs/0_GuildSword_Icon.png';
import Sword from '../imgs/1_Sword_Icon.png';
import BowArrow from '../imgs/2_BowArrow_Icon.png';
import Staff from '../imgs/3_Staff_Icon.png';
import Shield from '../imgs/4_Shield_Icon.png';


const Comment = (props) => {
    const token = localStorage.getItem('token');
    const img = [GuildSword, Sword, BowArrow, Staff, Shield];
    const {classes} = props;

    const random_img = img =>{
        return img[Math.floor(Math.random()*img.length)];
    }

    return (
            <div key={props.id} id={props.id} className="media mb-3">
                <img
                    className="m-2 rounded"
                    width="48"
                    height="48"
                    src= {random_img(img)}
                    alt= '/static/images/avatar/2.jpg'
                />

                <div className="media-body p-2 shadow-sm rounded bg-light border">
                    <small className="float-right text-muted">{props.time_created}</small>
                    <h6 className="mt-0 mb-1 text-muted">{props.username + " says:"}</h6>
                    {props.content}
                </div>
            </div>
    );
};

export default (Comment);
