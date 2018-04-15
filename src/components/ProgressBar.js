import React, { Component } from 'react';
import './ProgressBar.css';


class ProgressBar extends Component {

  constructor(props) {
    super(props);
  }

    render() {
    console.log("hey");
    console.log(this.props.clickCount);

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
