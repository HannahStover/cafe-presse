import React, { Component, Render } from 'react';
import Main from './components/MainComponent';
import Home from './components/HomeComponent';
import Header from './components/HeaderComponent';
import About from './components/AboutComponent';
import './App.css';
import { BrowserRouter } from 'react-router-dom';

class App extends Component {

  render() {
    return (
      <BrowserRouter>
        <div>
          <Main />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
