import React, { Component } from 'react';
import './step1.css';
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
      </div>
    );
  }
}
export default Step2;
