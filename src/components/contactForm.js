import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { sendContactForm } from '../actions';

class ContactForm extends Component {
  renderField(field) {
    const { type, classname, meta: { touched, error} } = field;
    const classNames= `${classname} formItem line ${touched && error ? 'has-danger' : ''} `;
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
  renderRadio(field) {
    const { input: { value }, type } = field;
    return (  
      <span className='radioItem'>
        <input type={type} {...field.input} ></input>
        <span className="value">{value}</span>
      </span>
    )
  }
  renderBigField(field) {
    const { type, meta: { touched, error} } = field;
    const classNames= `formItem textarea ${touched && error ? 'has-danger' : ''} `;
    return (
      <div className={classNames}>
        <div className='text-help'>
          {touched ? error : ''}
        </div>
        <label>{field.label}</label>
        <textarea type={type} {...field.input} ></textarea>
      </div>
    )
  }
  onSubmit = (values) => {
    values.phase = this.props.phase;
    this.props.sendContactForm(values);
  }
  render() {
    const { handleSubmit, submit, phase  } = this.props;
    if(!submit) {
      return (
        <form onSubmit={handleSubmit(this.onSubmit)}>
          <Field label='Name' name='name' type="text" component={this.renderField} />
          <Field label='Email' classname="half" name='email' type="email" component={this.renderField} />
          <Field label='Phone' classname="half" name='phone' type="text" component={this.renderField} />
          <div className="formItem radio">
            <label>Preferred method of communication</label>
            <Field name='communication' type='radio' value="Phone" component={this.renderRadio} />
            <Field name='communication' type='radio' value="Email" component={this.renderRadio} />
          </div>
          <Field label='Message' name='message' type='textarea' component={this.renderBigField} />
          <button className="btn btn-primary center" type='submit'>Send</button>
        </form>
      )
    } else {
      return (
        <div>
          <p className="center">Awesome! We received your message and will get back to you as soon as possible!</p>
        </div>

      )
    }

  }
}

function validate(values) { //validate function will automatically be called by redux-form
  const errors = {};
  // validate input (values)
  if(!values.name) { errors.name = 'We need a name, or at least a nickname.'; }
  if(!values.email) { errors.email = 'Enter an email, please'; }
  if(!values.phone) { errors.phone = 'Enter a phone number, please'; }
  if(!values.communication) { errors.communication = 'Pick one!'; }
  if(!values.message) { errors.message = 'We need a bit more information to help.'; }
  // if errors is empty, form is fine to submit
  // if errors not empty: form is invalid
  return errors;
}

function mapStateToProps(state){
  return {
    phase: state.state.phase,
    submit: state.state.submit
  };
}

export default reduxForm({
  validate,
  form: 'ContactForm',
  initialValues: { communication: "Phone" }
})(
  connect(mapStateToProps, { sendContactForm }) (ContactForm) //combine reduxForm and connect
);
