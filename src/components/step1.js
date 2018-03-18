import React, { Component } from 'react';
import './step1.css';
import './step_shared.css';


class Step1 extends Component {

  constructor(props) {
    super(props);
    this.state=  {
        step1 : true,
        step2 : false,
        step3 : false,
        step4 : false
     };
  }

  render() {
    return (
      <div class='box'>
        <div class='step-header'>
          <div>1</div>
          <div>Step 1</div>
        </div>
      </div>
    );
  }
}
export default Step1;
