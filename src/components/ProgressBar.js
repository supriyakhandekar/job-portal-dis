import React, { Component } from 'react';
import './ProgressBar.css';


class ProgressBar extends Component {

  constructor(props) {
    super(props);
  }
/*
  renderBagItems(items) {
    //<div id="myDropdown" class="dropdown-content">
    alert(items);
      items.map(function(item) {
        return <li >item<li>
    })
  }
*/


  render() {
    return (
      <div class='parent'>
        <div class='progress-container'>
          <div class = 'button_properties' style={{backgroundColor: (this.props.clickCount >= 1) ? '#81b731':'white'}}>1</div>
          <div class = 'button_properties'  style={{backgroundColor: (this.props.clickCount >= 2) ? '#81b731':'white'}} click_val = {this.props.clicks}>2</div>
          <div class = 'button_properties' click_val = {this.props.clicks} style={{backgroundColor: (this.props.clickCount >= 3) ? '#81b731':'white'}} >3</div>
        </div>
        <div id='shopping-button'>SHOPPING BAG</div>
      </div>
    )
  }
}

export default ProgressBar;
