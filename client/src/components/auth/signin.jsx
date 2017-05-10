import React, { Component, PropTypes } from 'react';
import { reduxForm } from 'redux-form';
import * as actions from '../../actions';

class Signin extends Component {
  constructor(props) {
    super(props);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
  }

  handleFormSubmit({ email, password }) {
    this.props.signinUser({ email, password });
  }

  renderAlert() {
    if (this.props.errorMessage) {
      return (
        <div className="alert alert-danger">
          <strong>{this.props.errorMessage}</strong>
        </div>
      );
    }
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
          <input type="password" {...password} id="password" className="form-control" />
        </fieldset>
        {this.renderAlert()}
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
  signinUser: PropTypes.func.isRequired,
  errorMessage: PropTypes.string,
};
Signin.defaultProps = {
  fields: {
    email: '',
    password: '',
  },
  errorMessage: null,
};

const mapStateToProps = function (state) {
  return { errorMessage: state.auth.error };
};

export default reduxForm({
  form: 'signin',
  fields: ['email', 'password'],
}, mapStateToProps, actions)(Signin);
