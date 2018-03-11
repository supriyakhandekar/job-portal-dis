import React, { Component } from 'react';
import StepButton from './step_button.js'
import './ProgressBar.css';


class ProgressBar extends Component {
  render() {
    return (
      <div class='parent'>
      <div class='progress-container'>
        <StepButton step_val={1}></StepButton>
        <StepButton step_val={2}></StepButton>
        <StepButton step_val={3}></StepButton>
      </div>
      </div>
    );
  }
}
export default ProgressBar;
