import React, { Component } from 'react';
import { connect } from 'react-redux';

import { setFormStep } from '../actions';

const formSteps = [
  { title: "I am someone who...",
    options: ["...has an awesome idea!", "...owns a start-up but needs some help.", "...works in a company that has a new project."] },
  { title: "My million dollar idea...",
    answer: "...is solving a problem that a lot of people have." },
  { title: "My team...",
    answer: "...has people with completely different skillsets." },
  { title: "The competition...",
    answer: "...doesn't exist, or lacks certain features." },
  { title: "The price tag...",
    answer: "...is something that I calculated already." },
];

const tips = [

]

class FormSteps extends Component {
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
  renderStep1 = () => {
    return formSteps[0].options.map((option, key) => {
      const img = require(`../style/img/personas/persona${key}.png`);
      return(
        <div className="card item persona" key={key} onClick={() => {this.saveStep(0, option)}}>
          <img src={img} />
          <p>{option}</p>
        </div>
      )
    })
  }
  renderStep = (form) => {
    console.log(form)
    const step = form.length;
    const img = require(`../style/img/testForm/step${step}.png`);
    return (
      <div className="card onlyCard formCard item">
        <img src={img} />
        <p>{formSteps[step].answer}</p>
        <div className="buttons">
          <span className="btn btn-primary danger" onClick={() => {this.saveStep(step, false)}}>No</span>
          <span className="btn btn-primary" onClick={() => {this.saveStep(step, true)}}>Yes!</span>
        </div>
      </div>
    )
  }
  saveStep = (step, answer) => {
    this.props.setFormStep(step, answer);
  }
  render() {
    let { form } = this.props;
    let step = form.length;
    console.log(form.length)
    if (step === 0) {
      return(
        <div id="testForm">
          <div id="stepLine"> {this.renderStepLine(step)} </div>
          <h3>{formSteps[step].title}</h3>
          <div id="personas">{this.renderStep1()}</div>
        </div>
      )
    } else if ( step === 5) {
      return(
        <div id="testForm">
          <div id="stepLine"> {this.renderStepLine(step)} </div>
        </div>
      )
    } else {
      return(
        <div id="testForm">
          <div id="stepLine"> {this.renderStepLine(step)} </div>
          <h3>{formSteps[step].title}</h3>
          {this.renderStep(form)}

        </div>
      )
    }

  }
}

function mapStateToProps(state){
  console.log(state)
  return { form: state.state.testForm };
}

export default connect(mapStateToProps, {setFormStep})(FormSteps);
