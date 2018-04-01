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
        <div class='step1_body'>
          <form>
            <p class='text-style'></p>
            <label class='text-style'>
              Search Companies :
              <input type="text" name="name" />
            </label>
              <input type="submit" value="Submit" />
          </form>
          <div class='search-results'>
            <p class='text-style' id='text-style-black'>Results</p>
            <table class="table-fill" id='step1_table'>
                <thead>
                  <tr>
                  <th class="text-left">Company</th>
                  <th class="text-left">Description</th>
                  <th class="text-left">Select?</th>
                  </tr>
                </thead>
                <tbody class="table-hover">
                  <tr>
                    <td class="text-left">Bloomberg</td>
                    <td class="text-left">(from Wikipedia) Bloomberg L.P. is a privately held financial software, data, and media company headquartered in Midtown Manhattan, New York City</td>
                    <td class="text-left"></td>
                  </tr>
                  <tr>
                    <td class="text-left">Branch Metrics</td>
                    <td class="text-left">(from Wikipedia) Branch Metrics is a deep linking and business analytics platform offering developer tools for large and independent mobile application companies</td>
                    <td class="text-left"></td>
                  </tr>
                  <tr>
                    <td class="text-left">Facebook</td>
                    <td class="text-left">(from Wikipedia) Facebook is an American online social media and social networking service company based in Menlo Park, California.</td>
                    <td class="text-left"></td>
                  </tr>
                </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
}
export default Step1;
