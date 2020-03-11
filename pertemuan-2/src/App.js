import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Subheader from './Subheader';

class Header extends Component{
  render(){
    return(
      <div><h2>My Biodata</h2></div>
    );
  }
}

class App extends Component{
  render(){
    return(
      <div>
        {/* <Header />  */}
        <Subheader />
      </div>
    );
  }
}

export default App;