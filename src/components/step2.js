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
          <div>2</div>
          <div>Step 2</div>
        </div>
      </div>
    );
  }
}
export default Step2;
