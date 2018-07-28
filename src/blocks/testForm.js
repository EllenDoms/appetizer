import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import { sendTipsForm } from '../actions';

import { setFormStep } from '../actions';
import FormCard from '../components/testFormCard.js';

const formSteps = [
  { title: "My million dollar idea...",
    answer: "...is solving a problem that a lot of people have.",
    percent: 42,
    tip: "Tackling problems that are interesting to solve rather than those that serve a market need is the No. 1 reason for failure! ",
    bold: "We help you get to the problem and solve it in the best way!" },
  { title: "My team...",
    answer: "...has people with completely different skillsets.",
    percent: 29,
    tip: "Money and time are finite and running out of it is a big issue for startups. Spend your money wise and get funding in an early stage. ",
    bold: "With us you know what you’ll get for each budget, from the start." },
  { title: "The competition...",
    answer: "...doesn't exist, or lacks certain features.",
    percent: 23,
    tip: "A diverse team is critical to the success of a startup. You don’t have the technical skills but you do have a different expertise? ",
    bold: "Good, because we have the technical part covered." },
  { title: "The price tag...",
    answer: "...is something that I calculated already.",
    percent: 19,
    tip: "There will always be competition. Starting with a good market research will help you to differentiate yourself.",
    bold: "On product level, we provide you with the user friendliest version of your idea." }
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

      const { handleSubmit, submit } = this.props;
      return(
        <div className="inner">
          <div id="tips"> {this.renderStep5()} </div>
          <h3>Beat the odds. Contact us now!</h3>
          <form onSubmit={handleSubmit(this.onSubmit)}>
            <Field label='Email' name='email' type="email" component={this.renderField} />
            <Field label='Phone' name='phone' type="text" component={this.renderField} />
            <button className="btn btn-primary center" type='submit'>Send</button>
          </form>
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
  renderStep1 () {
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
  renderStep5 () {
    const tips = [];
    for (let i = 1; i < 5; i++ ) {
      if (this.props.form[i] === true) {
        const key = i - 1;
        tips.push(formSteps[key]);
      }
    }
    return tips.map((tip,i) => {
      return (
        <div className='tip' key={'tip' + i}>
          <div className='percentage'>{tip.percent} %</div>
          <p>{tip.tip} <span className='bold'>{tip.bold}</span></p>
        </div>
      )
    })
  }
  renderField(field) {
    const { type, meta: { touched, error} } = field;
    const classNames= `half formItem line ${touched && error ? 'has-danger' : ''} `;
    return (
      <div className={classNames}>
        <label>{field.label}</label>
        <input type={type} {...field.input} ></input>
        <div className='text-help'>
          {touched ? error : ''}
        </div>
      </div>
    )
  }
  saveStep(step, answer) { this.props.setFormStep(step, answer); }
  onSubmit = () => {

  }
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
  return {
    form: state.state.testForm
  };
}

export default reduxForm({
  // validate,
  form: 'tipsForm',
})(
  connect(mapStateToProps, { setFormStep, sendTipsForm }) (TestForm) //combine reduxForm and connect
);
