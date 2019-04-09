
import React, { useContext, useState } from 'react'
import {signUp} from '../utils/testAPI';

export default props => {
    // const {message} = useContext(FBContext); 
    console.log('props: ', props); 
    const [username,setusername] = useState('');
    const [password,setpassword] = useState('');
    const [display_name,setdisplay_name] = useState('');
    const [profile_pic_url,setprofile_pic_url] = useState('');


    const usernameHandler = username=>{
        setusername(username);
    }
    const passwordHandler = password=>{
        setpassword(password);
    }
    const display_nameHandler = display_name=>{
        setdisplay_name(display_name);
    }
    const profile_pic_urlHandler = profile_pic_url=>{
        setprofile_pic_url(profile_pic_url);
    }
//    const charSelectHandler = event=>{
//        const charId = event.target.value;
//        setSelectCharacter(charId);
//    }

    return (
    <div className="App">
        <h1> SignUp </h1> 
        {/* <SamplePage2 />  */}
        <div id="signUp">
            <form>
                <div id="username_signUp">
                    Username:
                    <input value={username} onChange= { e => usernameHandler(e.target.value)}/>
                </div>
                <div id="password_signUp">
                    Password: 
                    <input type='password' value={password} onChange= { e => passwordHandler(e.target.value)}/>
                </div>
                <div id="password_signUp">
                    Display Name: 
                    <input value={display_name} onChange= { e => display_nameHandler(e.target.value)}/>
                </div>
                <button onClick={()=>signUp(username,password,display_name,profile_pic_url)}> SIGN UP </button>
                <button onClick={()=>props.history.push('/')}> BACK </button>
            </form>
        </div>
    </div>
    )
}
