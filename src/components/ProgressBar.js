import React, { Component } from 'react';
import StepButton from './step_button.js'
import './ProgressBar.css';


class ProgressBar extends Component {
  render() {
    return (
      <div class='parent'>
      <ul class='progress-container'>
        <StepButton>Step 1</StepButton>
        <StepButton>Step 2</StepButton>
        <StepButton>Step 3</StepButton>
      </ul>
      </div>
    );
  }
}
export default ProgressBar;
