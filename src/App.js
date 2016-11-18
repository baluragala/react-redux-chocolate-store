import React, { Component } from 'react';
import logo from '../public/choclate_logo.jpg';
import './App.css';
import List from './components/List'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isChoclatesMade : false
    }
  }
  render() {
    var styles={
      button :{
        height: '40px',
        width: '200px',
        color: 'white',
        backgroundColor: '#632c02',
        fontSize: 'medium',
        fontWeight: '800',
        borderRadius: '20px',
        margin: '15px'
      }
    }

    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React - Choclate Store</h2>
        </div>
        
        <input type="button" value="Make Choclates" style={styles.button}/>
        {
          this.state.isChoclatesMade ? <List/> : null
        }
      </div>
    );
  }
}

export default App;
