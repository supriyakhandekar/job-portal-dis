import React, { Component } from 'react';
import './ProgressBar.css';


class ProgressBar extends Component {


  renderTest(val) {

    if(val == 2) {
      return <div>HELLLO WHATSUP</div>;
    }
  }
    render() {
    return (
      <div class='parent'>
      <div class='progress-container'>
        <div class = 'button_properties' style={{backgroundColor: (this.props.clickCount == 1) ? '#81b731':'none'}}>1</div>
        <div class = 'button_properties'  style={{backgroundColor: (this.props.clickCount == 2) ? '#81b731':'none'}} click_val = {this.props.clicks}>2</div>
        <div class = 'button_properties' click_val = {this.props.clicks } style={{backgroundColor: (this.props.clickCount == 3) ? '#81b731':'none'}} >3</div>
      </div>
        <button id='shopping-button'>SHOPPING BAG (3)</button>
      </div>
    );
  }
}

export default ProgressBar;
