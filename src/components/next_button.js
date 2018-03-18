import React, { Component } from 'react';
import './next_button.css';


class Next_Button extends Component {

  constructor(props) {
    super(props);
    //this.state.step = 1;
  }

  render() {
    return (
      <div class='next_button' id='next_id'>NEXT</div>
    );
  }
}
export default Next_Button;
