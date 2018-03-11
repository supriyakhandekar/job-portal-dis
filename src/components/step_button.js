import React, { Component } from 'react';
import './step_button.css'


class StepButton extends Component {
  render() {
    return (
      <div class='button-properties'>
        <p class='progress-text'>{this.props.step_val}</p>
      </div>
    );
  }
}
export default StepButton;
