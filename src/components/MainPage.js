import React, { Component } from 'react';
import './MainPage.css';
import './ProgressBar.css';
import ProgressBar from'./ProgressBar.js';
import Step1 from './step1.js';
import Step2 from './step2.js';
import Step3 from './step3.js';
import Step4 from './step4.js';
import Next_Button from './next_button.js';
import $ from 'jquery';
//import ReactScrollbar from 'react-scrollbar-js'


class MainPage extends Component {


  constructor(props) {
    super(props);
    this.state = {
      clicks : 1,
      bagItems :[]
    };
  }



  getBagItems(list) {
    //this.setState({bagItems : list});
  }

  incrementStep = () => {
    this.setState({ clicks: this.state.clicks + 1 });
  }

  decrementStep = () => {

    if (this.state.clicks >= 1) {
      this.setState({ clicks: this.state.clicks - 1 });
    }
  }

  //update progress bar background colors
  renderStep(step_number) {

    if (step_number == 5) {
      step_number = 1
      this.setState({ clicks: 1});
    }

    switch(step_number) {
      case 1:
        return <Step1 getBagItems = {this.getBagItems.bind(this)}/>
      case 2:
        return <Step2 />
      case 3:
        return <Step3/>
      case 4:
        return <Step4/>
      default:
        return <Step1/>
    };
  }

//code from https://gist.github.com/andjosh/6764939#file-animatedscrollto-js-L14

//following smooth scroll code from
// https://css-tricks.com/snippets/jquery/smooth-scrolling/

  render() {
    return (
      <div>
      <div class='inital_page_wrapper'>
        <div id='title'>
          <div>C2TC</div>
          <p class='company-motto'>Cut to the chase</p>
          <a href='#section2' class='start-anchor'>
            <div class='start-button'>GET STARTED</div>
          </a>
        </div>
      </div>
      <div class="wrapper" id='section2'>
        <div class='main-header'></div>
        <ProgressBar clickCount = {this.state.clicks}/>
        <div class='step-control-wrapper'>
          <button class='step_button prev_button' onClick = {this.decrementStep}>PREVIOUS</button>
          <button class='step_button next_button' onClick = {this.incrementStep}>NEXT</button>
        </div>
        {this.renderStep(this.state.clicks)}
      </div>
      </div>
    );
  }
}

export default MainPage;
