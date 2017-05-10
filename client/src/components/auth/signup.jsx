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
        </fieldset>
        <fieldset className="form-group">
          <label htmlFor="password">Password:</label>
          <input {...password} type="password" id="password" className="form-control" />
        </fieldset>
        <fieldset className="form-group">
          <label htmlFor="passwordConfirm">Confirm Password:</label>
          <input {...passwordConfirm} type="password" id="passwordConfirm" className="form-control" />
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

export default reduxForm({
  form: 'signup',
  fields: ['email', 'password', 'passwordConfirm'],
}, null, actions)(Signup);
