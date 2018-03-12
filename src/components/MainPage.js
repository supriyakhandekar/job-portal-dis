import React, { Component } from 'react';
import './MainPage.css';
import './ProgressBar.css'
import ProgressBar from'./ProgressBar.js'
import Step1 from './step1.js'
//import ReactScrollbar from 'react-scrollbar-js';


class MainPage extends Component {
  render() {
    return (
      <div>
      <div class='inital_page_wrapper'>
        <div class='inital_description'></div>
        <div class='inital_description'></div>
      </div>
      <div class="wrapper">
        <div class='main-header'>HIRED</div>
        <ProgressBar/>
        <Step1/>
      </div>
      </div>

    );
  }
}

export default MainPage;
