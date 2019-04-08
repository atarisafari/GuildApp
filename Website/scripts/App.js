import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {signUp} from './utils/testAPI';
import HomeButton from './components/buttons/homeButton';


class App extends Component {
  constructor(props){
    super(props);
    this.state = {
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
          <button onClick={()=>signUp(username,password)}> SignUp </button>
          <input value={username} onChange= { e => this.setState({...this.state, username: e.target.value})}/>
          <input value={password} onChange= { e => this.setState({...this.state, password: e.target.value})}/>
          <img src={logo} className="App-logo" alt="logo" />
          <HomeButton path='/test' {...this.props}>Home</HomeButton>
        </header>
      </div>
    );
  }
}

export default App;
