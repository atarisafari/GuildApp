
import React, { useContext, useState } from 'react'
import {signUp} from '../utils/apiCalls';
import HomeButton from '../components/buttons/homeButton';

export default props => {
    // const {message} = useContext(FBContext); 
    console.log('props: ', props); 
    const [username,setusername] = useState('');
    const [password,setpassword] = useState('');
    const [confpassword,setconfpassword] = useState('');
    const [display_name,setdisplay_name] = useState('');
    const [profile_pic_url,setprofile_pic_url] = useState('');

    const usernameHandler = username=>{
        setusername(username);
    }
    const passwordHandler = password=>{
        setpassword(password);
    }
    const confpasswordHandler = confpassword=>{
        setconfpassword(confpassword);
    }
    const display_nameHandler = display_name=>{
        setdisplay_name(display_name);
    }
    const profile_pic_urlHandler = profile_pic_url=>{
        setprofile_pic_url(profile_pic_url);
    }
    const signUpHandler = async() =>{
        if(password !== confpassword){ //If passwords don't match then dont make the api call
            alert("Your passwords don't match, please try again.");
        }
        else{
            let data = await signUp(username,password,display_name,profile_pic_url);
            console.log("Result" , data);
            if(data.error === ""){
                //TODO
                console.log("Sign up was successful");
                props.history.push("/");
            }
            else{
                alert(data.error);
            }
        }
        
    }
//    const charSelectHandler = event=>{
//        const charId = event.target.value;
//        setSelectCharacter(charId);
//    }
    //console.log(username,password);
    return (
    <div className="App">
        <h1> SignUp </h1> 
        {/* <SamplePage2 />  */}
        <div id="signUp">
            <div id="display_name_signUp">
                Display Name: 
                <input onBlur= { e => display_nameHandler(e.target.value)}/>
            </div>
            <div id="username_signUp">
                Username:
                <input onBlur= { e => usernameHandler(e.target.value)}/>
            </div>
            <div id="password_signUp">
                Password: 
                <input type='password' onBlur= { e => passwordHandler(e.target.value)}/>
            </div>
            <div id="confirm_password_signUp">
                Retype Password: 
                <input type='password' onBlur= { e => confpasswordHandler(e.target.value)}/>
            </div>
            <button onClick={()=>signUpHandler()}> SIGN UP </button>
            <HomeButton path='/' {...props}>BACK</HomeButton>
        </div>
    </div>
    )
}