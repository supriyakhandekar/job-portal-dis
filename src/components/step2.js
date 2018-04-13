import React, { Component } from 'react';
import './step2.css';
import './step_shared.css';


class TemplateForm extends Component {


  //will take the values from the text areas and generate appropriate templates
  //needs to send this generated template to the parent
  generateTemplate() {






  }

render() {
  return (
      <div class='form-box'>
        <div class='form-questions'>
          <div class='form-header'>Create a Template.</div>
          <p class='question-format'>Name your template</p>
          <textarea class='question-textarea'>Start-ups</textarea>
          <p class='question-format'>Write a description for your template.</p>
          <textarea class='question-textarea'>This template is for start-ups</textarea>
          <p class='question-format'>Write your Introductory Pitch.</p>
          <textarea class='question-textarea'>Summer Analyst</textarea>
          <p class='question-format'>What position are you applying for?</p>
          <textarea class='question-textarea'>I am a third year student at Yale-NUS College, majoring in
          Economics and minoring in Arts and Humanities. Having experience in both the technical and theoretical
          space, I feel that I would contribute great work to your company</textarea>
          <p class='question-format'>Talk about your experience...</p>
          <textarea class='question-textarea'>Two summers ago, I interned at Goldman Sachs and last year,
          I worked at Oliver Wyman...</textarea>
          <p class='question-format'>Concluding Remarks?</p>
          <textarea class='question-textarea'>I would greatly value an opportunity to work at your company.
          I truly hope that you will consider my application.</textarea>
          <button class='submit-button' onClick={this.props.closePopup} >SUBMIT</button>
        </div>

      </div>
  )
}
}

class Step2 extends Component {

  //code for popup inspired from : https://codepen.io/bastianalbers/pen/PWBYvz?editors=0010
  constructor(props) {
    super(props);
    this.state = {
      popupDisplayed :false
    };
  }

  //intialize some example templates that can be rendered immediately
  example_templates = []

  //this array will be added to when a user generates a new template
  user_templates = []


  //this function will be called to render appropriate table entries
  //will check what elements are in the user_templates and if they are new
  renderTemplateEntries() {

    table_frame = `<table class="table-fill">
                          <tbody class="table-hover">
                            ${expression}
                          </tbody>
                      </table>`
    template_entry = `<tr class='example-template'>
                        <td class="text-left">${template1}/td>
                        <td class="text-left">${template2}</td>
                      </tr>`

    //generate string of template renderTemplateEntries
    //while there are elements in the json list

    table_entry_list = ""
    var i;
    for (i = 1; i < user_templates.length; i++) {
      
      table_entry_list += user_templates[i]

    }


    //put together under table frame



  }

  //adds a new template to the list of user templates
  //upon receving a value from a child, add to the list
  addUserTemplate() {

  }

  togglePopup() {
    this.setState({
      popupDisplayed: !this.state.popupDisplayed
    });
  }

  render() {
    //following code and associated css from https://codepen.io/anon/pen/JLJMoO (for the table)
    return (
      <div class='box'>
        <div class='step-header'>
          <div class='step_number'>2</div>
          <div class='step_description_component'>Step 2: Create Email Templates.</div>
        </div>
          <div class='template-body'>
            <div class='template-text'>
                  <div class='template_body'>MY TEMPLATES:</div>
                  <div class='new_template_button' onClick = {this.togglePopup.bind(this)}>Add New Template</div>
                  {this.state.popupDisplayed ? <TemplateForm closePopup={this.togglePopup.bind(this)}/> : null}
            </div>
              <div class='template_container'>
                <table class="table-fill">
                    <thead>
                      <tr>
                      <th class="text-left">Template Name</th>
                      <th class="text-left">Description</th>
                      </tr>
                    </thead>
                    <tbody class="table-hover">
                      <tr class='example-template'>
                        <td class="text-left">Example Template 1</td>
                        <td class="text-left">This is an example Template 1</td>
                      </tr>
                      <tr class='example-template'>
                        <td class="text-left">Example Template 2</td>
                        <td class="text-left">This is an example Template 2</td>
                      </tr>
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
          </div>
      </div>
    );
  }
}
export default Step2;
