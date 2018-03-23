import React, { Component } from 'react';
import './step2.css';
import './step_shared.css';


class Step2 extends Component {

  constructor(props) {
    super(props);
    this.state = { /* initial state */ };
  }

  render() {
    //following code and associated css from https://codepen.io/anon/pen/JLJMoO (for the table)
    return (
      <div class='box'>
        <div class='step-header'>
          <div class='step_number'>2</div>
          <div class='step_description_component'>Step 2: Create Email Templates.</div>
        </div>
          <div class='step_body'>
            <div class='template_body'>Existing Templates:</div>
            <div class='template_container'>
              <table class="table-fill">
                  <thead>
                    <tr>
                    <th class="text-left">Template Name</th>
                    <th class="text-left">Description</th>
                    </tr>
                  </thead>
                  <tbody class="table-hover">
                    <tr>
                      <td class="text-left">FinTech companies</td>
                      <td class="text-left">Intro talks about previous finance internships</td>
                    </tr>
                    <tr>
                      <td class="text-left">Consulting companies</td>
                      <td class="text-left">Large focus on previous state studies</td>
                    </tr>
                    <tr>
                      <td class="text-left">Start-ups</td>
                      <td class="text-left">Talks about failed start-ups</td>
                    </tr>
                    <tr>
                      <td class="text-left">Research opportunities</td>
                      <td class="text-left">Extensive references to CV</td>
                    </tr>
                  </tbody>
              </table>
            </div>
            <div class='template_body'>Create a New Template:</div>
            <div class='template_container'>
              <a href=''>
                <div class='plus_button'> </div>
              </a>
            </div>
          </div>
      </div>
    );
  }
}
export default Step2;
