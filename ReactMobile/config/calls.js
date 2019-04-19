export const signUp = async (username,password,display_name='',profile_pic_url='') => { 
    try{
        let response = await fetch('http://157.230.66.35/php/signup.php', {
        mode: 'cors',
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
        let response = await fetch('http://157.230.66.35/php/login.php', {
        mode: 'cors',
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

export const addPost = async (token,content,image_url) => { 
    try{
        let response = await fetch('http://157.230.66.35/php/addPost.php', {
        mode: 'cors',
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

export const grabAllFriends = async (token) => { 
    try{
        let response = await fetch('http://157.230.66.35/php/grabAllFriends.php', {
        mode: 'cors',
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

export const grabAllPosts = async (token, username='') => { //empty username means our own username
    try{
        let response = await fetch('http://157.230.66.35/php/grabAllPosts.php', {
        mode: 'cors',
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
            console.log("grabAllPosts response",text);
            return text ? JSON.parse(text) : {}
        })   
    }
    catch(e){
        console.log(e);
    } 
}

export const addFriend = async (token, username ) => { 
    try{
        let response = await fetch('http://157.230.66.35/php/addFriend.php', {
        mode: 'cors',
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
        let response = await fetch('http://157.230.66.35/php/deletePost.php', {
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

export const searchFriends = async (token) => { 
    try{
        let response = await fetch('http://157.230.66.35/php/searchFriends.php', {
        mode: 'cors',
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
