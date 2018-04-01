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
              <p class='company-confirmed'>Bloomberg to <em> Kate Antonucci </em> </p>
              <p class='company-confirmed'>Branch Metrics to <em>Vivianna de la Torre</em></p>
              <p class='company-confirmed'>Oliver Wyman <em>John Smith </em > </p>
              <p class='company-confirmed'>McKinsey <em> John Doe</em></p>
              <p class='company-confirmed'>Deloitte to <em> Tom Ford </em></p>
              <p class='company-confirmed'>Facebook to <em> Katie Crona </em></p>
            </div>
          </div>

      </div>
    );
  }
}
export default Step4;
