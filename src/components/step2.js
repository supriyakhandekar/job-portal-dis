import React, { Component } from 'react';
import './step2.css';
import './step_shared.css';


class Step2 extends Component {

  constructor(props) {
    super(props);
    this.state = { /* initial state */ };
  }

  render() {
    return (
      <div class='box'>
        <div class='step-header'>
          <div class='step_number'>2</div>
          <div class='step_description_component'>Step 2: Create Email Templates.</div>
        </div>
          <div class='step_body'>
            <div class='template_body'>Existing Templates:</div>
            <div class='template_container'></div>
            <div class='template_body'>Create a New Template:</div>
            <div class='template_container'></div>
          </div>
      </div>
    );
  }
}
export default Step2;
