import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { sendContactForm } from '../actions';

class ContactForm extends Component {
  renderField(field) {
    const { type, meta: { touched, error} } = field;
    const classNames= `formItem line ${touched && error ? 'has-danger' : ''} `;
    return (
      <div className={classNames}>
        <div className='text-help'>
          {touched ? error : ''}
        </div>
        <label>{field.label}</label>
        <input type={type} {...field.input} ></input>
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
    this.props.sendContactForm(values);
  }
  render() {
    const { handleSubmit } = this.props;
    return (
      <form onSubmit={handleSubmit(this.onSubmit)}>
        <Field label='Name' name='name' type="text" component={this.renderField} />
        <Field label='Email' name='email' type="email" component={this.renderField} />
        <Field label='Phone' name='phone' type="text" component={this.renderField} />
        <div className="formItem radio">
          <label>Preferred method of communication</label>
          <Field name='communication' type='radio' value="Phone" component={this.renderRadio} />
          <Field name='communication' type='radio' value="Email" component={this.renderRadio} />
        </div>
        <Field label='Message' name='message' type='textarea' component={this.renderBigField} />
        <button className="btn btn-primary center" type='submit'>Send</button>
      </form>
    )
  }
}

function validate(values) { //validate function will automatically be called by redux-form
  const errors = {};
  // validate input (values)
  if(!values.name) { errors.name = 'We need a name, or at least a nickname.'; }
  if(!values.email) { errors.email = 'Enter an email, please'; }
  if(!values.phone) { errors.phone = 'Enter a phone number, please'; }
  if(!values.communication) { errors.communication = 'Pick one!'; }
  // if errors is empty, form is fine to submit
  // if errors not empty: form is invalid
  return errors;
}

export default reduxForm({
  validate,
  form: 'ContactForm',
  initialValues: { communication: "Phone" }
})(
  connect(null, { sendContactForm }) (ContactForm) //combine reduxForm and connect
);
