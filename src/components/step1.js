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
          <div class='step_number'>1</div>
          <div class='step_description_component'>Step 1: Find companies.</div>
        </div>
        <form></form>
      </div>
    );
  }
}
export default Step1;
