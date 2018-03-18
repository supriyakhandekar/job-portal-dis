import React, { Component } from 'react';
import './step1.css';


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
      <div class='box'>Step 1</div>
    );
  }
}
export default Step1;
