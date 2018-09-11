import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { sendWorkshopForm } from '../actions';

class WorkshopCard extends Component {
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
  onSubmit = (values) => {
    values.phase = this.props.phase;
    this.props.sendWorkshopForm(values);
  }
  render() {
    const { handleSubmit, submit } = this.props;
    if(!submit) {
      return(
        <div className="card white onlyCard">
          <h3>Get your <span className="turk">FREE</span> workshop!</h3>
          <p className="left">In only two hours we will help you to refine your idea and test the feasibility. Your team will walk out of this workshop with an idea of how we can help, and practical advice on the technical approach!</p>
          <form onSubmit={handleSubmit(this.onSubmit)} id="formWorkshop" html_id="formWorkshop">
            <Field label='First Name' classname="half" name='fname' type="text" component={this.renderField} />
            <Field label='Last Name' classname="half" name='lname' type="text" component={this.renderField} />
            <Field label='Email' classname="half" name='email' type="email" component={this.renderField} />
            <Field label='Phone' classname="half" name='phone' type="text" component={this.renderField} />
            <button className="btn btn-primary center" type='submit'>Send</button>
          </form>
        </div>
      )
    } else {
      return(
        <div className="card white onlyCard">
          <h3>Step 1: Get your <span className="turk">FREE</span> workshop!</h3>
          <p className="center">Awesome! We received your message and will get back to you as soon as possible!</p>
        </div>
      )
    }

  }
}

function mapStateToProps(state){
  return {
    phase: state.state.phase,
    submit: state.state.submit_workshop
  };
}

export default reduxForm({
  // validate,
  form: 'WorkshopForm',
})(
  connect(mapStateToProps, { sendWorkshopForm }) (WorkshopCard) //combine reduxForm and connect
);
