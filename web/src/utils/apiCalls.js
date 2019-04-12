//const fetch = require('node-fetch');
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
            //profile_pic_url: profile_pic_url,
        })
        })
        return response.text().then(function(text) {
            console.log(text);
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
            console.log(text);
            return text ? JSON.parse(text) : {}
        })       
    }
    catch(e){
        console.log(e);
    } 
}

export const addPost = async (token,content,image_url,timestamp) => { 
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
            timestamp: timestamp,
        })
        })
        return response.text().then(function(text) {
            console.log(text);
            return text ? JSON.parse(text) : {}
        })       
    }
    catch(e){
        console.log(e);
    } 
}