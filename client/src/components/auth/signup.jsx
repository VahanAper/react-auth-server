import React, { Component, PropTypes } from 'react';
import { reduxForm } from 'redux-form';
import * as actions from '../../actions';

class Signup extends Component {
  constructor(props) {
    super(props);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
  }
  handleFormSubmit(formProps) {
    // Call action creator to sign up the user
    this.props.signupUser(formProps);
  }
  renderAlert() {
    if (this.props.errorMessage) {
      return (
        <div className="alert alert-danger">
          {this.props.errorMessage}
        </div>
      );
    }
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
        {this.renderAlert()}
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
  errorMessage: PropTypes.string,
  handleSubmit: PropTypes.func.isRequired,
  signupUser: PropTypes.func.isRequired,
};
Signup.defaultProps = {
  fields: {
    email: '',
    password: '',
  },
  errorMessage: null,
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

const mapStateToProps = function (state) {
  return { errorMessage: state.auth.error };
};

export default reduxForm({
  form: 'signup',
  fields: ['email', 'password', 'passwordConfirm'],
  validate: validateForm,
}, mapStateToProps, actions)(Signup);
