import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {signUp} from './utils/testAPI';
import HomeButton from './components/buttons/homeButton';


class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      loggedIn: 'False',
      username: '',
      password:'',
      display_name: '',
      profile_pic_url: '',
    }
  }
  render() {
    const {username,password} = this.state;
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <div id="username_login">
            Username:
            <input value={username} onChange= { e => this.setState({...this.state, username: e.target.value})}/>
          </div>
          <div id="password_login">
            Password: 
            <input type='password' value={password} onChange= { e => this.setState({...this.state, password: e.target.value})}/>
          </div>
          <button onClick={()=>signUp(username,password)}> LOGIN </button>
          <HomeButton path='/signUp' {...this.props}>SIGN UP</HomeButton>
        </header>
      </div>
    );
  }
}

export default App;
