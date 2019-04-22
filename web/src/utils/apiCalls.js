//const fetch = require('node-fetch');
export const signUp = async (username,password,display_name='',profile_pic_url='') => { 
    try{
        let response = await fetch('https://guild-app.com/php/signup.php', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                username: username,
                password: password,
                display_name: display_name,
                profile_pic_url: profile_pic_url,
            })
        })
        return response.text().then(function(text) {
            console.log("SignUp response",text);
            return text ? JSON.parse(text) : {}
        })
        //return data;        
    }
    catch(e){
        console.log(e);
    } 
}

export const login = async (username,password) => { 
    try{
        let response = await fetch('https://guild-app.com/php/login.php', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                username: username,
                password: password,
        })
        })
        return response.text().then(function(text) {
            console.log("login response",text);
            return text ? JSON.parse(text) : {}
        })       
    }
    catch(e){
        console.log(e);
    } 
}

export const addPost = async (token,content,image_url='') => { 
    try{
        let response = await fetch('https://guild-app.com/php/addPost.php', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                token: token,
                content: content,
                image_url: image_url,
            })
        })
        return response.text().then(function(text) {
            console.log("addPost response",text);
            return text ? JSON.parse(text) : {}
        })       
    }
    catch(e){
        console.log(e);
    } 
}

export const addComment = async (token, post_id, content) => { 
    try{
        let response = await fetch('https://guild-app.com/php/addComment.php', {
            mode: 'cors',
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                token: token,
                post_id: post_id,
                content: content
            })
        })
        return await response.text().then(function(text) {
            console.log("addComment response",text);
            return text ? JSON.parse(text) : {}
        })   
    }
    catch(e){
        console.log(e);
    } 
}

export const grabAllFriends = async (token) => { 
    try{
        let response = await fetch('https://guild-app.com/php/grabAllFriends.php', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                token: token
            })
        })
        return await response.text().then(function(text) {
            console.log("grabAllFriends response",text);
            return text ? JSON.parse(text) : {}
        })   
    }
    catch(e){
        console.log(e);
    } 
}

export const grabAllPosts = async (token, username) => { //empty username means our own username
    try{
        let response = await fetch('https://guild-app.com/php/grabAllPosts.php', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                token: token,
                username: username
            })
        })
        return await response.text().then(function(text) {
            console.log("grabAllPosts response from ", username + text);
            return text ? JSON.parse(text) : {}
        })   
    }
    catch(e){
        console.log(e);
    } 
}

export const grabAllComments = async (token, post_id) => { //empty username means our own username
    try{
        let response = await fetch('https://guild-app.com/php/grabAllComments.php', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                token: token,
                post_id: post_id
            })
        })
        return await response.text().then(function(text) {
            console.log("grabAllComments response", text);
            return text ? JSON.parse(text) : {}
        })   
    }
    catch(e){
        console.log(e);
    } 
}

export const addFriend = async (token, username ) => { 
    try{
        let response = await fetch('https://guild-app.com/php/addFriend.php', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                token: token,
                username: username 
            })
        })
        return await response.text().then(function(text) {
            console.log("addFriend response",text);
            return text ? JSON.parse(text) : {}
        })   
    }
    catch(e){
        console.log(e);
    } 
}

export const deletePost = async (token, post_id) => { 
    try{
        let response = await fetch('https://guild-app.com/php/deletePost.php', {
            mode: 'cors',
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                token: token,
                post_id: post_id
            })
        })
        return await response.text().then(function(text) {
            console.log("deletePost response",text);
            return text ? JSON.parse(text) : {}
        })   
    }
    catch(e){
        console.log(e);
    } 
}

export const blockUser = async (token, username ) => { 
    try{
        let response = await fetch('https://guild-app.com/php/blockUser.php', {
            mode: 'cors',
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                token: token,
                username : username 
            })
        })
        return await response.text().then(function(text) {
            console.log("blockUser response",text);
            return text ? JSON.parse(text) : {}
        })   
    }
    catch(e){
        console.log(e);
    } 
}

export const searchFriends = async (token) => { 
    try{
        let response = await fetch('https://guild-app.com/php/searchFriends.php', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                token: token
            })
        })
        return await response.text().then(function(text) {
            console.log("searchFriends response",text);
            return text ? JSON.parse(text) : {}
        })   
    }
    catch(e){
        console.log(e);
    } 
}
