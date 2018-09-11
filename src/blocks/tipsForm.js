import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import { sendTipsForm } from '../actions';

import { setFormStep } from '../actions';
import FormCard from '../components/tipsFormCard.js';

const formSteps = [
  // problem
  { title: "My million dollar idea...",
    answer: "...is solving a problem that a lot of people have.",
    percent: 42,
    tip: "...of startups fail because they are not solving a real problem! Tackling problems that are interesting to solve rather than those that serve a market need is the No. 1 reason for failure! ",
    bold: "We help you get to the problem and solve it in the best way!" },
  // price
  { title: "The price tag...",
    answer: "...is something that I calculated already.",
    percent: 19,
    tip: "...of startups fail because of their budget ! Money and time are finite and running out of it is a big issue for startups. Spend your money wise and get funding in an early stage. ",
    bold: "With us you know what you’ll get for each budget, from the start." },
  // Skills
  { title: "My team...",
    answer: "...has people with completely different skillsets.",
    percent: 29,
    tip: "...of startups fail because they son't have the skills. A diverse team is critical to the success of a startup. You don’t have the technical skills but you do have a different expertise? ",
    bold: "Good, because we have the technical part covered." },
  // Competitors
  { title: "The competition...",
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
      return(
        <div className="inner">
          <h3>I am someone who...</h3>
          <div id="personas">{this.renderStep1()}</div>
          <form className="hidden" onSubmit={handleSubmit(this.onSubmit)} id="formTip" html_id="formTip">
            <Field label='First Name' className="half" name='fname' type="text" component={this.renderField} />
            <Field label='Last Name' className="half" name='lname' type="text" component={this.renderField} />
            <Field label='Email' className="half" name='email' type="email" component={this.renderField} />
            <Field label='Phone' className="half" name='phone' type="text" component={this.renderField} />
            <button className="btn btn-primary center" type='submit'>Send</button>
          </form>
        </div>
      )
    } else if ( activeStep === 5) {
      if(!submit) {
        return(
          <div className="inner">
            <div id="tips"> {this.renderStep5()} </div>
            <h3>Beat the odds. Contact us now!</h3>
            <form onSubmit={handleSubmit(this.onSubmit)} id="formTip" html_id="formTip">
              <Field label='First Name' className="half" name='fname' type="text" component={this.renderField} />
              <Field label='Last Name' className="half" name='lname' type="text" component={this.renderField} />
              <Field label='Email' className="half" name='email' type="email" component={this.renderField} />
              <Field label='Phone' className="half" name='phone' type="text" component={this.renderField} />
              <button className="btn btn-primary center" type='submit'>Send</button>
            </form>
          </div>
        )
      } else {
        return(
          <div>
            <p className="center">Awesome! We received your message and will get back to you as soon as possible!</p>
          </div>
        )
      }
    } else {
      const step = activeStep - 1
      return(
        <div className="inner">
          <h3>{formSteps[step].title}</h3>
          <FormCard step={step} answer={formSteps[step].answer} buttonClick={(step, answer) => {this.saveStep(step, answer)}} />
          <form className="hidden" onSubmit={handleSubmit(this.onSubmit)} id="formTip" html_id="formTip">
            <Field label='First Name' className="half" name='fname' type="text" component={this.renderField} />
            <Field label='Last Name' className="half" name='lname' type="text" component={this.renderField} />
            <Field label='Email' className="half" name='email' type="email" component={this.renderField} />
            <Field label='Phone' className="half" name='phone' type="text" component={this.renderField} />
            <button className="btn btn-primary center" type='submit'>Send</button>
          </form>
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
    if(tips == "") {
      return (
        <p>Looks like you already thought about a lot of things and are on to a good start! Of course, there are more things to keep in mind.</p>
      )
    } else {
      return tips.map((tip,i) => {
        return (
          <div className='tip' key={'tip' + i}>
            <div className='percentage'>{tip.percent} %</div>
            <p>{tip.tip} <span className='bold'>{tip.bold}</span></p>
          </div>
        )
      })
    }
  }
  renderField(field) {
    const { name, type, meta: { touched, error} } = field;
    const classNames= `half formItem line ${touched && error ? 'has-danger' : ''} `;
    return (
      <div className={classNames}>
        <label id={field.input.name}>{field.label}</label>
        <input property={name} type={type} {...field.input} ></input>
        <div className='text-help'>
          {touched ? error : ''}
        </div>
      </div>
    )
  }
  saveStep(step, answer) { this.props.setFormStep(step, answer); }
  onSubmit = (values) => {
    console.log(values)
    values.tips = {
      company: this.props.form[0],
      problem: this.props.form[1],
      price: this.props.form[2],
      Skills: this.props.form[3],
      Competitors: this.props.form[4]
    }
    this.props.sendTipsForm(values);
  }
  render() {
    let { form } = this.props;
    let step = form.length;
    return(
        <div>
          <h2>Test your idea now!</h2>
          <div id="tabcontent">
            <div className="container">
              <div id="tipsForm">
                <div id="stepLine"> {this.renderStepLine(step)} </div>
                {this.renderStep(step)}
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
    form: state.state.tipsForm,
    submit: state.state.submit_tips
  };
}

export default reduxForm({
  validate,
  form: 'tipsForm',
})(
  connect(mapStateToProps, { setFormStep, sendTipsForm }) (TipsForm) //combine reduxForm and connect
);
