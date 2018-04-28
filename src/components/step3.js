import React, { Component } from 'react';
import './step1.css';
import './step_shared.css';


class Step3 extends Component {

  constructor(props) {
    super(props);
    this.state = { /* initial state */ };
  }

  render() {
    return (
      <div class='box'>
        <div class='step-header'>
          <div class='step_number'>3</div>
          <div class='step_description_component'>Step 3: Select emails.</div>
          <p class='select-all-box'> Select all</p>
          <input class='checkbox-style' type='checkbox' class='checkbox-style'/>
        </div>
        <table class="table-fill">
            <thead>
              <tr>
              <th class="text-left">Selected Companies</th>
              <th class="text-left">Name of Employee</th>
              <th class="text-left">Position</th>
              <th class="text-left">Select Template</th>
              <th class="text-left">Email</th>
              <th class="text-left">See Preview</th>
              </tr>
            </thead>
            <tbody class="table-hover">
              <tr>
                <td class="text-left">Spire</td>
                <td class="text-left">Kate Antonucci</td>
                <td class="text-left">Recruiter</td>
                <td class="text-left">
                  <select>
                    <option value="volvo">Sample Template</option>
                    <option value="volvo">Tech Companies</option>
                  </select>
                </td>
                <td class="text-left">kantonucci@spire.net</td>
                <td class="text-left">
                  <a href="">
                    <div class='magnifying-glass'>
                    </div>
                  </a>
                </td>
              </tr>
              <tr>
                <td class="text-left">Mesosphere</td>
                <td class="text-left">Pratyush More</td>
                <td class="text-left">Recruiter</td>
                <td class="text-left">
                  <select>
                    <option value="volvo">Sample Template</option>
                    <option value="volvo">Tech Companies</option>
                  </select>
                </td>
                <td class="text-left">pmore@mesos.com</td>
                <td class="text-left">
                  <a href="">
                    <div class='magnifying-glass'>
                    </div>
                  </a>
                </td>
              </tr>
            </tbody>
        </table>
      </div>
    );
  }
}
export default Step3;
