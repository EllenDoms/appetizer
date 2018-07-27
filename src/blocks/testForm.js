import React, { Component } from 'react';
import { connect } from 'react-redux';

import { setFormStep } from '../actions';
import FormCard from '../components/testFormCard.js';

const formSteps = [
  { title: "My million dollar idea...",
    answer: "...is solving a problem that a lot of people have." },
  { title: "My team...",
    answer: "...has people with completely different skillsets." },
  { title: "The competition...",
    answer: "...doesn't exist, or lacks certain features." },
  { title: "The price tag...",
    answer: "...is something that I calculated already." },
];

class TestForm extends Component {
  renderStepLine(activeStep) {
    let rows= [];
    for (let i = 0; i < 5; i++) {
      rows.push(
        <div key={i} className={i < activeStep ? ' active item' : 'item' } >
          {i !== 0 ? <div className="line" /> : "" }
        </div>
      )
    }
    return rows;
  }
  renderStep(activeStep) {
    if (activeStep === 0) {
      return(
        <div className="inner">
          <h3>I am someone who...</h3>
          <div id="personas">{this.renderStep1()}</div>
        </div>
      )
    } else if ( activeStep === 5) {
      return(
        <div className="inner">
          step 5
        </div>
      )
    } else {
      const step = activeStep - 1
      return(
        <div className="inner">
          <h3>{formSteps[step].title}</h3>
          <FormCard step={step} answer={formSteps[step].answer} buttonClick={(step, answer) => {this.saveStep(step, answer)}} />
        </div>
      )
    }
  }
  renderStep1 = () => {
    const options = ["...has an awesome idea!", "...owns a start-up but needs some help.", "...works in a company that has a new project."];
    return options.map((option, key) => {
      const img = require(`../style/img/personas/persona${key}.png`);
      return(
        <div className="card item persona" key={key} onClick={() => {this.saveStep(0, option)}}>
          <img src={img} />
          <p>{option}</p>
        </div>
      )
    })
  }
  saveStep = (step, answer) => { this.props.setFormStep(step, answer); }
  render() {
    let { form } = this.props;
    let step = form.length;
    return(
        <div>
          <h2>Test your idea now!</h2>
          <div id="tabcontent">
            <div className="container">
              <div id="testForm">
                <div id="stepLine"> {this.renderStepLine(step)} </div>
                {this.renderStep(step)}
              </div>
            </div>
          </div>
        </div>
    )
  }
}


function mapStateToProps(state){
  console.log(state)
  return { form: state.state.testForm };
}

export default connect(mapStateToProps, {setFormStep})(TestForm);
