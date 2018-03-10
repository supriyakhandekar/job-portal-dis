import React, { Component } from 'react';
import './MainPage.css';
import './ProgressBar.css'
import ProgressBar from'./ProgressBar.js'
import Step1 from './step1.js'

class MainPage extends Component {
  render() {
    return (
      <div>
        <div class='main-header'>Cut to the chase!</div>
        <ProgressBar/>
        <Step1/>
      </div>
    );
  }
}

export default MainPage;
