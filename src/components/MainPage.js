import React, { Component } from 'react';
import './MainPage.css';
import './ProgressBar.css'
import ProgressBar from'./ProgressBar.js'
import Step1 from './step1.js'
import Step2 from './step2.js'
import Step3 from './step3.js'
import Step4 from './step4.js'
import Next_Button from './next_button.js'
//import ReactScrollbar from 'react-scrollbar-js';


class MainPage extends Component {
  render() {
    return (
      <div>
      <div class='inital_page_wrapper'>
        <div class='inital_description'>
          <p>CT2C</p>
          <p class='company-motto'>Cut to the chase</p>
          <a href='#section2'>
            <div class='start-button'>GET STARTED</div>
          </a>
        </div>
        <div class='inital_description'>
          <p class='step'>Step 1</p>
          <p class='step_description'>
          Search for companies that interest you. Add them to your 'shopping bag' if you like what you see!
          </p>
          <p class='step'>Step 2</p>
          <p class='step_description'>
          Create a personalized template and let us fill in the company-specific information for every company you find interesting!
          </p>
          <p class='step'>Step 3</p>
          <p class='step_description'>
          Let us find you the emails of the important people so you can send away!
          </p>
        </div>
      </div>
      <div class="wrapper" id='section2'>
        <div class='main-header'>CT2C</div>
        <ProgressBar/>
        <div class='next-wrapper'>
          <Next_Button/>
        </div>
        <Step1/>
        <Step2/>
        <Step3/>
        <Step4/>

      </div>
      </div>

    );
  }
}

export default MainPage;
