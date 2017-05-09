import React, { Component, PropTypes } from 'react';
import { reduxForm } from 'redux-form';

class Signin extends Component {
  constructor(props) {
    super(props);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
  }

  handleFormSubmit({ email, password }) {
    console.log('email', email); // eslint-disable-line
    console.log('password', password); // eslint-disable-line
  }

  render() {
    const { handleSubmit, fields: { email, password } } = this.props;

    return (
      <form onSubmit={handleSubmit(this.handleFormSubmit)}>
        <fieldset className="form-group">
          <label htmlFor="email">Email:</label>
          <input {...email} id="email" className="form-control" />
        </fieldset>
        <fieldset className="form-group">
          <label htmlFor="password">Password:</label>
          <input {...password} id="password" className="form-control" />
        </fieldset>
        <button className="btn btn-primary" action="submit">Sign In</button>
      </form>
    );
  }
}

Signin.propTypes = {
  fields: PropTypes.shape({
    email: PropTypes.object,
    password: PropTypes.object,
  }),
  handleSubmit: PropTypes.func.isRequired,
};
Signin.defaultProps = {
  fields: {
    email: '',
    password: '',
  },
};

export default reduxForm({
  form: 'signin',
  fields: ['email', 'password'],
})(Signin);
