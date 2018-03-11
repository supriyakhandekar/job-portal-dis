import React, { Component } from 'react';
import './MainPage.css';
import './ProgressBar.css'
import ProgressBar from'./ProgressBar.js'
import Step1 from './step1.js'
//import ReactScrollbar from 'react-scrollbar-js';


class MainPage extends Component {
  render() {
    return (
      <div class="wrapper">
      <img src="../office.jpg" class="welcome-picture"></img>
        <div class='main-header'>HIRED</div>
        <ProgressBar/>
        <Step1/>
      </div>
    );
  }
}

export default MainPage;
