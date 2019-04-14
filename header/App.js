import React, { Component } from 'react';
/*import logo from './logo.svg';*/
import './App.css';
import HeaderComponent from "./Header_component"

class App extends Component {
  render() {

    let links = [
      {label: "Home", link:"#showcase"},
      {label: "About", link:"#about_me_above"},
      {label: "Education", link:"#education_above"},
      {label: "Skills", link:"#skills_above"},
      {label: "Projects", link:"#projects_above"},
      {label: "Contact", link:"#contact_above"}
    ];

    return (
      <div>
        <HeaderComponent menu_links={links}/>
        <link rel="stylesheet" href="/index.css"></link>
      </div>
    );
  }
}

export default App;
