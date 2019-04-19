import React, { Component } from 'react';
import './App.css';
import {login} from './utils/apiCalls';
import HomeButton from './components/buttons/homeButton';
import logo from './imgs/Guild_Logo.png';


class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      loggedIn: 'False',
      username: '',
      password:'',
    }
  }
  render() {
    const {username,password} = this.state;

    const loginHandler = async() =>{
        let data = await login(username,password);
        console.log("Result" , data);
        if(data.error === ""){
            console.log("Login was successful");
            localStorage.setItem('token', data.token);
            localStorage.setItem('username', this.state.username);
            this.props.history.push("/home");
        }
        else{
            alert(data.error);
        }      
    }

    return (
      <div className="App">
        <header id="sign_in_header" className="App-header">
          <div className="container-left">
          <p></p>
          <img src={logo} width='500' height='300'/>
          </div>
          <div className="container-right">
            <div id="logo_header">
                <p>Guild</p>
            </div>
            <div id="login">
              <div id="username_login">
                Username:
                <input className='username' placeholder="Username" value={username} onChange= { e => this.setState({...this.state, username: e.target.value})}/>
              </div>
              <div id="password_login">
                Password: 
                <input className='password' placeholder="Password" type='password' value={password} onChange= { e => this.setState({...this.state, password: e.target.value})}/>
              </div>
              <button className='login' onClick={()=>loginHandler()}> LOGIN </button>
              <HomeButton className='signUp' path='/signUp' {...this.props}>SIGN UP</HomeButton>
            </div>
          </div>
        </header>
      </div>
    );
  }
}

export default App;
