import React, { Component } from 'react';
import logo from '../../public/choclate_logo.jpg';
import './App.css';
import List from '../components/List'
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux'
import * as ChocolateStoreActions from '../actions'

class App extends Component {
  

  render() {
    const {chocolates, actions} = this.props;
    const ingredients = ['Chocolate Liquor','Cocoa Butter','Sugar','Milk'];
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
        
        <input type="button" value="Make Choclates" style={styles.button} onClick={() => actions.makeChocolates(ingredients)}/>
        {
          this.props.isChocolatesMade ? <List chocolates={chocolates} giftChocolates={actions.giftChocolates}/> : null
        }
      </div>
    );
  }  
}

function mapStateToProps(state){
  return {
    chocolates:state.chocolates,
    isChocolatesMade:state.isChocolatesMade
  }
}

function mapDispathToProps(dispatch){
  return {
    actions: bindActionCreators(ChocolateStoreActions,dispatch)
  }
  
}


export default connect(mapStateToProps,mapDispathToProps)(App);
