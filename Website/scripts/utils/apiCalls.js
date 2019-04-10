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
            //display_name: display_name,
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
//     (response => {
//     }
// )
// .then(res => {
// this.props.history.push("/");
// alert(res);
// console.log('response:');
// console.log(JSON.stringify(res));
// return res;
// })
// .catch( e => {
//     console.log(JSON.stringify(e));
//     //alert(e);
// })
