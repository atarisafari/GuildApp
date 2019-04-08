import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Router from './pages/router'
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<Router />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

//TODO SignUp
//NEED: Username, Password, Display Name and Profile picture url

//TODO LogOut 
//NEED: errase Local Storage and Cookies

//TODO Update Display Name and profile pic
//NEED:User_id, Display Name and profile pic

//TODO Login
//NEED: Username and Password

//TODO Check for Friend request
//NEED: user_id

//TODO AddPost
//NEED: user_id,content,image_url,time_created

//TODO DeletePost
//NEED: post_id and user_id

//TODO FetchXPosts from a friend
//NEED: username (friend), user_id too to check if you have permission to read it (blocked etc.)

//TODO AddComment
//NEED: comment_id , user_id , post_id, content, time_created

//TODO DeleteComment
//NEED: user_id, post_id, comment_id 

//TODO EditComment
//NEED: user_id, post_id, comment_id, content 

//TODO FetchXComments from a post
//NEED: post_id

//TODO AddFriend
//NEED: user_id (own) , username (friend)

//TODO DeleteFriend
//NEED: user_id (own) , username (friend) 

//TODO BlockFriend
//NEED: user_id (own) , username (friend)

//TODO FetchAllFriends
//NEED: user_id (own)

//TODO Like/Unlike Post
//NEED: post_id and user_id (own)
/*--Check if post has been liked by user
  --If no time is finded, then post not liked
*/
