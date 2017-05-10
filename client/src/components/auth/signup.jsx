import React, { Component, PropTypes } from 'react';
import { reduxForm } from 'redux-form';
import * as actions from '../../actions';

class Signup extends Component {
  handleFormSubmit() {
    return true;
  }
  render() {
    const { handleSubmit, fields: { email, password, passwordConfirm } } = this.props;

    return (
      <form onSubmit={handleSubmit(this.handleFormSubmit)}>
        <fieldset className="form-group">
          <label htmlFor="email">Email:</label>
          <input {...email} id="email" className="form-control" />
          {email.touched && email.error && <div className="text-danger">{email.error}</div>}
        </fieldset>
        <fieldset className="form-group">
          <label htmlFor="password">Password:</label>
          <input {...password} type="password" id="password" className="form-control" />
          {password.touched && password.error && <div className="text-danger">{password.error}</div>}
        </fieldset>
        <fieldset className="form-group">
          <label htmlFor="passwordConfirm">Confirm Password:</label>
          <input {...passwordConfirm} type="password" id="passwordConfirm" className="form-control" />
          {passwordConfirm.touched && passwordConfirm.error && <div className="text-danger">{passwordConfirm.error}</div>}
        </fieldset>
        <button className="btn btn-primary" action="submit">Sign Up</button>
      </form>
    );
  }
}

Signup.propTypes = {
  fields: PropTypes.shape({
    email: PropTypes.object,
    password: PropTypes.object,
  }),
  handleSubmit: PropTypes.func.isRequired,
};
Signup.defaultProps = {
  fields: {
    email: '',
    password: '',
  },
};

const validateForm = function (formProps) {
  const errors = {};

  if (!formProps.email) {
    errors.email = 'Please enter an email.';
  }
  if (!formProps.password) {
    errors.password = 'Please enter a password.';
  }
  if (!formProps.passwordConfirm) {
    errors.passwordConfirm = 'Please enter a passwordConfirm.';
  }
  if (formProps.password !== formProps.passwordConfirm) {
    errors.passwordConfirm = 'Passwords must match!';
  }

  return errors;
};

export default reduxForm({
  form: 'signup',
  fields: ['email', 'password', 'passwordConfirm'],
  validate: validateForm,
}, null, actions)(Signup);
