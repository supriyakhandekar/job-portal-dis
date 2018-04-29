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
          <div class='step_description_component'>Send</div>
          </div>
          <div class='search-results'>
            <p class='confirmation-page-text'>You are all set.</p>
            <div class='confirmation-container'>
             {

                this.props.cart.map(function(item) {
                  return <div class='confirmation-company'>{item}</div>
                })

             }
            </div>
          </div>

      </div>
    );
  }
}
export default Step4;
