import React, { Component } from 'react';
import './step2.css';
import './step_shared.css';


class TemplateForm extends Component {

  constructor(props) {

    super(props);
    this.state =
    {
      name: 'template.name',
      description: 'description',
      intro: 'intro',
      position: 'position',
      experience: 'experience',
      conclusion: 'conclusion'
    };

    this.handleChangeName = this.handleChangeName.bind(this);
    this.handleChangeDesc = this.handleChangeDesc.bind(this);
    this.handleChangePos = this.handleChangePos.bind(this);
    this.handleChangeExp = this.handleChangeExp.bind(this);
    this.handleChangeIntro = this.handleChangeIntro.bind(this);
    this.handleChangeConc = this.handleChangeConc.bind(this);
  }

  handleChangeName(event) {
    this.setState({name: event.target.value});
  }

  handleChangeDesc(event) {
    this.setState({description: event.target.value});
  }

  handleChangeIntro(event) {

    this.setState({intro: event.target.value});
  }

  handleChangePos(event) {

    this.setState({position: event.target.value});
  }

  handleChangeExp(event) {

    this.setState({experience: event.target.value});
  }

  handleChangeConc(event) {

    this.setState({conclusion: event.target.value});
  }

  onClick(event) {
    this.props.closePopup();
    this.props.getFormValues(this.state.name, this.state.description,
                              this.state.intro, this.state.position, this.state.experience,
                              this.state.conclusion);
  }

render() {
  return (
      <div class='form-box'>
        <div class='form-questions'>
          <div class='form-header'>Create a Template.</div>
          <p class='question-format' >Name your template</p>
            <textarea class='question-textarea' onChange={this.handleChangeName}>This template is for start-ups</textarea>
          <p class='question-format'>Write a description for your template.</p>
            <textarea class='question-textarea' onChange={this.handleChangeDesc}>This template is for start-ups</textarea>
          <p class='question-format'>Write your Introductory Pitch.</p>
            <textarea class='question-textarea' onChange={this.handleChangeIntro}>Summer Analyst</textarea>
          <p class='question-format'>What position are you applying for?</p>
            <textarea class='question-textarea' onChange={this.handleChangePos} >I am a third year student at Yale-NUS College, majoring in
          Economics and minoring in Arts and Humanities. Having experience in both the technical and theoretical
          space, I feel that I would contribute great work to your company</textarea>
          <p class='question-format'>Talk about your experience...</p>
            <textarea class='question-textarea' onChange={this.handleChangeExp}>Two summers ago, I interned at Goldman Sachs and last year,
          I worked at Oliver Wyman...</textarea>
          <p class='question-format'>Concluding Remarks?</p>
            <textarea class='question-textarea' onChange={this.handleChangeConc}>I would greatly value an opportunity to work at your company.
          I truly hope that you will consider my application.</textarea>
          <button class='submit-button' onClick={this.props.closePopup} onClick = {this.onClick.bind(this)}>SUBMIT</button>
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
      popupDisplayed :false,
      formNames: [],
      formDescriptions: [],
      formValues : {},
      templatesCreated : []
    };

    this.renderTemplateEntries = this.renderTemplateEntries.bind(this);

  }
  //intialize some example templates that can be rendered immediately
  //example_templates = []
  //this array will be added to when a user generates a new template
  //user_templates = []

  getFormValues(name, description, intro, position, experience, conclusion) {

    var obj = {name_key: name,
           description_key: description,
           intro_key: intro,
           position_key: position,
           experience_key: experience,
           conclusion_key: conclusion };

    //create two more arrays for template name and desriptions

    var updatedNames = this.state.formNames,
        updatedDesc = this.state.formDescriptions;

    this.setState({formNames: updatedNames.concat(name)});
    this.setState({formDescriptions: updatedDesc.concat(description)});
    this.setState({formValue: obj});
  }
  //gets values and generates a template
  //adds to state
  createTemplate(obj) {

    var greeting = 'Dear Christy,';

    var middle = `My name is Supriya and I am reaching out to you because I am
                  very interested in applying
                  for a job at Samsara' ${obj.intro_key}`;

    var end = `${obj.experience_key}`

    var template_obj = {'greeting': greeting, 'middle': middle, 'end': end};

    //var templates = this.state.templatesCreated;
    //this.setState({templatesCreated:templates});
    //this.setState({templatesCreated: template_obj});

  }
  //this function will be called to render appropriate table entries
  //will check what elements are in the user_templates and if they are new

  showPreview(obj) {

    //this.createTemplate(obj);
    var template_string = this.state.templatesCreated;
    return <div>Test</div>
  }


  renderTemplateEntries() {
    //make this append

    /*
    var table_frame = <table class="table-fill">
                          <thead>
                            <tr>
                            <th class="text-left">TEMPLATE NAME</th>
                            <th class="text-left">Description</th>
                            </tr>
                          </thead>
                          <tbody class="table-hover">
                            <tr>
                              {this.state.formNames.map(function(item) {
                                return <td class="text-left">Test1</td>
                              })}
                              {this.state.formDescriptions.map(function(item) {
                               return <td class="text-left">Test2</td>
                              })
                              }
                            </tr>
                          </tbody>
                      </table>;
                */
    //generate template string
    //this.createTemplate(obj);
    //return table_frame;

   }
    //generate string of template renderTemplateEntries
    //while there are elements in the json list

    /*
    table_entry_list = ""
    var i;
    for (i = 1; i < user_templates.length; i++) {

      table_entry_list += user_templates[i]

    }
    */
    //put together under table frame


  //adds a new template to the list of user templates
  //upon receving a value from a child, add to the list
/*
  addUserTemplate() {
  }
*/
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
          <div class='step_description_component'>Create Email Templates.</div>
        </div>
          <div class='template-body'>
            <div class='template-text'>=
                  <div class='template_body'>MY TEMPLATES:</div>
                  <div class='new_template_button' onClick = {this.togglePopup.bind(this)}>Add New Template</div>
                  {this.state.popupDisplayed ? <TemplateForm closePopup={this.togglePopup.bind(this)} getFormValues = {this.getFormValues.bind(this)}/> : null}
            </div>
            <div class='template_container'>
              <table class="table-fill">
                    <thead>
                      <tr>
                        <th class="text-left">TEMPLATE NAME</th>
                      </tr>
                    </thead>
                    <tbody class="table-hover">
                        {this.state.formNames.map(function(item) {
                          return <tr>
                                  <td class="text-left">{item}</td>
                                </tr>
                        })}
                    </tbody>
              </table>
            </div>
          </div>
      </div>
    );
  }
}

export default Step2;
