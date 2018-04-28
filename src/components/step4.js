import React, { Component } from 'react';
import './step1.css';
import './step_shared.css';


class Step4 extends Component {

  constructor(props) {
    super(props);
    this.state = { /* initial state */ };
  }

  render() {
    return (
      <div class='box'>
        <div class='step-header'>
          <div class='step_number'>4</div>
          <div class='step_description_component'>Step 4: Send</div>
          </div>
          <div class='search-results'>
            <p class='confirmation-page-text'>You are all set.</p>
            <div class='confirmation-container'>
              <p class='company-confirmed'>Emails sent to:</p>
              <p class='company-confirmed'>Spire to <em> Kate Antonucci </em> </p>
              <p class='company-confirmed'>Mesosphere to <em>Pratyush More</em></p>
            </div>
          </div>

      </div>
    );
  }
}
export default Step4;
