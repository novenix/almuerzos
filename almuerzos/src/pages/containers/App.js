import React, { Component } from 'react';
import logo from '../../icons/logo.svg';
import HomeLayout from '../components/homelayout'
import MenuRelated from '../components/menurelated'

import './App.css';

class App extends Component {
  render() {
    return (
      
      <HomeLayout>
        {/* <MenuRelated/> */}
        
      </HomeLayout>
    )

      {/* <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">almuerzos guga</h1>
        </header>
        <p className="App-intro">
         esta es una prueba de los almuerzos guga
        </p>
      </div>
    ); */}
  }
}

export default App;
