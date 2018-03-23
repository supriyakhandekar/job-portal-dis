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
                <td class="text-left">Bloomberg</td>
                <td class="text-left">Kate Antonucci</td>
                <td class="text-left">Recruiter</td>
                <td class="text-left">Template 4</td>
                <td class="text-left">kantonucci@bloomberg.net</td>
                <td class="text-left">
                  <a href="">
                    <div class='magnifying-glass'>
                    </div>
                  </a>
                </td>
              </tr>
              <tr>
                <td class="text-left">Facebook</td>
                <td class="text-left">Katie Crona</td>
                <td class="text-left">Recruiter</td>
                <td class="text-left">Template 4</td>
                <td class="text-left">kcrona@fb.com</td>
                <td class="text-left">
                  <a href="">
                    <div class='magnifying-glass'>
                    </div>
                  </a>
                </td>
              </tr>
              <tr>
                <td class="text-left">Branch Metrics</td>
                <td class="text-left">Vivianna de la Torre</td>
                <td class="text-left">Recruiter</td>
                <td class="text-left">Template 4</td>
                <td class="text-left">vdelatorre@branch.io</td>
                <td class="text-left">
                  <a href=''>
                    <div class='magnifying-glass'>
                    </div>
                  </a>
                </td>
              </tr>
              <tr>
                <td class="text-left">Oliver Wyman</td>
                <td class="text-left">Joe Smith</td>
                <td class="text-left">Recruiter</td>
                <td class="text-left">Template 4</td>
                <td class="text-left">jsmith@ow.com</td>
                <td class="text-left">
                  <a href="">
                    <div class='magnifying-glass'>
                    </div>
                  </a>
                </td>
              </tr>
              <tr>
                <td class="text-left">Deloitte</td>
                <td class="text-left">Tom Ford</td>
                <td class="text-left">Recruiter</td>
                <td class="text-left">Template 4</td>
                <td class="text-left">tford@deloitte.com</td>
                <td class="text-left">
                  <a href="">
                    <div class='magnifying-glass'>
                    </div>
                  </a>
                </td>
              </tr>
              <tr>
                <td class="text-left">McKinsey</td>
                <td class="text-left">Anna Loomis</td>
                <td class="text-left">Recruiter</td>
                <td class="text-left">Template 4</td>
                <td class="text-left">jsmith@ow.com</td>
                <td class="text-left">
                  <a href=''>
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
