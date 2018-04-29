import React, { Component } from 'react';
import './MainPage.css';
import './ProgressBar.css';
import ProgressBar from'./ProgressBar.js';
import Step1 from './step1.js';
import Step2 from './step2.js';
import Step3 from './step3.js';
import Step4 from './step4.js';
import Next_Button from './next_button.js';
//import ReactScrollbar from 'react-scrollbar-js'


class MainPage extends Component {


  constructor(props) {
    super(props);
    this.state = {
      clicks : 1,
      bagItems :[],
      templates : [],
      showBagContent: false
    };
    this.toggleBagView = this.toggleBagView.bind(this);
    this.renderBagItems = this.renderBagItems.bind(this);
  }

  toggleBagView() {
    this.setState({showBagContent: !this.state.showBagContent});
  }

  renderBagItems(list) {
    list.map(function(item) {
      return <div class='bag-item'>{item}</div>
    })
  }

  addToCart(list) {
    this.setState({bagItems : list});
  }

  addTemplates(list) {
    this.setState({templates : list});
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
        return <Step1
                  cart = {this.state.bagItems}
                  addToCart = {this.addToCart.bind(this)}/>
      case 2:
        return <Step2 />
      case 3:
        return <Step3/>
      case 4:
        return <Step4 cart = {this.state.bagItems}/>
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
        <div class='navigation'>
            <button class='step_button prev_button' onClick = {this.decrementStep}>PREVIOUS</button>
            <ProgressBar clickCount = {this.state.clicks} cart = {this.state.bagItems}/>
            <button class='step_button next_button' onClick = {this.incrementStep}>NEXT</button>
        </div>
        <div class='step-container'>
          {this.renderStep(this.state.clicks)}
          <div class='shopping_cart'>
            <div id='shopping-button' onClick={this.toggleBagView.bind(this)}>SHOPPING BAG</div>
            <div class='shopping-list'>
              {this.state.showBagContent ? this.state.bagItems.map(function(item) {
                return <div class='shopping-bag-item'>{item}</div>
                }): (null)}
            </div>
          </div>
        </div>
      </div>
      </div>
    );
  }
}

export default MainPage;
