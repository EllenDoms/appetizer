import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import { sendTipsForm } from '../actions';

import { addFormCount, setFormStep, saveCompany } from '../actions';
import FormCard from '../components/tipsFormCard.js';

const formSteps = [
  // problem
  { tag: "problem",
    title: "My million dollar idea...",
    answer: "...is solving a problem that a lot of people have.",
    percent: 42,
    tip: "...of startups fail because they are not solving a real problem! Tackling problems that are interesting to solve rather than those that serve a market need is the No. 1 reason for failure! ",
    bold: "We help you get to the problem and solve it in the best way!" },
  // price
  { tag: "price",
    title: "The price tag...",
    answer: "...is something that I calculated already.",
    percent: 19,
    tip: "...of startups fail because of their budget ! Money and time are finite and running out of it is a big issue for startups. Spend your money wise and get funding in an early stage. ",
    bold: "With us you know what you’ll get for each budget, from the start." },
  // Skills
  { tag: "skills",
    title: "My team...",
    answer: "...has people with completely different skillsets.",
    percent: 29,
    tip: "...of startups fail because they son't have the skills. A diverse team is critical to the success of a startup. You don’t have the technical skills but you do have a different expertise? ",
    bold: "Good, because we have the technical part covered." },
  // Competitors
  { tag: "competitors",
    title: "The competition...",
    answer: "...doesn't exist, or lacks certain features.",
    percent: 23,
    tip: "...of startups fail because they don't do a good market research. There will always be competition. Starting with a good market research will help you to differentiate yourself.",
    bold: "On product level, we provide you with the user friendliest version of your idea." },


];

class TipsForm extends Component {
  renderStepLine(activeStep) {
    let rows= [];
    for (let i = 0; i < 6; i++) {
      rows.push(
        <div key={i} className={i <= activeStep ? ' active item' : 'item' } >
          {i !== 0 ? <div className="line" /> : "" }
        </div>
      )
    }
    return rows;
  }
  renderStep(activeStep) {
    const { handleSubmit, submit } = this.props;
    if (activeStep === 0) {
      const options = ["...has an awesome idea!", "...owns a start-up but needs some help.", "...works in a company that has a new project."];
      return(
        <div className="inner">
          <h3>I am someone who...</h3>
          <div id="personas">
            {
              options.map((option, key) => {
                const img = require(`../style/img/personas/persona${key}.png`);
                return(
                  <div className="card item persona" key={key} onClick={() => {this.saveCompany(option)}}>
                    <img src={img} />
                    <p>{option}</p>
                  </div>
                )
              })
            }
          </div>
        </div>
      )
    } else if ( activeStep === 5) {
      const { website_tips } = this.props;
      let tips = [];
      for (let i = 0; i < website_tips.length; i++ ) {
        console.log(website_tips[i]);
        // find website_tip in array formSteps
        let selected = formSteps.find(select => select.tag === website_tips[i])
        tips.push(selected);
      }
      if(tips.length === 0) {
        return (
          <div className="inner">
            <div id="tips">
              <p>Looks like you already thought about a lot of things and are on to a good start! Of course, there are more things to keep in mind.</p>
            </div>
          </div>
        )
      } else {
        return (
          <div className="inner">
            <div id="tips">
              {
                tips.map((tip,i) => {
                  return (
                    <div className='tip' key={'tip' + i}>
                      <div className='percentage'>{tip.percent} %</div>
                      <p>{tip.tip} <span className='bold'>{tip.bold}</span></p>
                    </div>
                  )
                })
              }
            </div>
          </div>
        )
      }

    } else { //steps 1-4
      const step = activeStep - 1;
      return(
        <div className="inner">
          <h3>{formSteps[step].title}</h3>
          <FormCard step={step} answer={formSteps[step].answer} buttonClick={(step, answer) => {this.saveStep(step, answer)}} />
        </div>
      )
    }
  }
  renderForm(step) {
    let { website_tips, website_tips_company, handleSubmit, submit } = this.props;
    let formVisible = step < 5 ? 'hidden' : 'visible';
    if(!submit) {
      return (
        <div className={formVisible}>
          <h3>Beat the odds. Contact us now!</h3>
          <form onSubmit={handleSubmit(this.onSubmit)} id="formTip" html_id="formTip">
            <Field label='First Name' className="half" name='fname' type="text" component={this.renderField} />
            <Field label='Last Name' className="half" name='lname' type="text" component={this.renderField} />
            <Field label='Email' className="half" name='email' type="email" component={this.renderField} />
            <Field label='Phone' className="half" name='phone' type="text" component={this.renderField} />
            <div className="hidden">
              <Field label='Website tips' className="half" defaultValue={website_tips} name='website_tips' type="text" component={this.renderField} />
              <Field label='Website company' className="half" defaultValue={website_tips_company} name='website_company' type="text" component={this.renderField} />
            </div>
            <button className="btn btn-primary center" type='submit'>Send</button>
          </form>
        </div>

      )
    } else {
      return(
        <div>
          <h3>Beat the odds. Contact us now!</h3>
          <p className="center">Awesome! We received your message and will get back to you as soon as possible!</p>
        </div>
      )
    }
  }
  renderField(field) {
    const { name, type, meta: { touched, error}, defaultValue } = field;
    const classNames= `half formItem line ${touched && error ? 'has-danger' : ''} `;
    return (
      <div className={classNames}>
        <label id={field.input.name}>{field.label}</label>
        <input property={name} type={type} {...field.input} value={defaultValue} ></input>
        <div className='text-help'>
          {touched ? error : ''}
        </div>
      </div>
    )
  }
  saveCompany(option) {
    this.props.saveCompany(option);
    let newStep = this.props.tipsActiveStep + 1;
    this.props.addFormCount(newStep);
  }
  saveStep(step, answer) {
    const tipsValues = ['problem', 'price', 'skills', 'competitors']
    answer ? this.props.setFormStep(tipsValues[step]) : '';
    let newStep = this.props.tipsActiveStep + 1;
    this.props.addFormCount(newStep);
  }
  onSubmit = (values) => { this.props.sendTipsForm(values); }
  render() {
    let { website_tips, tipsActiveStep } = this.props;
    return(
        <div>
          <h2>Test your idea now!</h2>
          <div id="tabcontent">
            <div className="container">
              <div id="tipsForm">
                <div id="stepLine"> {this.renderStepLine(tipsActiveStep)} </div>
                {this.renderStep(tipsActiveStep)}
                {this.renderForm(tipsActiveStep)}
              </div>
            </div>
          </div>
        </div>
    )
  }
}

function validate(values) { //validate function will automatically be called by redux-form
  const errors = {};
  // validate input (values)
  if(!values.fname) { errors.fname = 'We need a first name!'; }
  if(!values.lname) { errors.lname = 'We need a last name!'; }
  if(!values.phone && !values.email) { errors.email = 'We need a phone number or email!'; }
  // if errors is empty, form is fine to submit
  // if errors not empty: form is invalid
  return errors;
}

function mapStateToProps(state){
  return {
    website_tips: state.state.website_tips,
    website_tips_company: state.state.website_tips_company,
    submit: state.state.submit_tips,
    tipsActiveStep: state.state.tipsActiveStep,
  };
}

export default reduxForm({
  validate,
  form: 'tipsForm',
})(
  connect(mapStateToProps, { addFormCount, saveCompany, setFormStep, sendTipsForm }) (TipsForm) //combine reduxForm and connect
);
